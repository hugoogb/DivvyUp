import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GetStartedScreen } from "./components/auth/GetStartedScreen";
import { SignInScreen } from "./components/auth/SignInScreen";
import { SignUpScreen } from "./components/auth/SignUpScreen";
import { HomeScreen } from "./components/HomeScreen";
import { SplashScreen } from "./components/SplashScreen";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useMemo, useReducer, useState } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import { UserContext } from "./context/user/UserContext";

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
		}
	);

	const authContext = useMemo(
		() => ({
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

						dispatch({
							type: "SIGN_IN",
							token: userCredential.user.getIdToken(),
						});
					})
					.catch((error) => {
						// const errorCode = error.code;
						const errorMessage = error.message;
						alert(errorMessage);
					});
			},
			signOut: () => {
				signOut(auth);
				dispatch({ type: "SIGN_OUT" });
			},
			signUp: (email, password, name) => {
				createUserWithEmailAndPassword(auth, email, password)
					.then(async (userCredential) => {
						const user = {
							uid: userCredential.user.uid,
							email: userCredential.user.email,
							name: name,
						};

						setUserContext(user);

						await setDoc(
							doc(db, "users", userCredential.user.uid),
							user
						);

						dispatch({
							type: "SIGN_IN",
							token: userCredential.user.getIdToken(),
						});
					})
					.catch((error) => {
						// const errorCode = error.code;
						const errorMessage = error.message;
						alert(errorMessage);
					});
			},
		}),
		[]
	);

	return (
		<AuthContext.Provider value={authContext}>
			<UserContext.Provider value={userContext}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#2A6197",
							},
							headerTintColor: "#F2F4EE",
							headerTitleStyle: {
								fontWeight: "bold",
							},
						}}
					>
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
							<>
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
							</>
						) : (
							// User is signed in
							<Stack.Screen
								name='Home'
								component={HomeScreen}
								options={{
									headerShown: false,
								}}
							/>
						)}
					</Stack.Navigator>
				</NavigationContainer>
			</UserContext.Provider>
		</AuthContext.Provider>
	);
}
