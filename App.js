import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GetStartedScreen } from "./components/auth/GetStartedScreen";
import { SignInScreen } from "./components/auth/SignInScreen";
import { SignUpScreen } from "./components/auth/SignUpScreen";
import { HomeNavigator } from "./components/HomeNavigator";
import { SplashScreen } from "./components/SplashScreen";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { useMemo, useReducer, useState } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import { UserContext } from "./context/user/UserContext";
import { HelpModal } from "./components/modal/HelpModal";
import { InviteModal } from "./components/modal/InviteModal";

const Stack = createStackNavigator();

export default function App() {
	const [userContext, setUserContext] = useState({});

	const [state, dispatch] = useReducer(
		(prevState, action) => {
			switch (action.type) {
				case "SIGN_IN":
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
						unsubscribe: action.unsubscribe,
					};
				case "SIGN_OUT":
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isSignout: false,
			userToken: null,
			unsubscribe: null,
		}
	);

	const authContext = useMemo(
		() => ({
			signUp: (email, password, name) => {
				createUserWithEmailAndPassword(auth, email, password)
					.then(async (userCredential) => {
						const user = {
							uid: userCredential.user.uid,
							email: userCredential.user.email,
							name: name,
						};

						const docRef = doc(
							db,
							"users",
							userCredential.user.uid
						);

						await setDoc(docRef, user);

						setUserContext(user);

						const unsubscribe = onSnapshot(docRef, (snapshot) => {
							setUserContext(snapshot.data());
						});

						dispatch({
							type: "SIGN_IN",
							token: userCredential.user.getIdToken(),
							unsubscribe: unsubscribe, // Save the unsubscribe function in state
						});
					})
					.catch((error) => {
						// const errorCode = error.code;
						const errorMessage = error.message;
						alert(errorMessage);
					});
			},
			signIn: (email, password) => {
				signInWithEmailAndPassword(auth, email, password)
					.then(async (userCredential) => {
						// Signed in
						const docRef = doc(
							db,
							"users",
							userCredential.user.uid
						);
						const docSnap = await getDoc(docRef);

						setUserContext(docSnap.data());

						const unsubscribe = onSnapshot(
							docRef,
							(snapshot) => {
								setUserContext(snapshot.data());
							},
							(error) => {
								console.log(`error: ${error}`); // TODO: fix error
							}
						);

						dispatch({
							type: "SIGN_IN",
							token: userCredential.user.getIdToken(),
							unsubscribe: unsubscribe, // Save the unsubscribe function in state
						});
					})
					.catch((error) => {
						// const errorCode = error.code;
						const errorMessage = error.message;
						alert(errorMessage);
					});
			},
			signOut: async () => {
				// Retrieve the unsubscribe function from state
				const { unsubscribe } = state;

				// Stop listening for updates to the user's document
				if (unsubscribe) {
					await unsubscribe(); // Unsubscribe from the snapshot listener
					console.log("Unsubscribed from onSnapshot");
				}

				try {
					// Sign out and wait for it to complete
					await signOut(auth);
					console.log("User signed out successfully");

					// Clear the user context and dispatch the SIGN_OUT action
					setUserContext({});
					dispatch({ type: "SIGN_OUT" });
				} catch (error) {
					console.log("Error signing out:", error);
				}
			},
		}),
		[]
	);

	return (
		<AuthContext.Provider value={authContext}>
			<UserContext.Provider value={userContext}>
				<NavigationContainer>
					<Stack.Navigator>
						{state.isLoading ? (
							// We haven't finished checking for the token yet
							<Stack.Screen
								name='Splash'
								component={SplashScreen}
								options={{
									headerShown: false,
								}}
							/>
						) : state.userToken === null ? (
							// No token found, user isn't signed in
							<Stack.Group>
								<Stack.Screen
									name='GetStarted'
									component={GetStartedScreen}
									options={{
										headerShown: false,
										// When logging out, a pop animation feels intuitive
										// You can remove this if you want the default 'push' animation
										animationTypeForReplace: state.isSignout
											? "pop"
											: "push",
									}}
								/>
								<Stack.Screen
									name='SignIn'
									component={SignInScreen}
									options={{
										headerShown: false,
										// When logging out, a pop animation feels intuitive
										// You can remove this if you want the default 'push' animation
										animationTypeForReplace: state.isSignout
											? "pop"
											: "push",
									}}
								/>
								<Stack.Screen
									name='SignUp'
									component={SignUpScreen}
									options={{
										headerShown: false,
										// When logging out, a pop animation feels intuitive
										// You can remove this if you want the default 'push' animation
										animationTypeForReplace: state.isSignout
											? "pop"
											: "push",
									}}
								/>
							</Stack.Group>
						) : (
							// User is signed in
							<Stack.Group>
								<Stack.Screen
									name='Home'
									component={HomeNavigator}
									options={{
										headerShown: false,
									}}
								/>
							</Stack.Group>
						)}
						{/* Common modal screens */}
						<Stack.Group screenOptions={{ presentation: "modal" }}>
							<Stack.Screen name='Help' component={HelpModal} />
							<Stack.Screen
								name='Invite'
								component={InviteModal}
							/>
						</Stack.Group>
					</Stack.Navigator>
				</NavigationContainer>
			</UserContext.Provider>
		</AuthContext.Provider>
	);
}
