import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStartedScreen } from "./components/GetStartedScreen";
import { SignInScreen } from "./components/SignInScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { HomeScreen } from "./components/HomeScreen";
import { SplashScreen } from "./components/SplashScreen";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();
export const UserContext = React.createContext();

const Stack = createNativeStackNavigator();

export default function App() {
	const [userContext, setUserContext] = React.useState({});

	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case "RESTORE_TOKEN":
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
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
			isLoading: true,
			isSignout: false,
			userToken: null,
		}
	);

	React.useEffect(() => {
		const bootstrapAsync = async () => {
			let userToken = null;

			try {
				// Restore token from AsyncStorage or any other storage mechanism
				userToken = await AsyncStorage.getItem("userToken");

				if (userToken) {
					// Verify the token with Firebase to ensure its validity
					const credential = auth.signInWithCredential(userToken);
					const { user } = await credential;

					if (!user) {
						// Token is invalid, proceed with appropriate actions
						// For example, redirect to the login/signup screen
						userToken = null;
					}
				} else {
					// Token is not available, proceed with appropriate actions
					// For example, redirect to the login/signup screen
					userToken = null;
				}
			} catch (error) {
				// Handle errors when restoring token or validating it
				console.log("Token validation error:", error);
			}

			// Dispatch the RESTORE_TOKEN action
			dispatch({ type: "RESTORE_TOKEN", token: userToken });
		};

		bootstrapAsync();
	}, []);

	React.useEffect(() => {
		// Function to save the token to AsyncStorage
		const saveTokenToStorage = async (token) => {
			try {
				await AsyncStorage.setItem("userToken", token);
			} catch (error) {
				// Handle error when saving token to AsyncStorage
				console.log(error);
			}
		};

		// Function to remove the token from AsyncStorage
		const removeTokenFromStorage = async () => {
			try {
				await AsyncStorage.removeItem("userToken");
			} catch (error) {
				// Handle error when removing token from AsyncStorage
				console.log(error);
			}
		};

		// Subscribe to the auth state changes
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// User is signed in, save the token to AsyncStorage
				user.getIdToken().then(saveTokenToStorage);
			} else {
				// User is signed out, remove the token from AsyncStorage
				removeTokenFromStorage();
			}
		});

		// Clean up the subscription when the component unmounts
		return () => {
			unsubscribe();
		};
	}, []);

	const authContext = React.useMemo(
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
