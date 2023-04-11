import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStartedScreen } from "./components/GetStartedScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SignUpScreen } from "./components/SignUpScreen";
import { GroupsScreen } from "./components/GroupsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
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
				<Stack.Screen
					name='GetStarted'
					component={GetStartedScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Login'
					component={LoginScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUpScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name='Groups' component={GroupsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
