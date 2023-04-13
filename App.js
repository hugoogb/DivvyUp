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
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;

			try {
				// Restore token stored in `SecureStore` or any other encrypted storage
				// userToken = await SecureStore.getItemAsync('userToken');
				setTimeout(() => {
					dispatch({ type: "RESTORE_TOKEN", token: userToken });
				}, 1500);
			} catch (e) {
				// Restoring token failed
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			// dispatch({ type: "RESTORE_TOKEN", token: userToken });
		};

		bootstrapAsync();
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

				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
				// In the example, we'll use a dummy token

				// dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
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

				// In a production app, we need to send user data to server and get a token
				// We will also need to handle errors if sign up failed
				// After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
				// In the example, we'll use a dummy token

				// dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
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
						) : state.userToken == null ? (
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
