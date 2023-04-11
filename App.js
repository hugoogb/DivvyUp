import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { LogoTitle } from "./components/LogoTitle";
import { GroupScreen } from "./components/GroupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#f4511e",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Profile'
					component={ProfileScreen}
					initialParams={{ profileID: 42 }}
					options={({ route }) => ({
						title: route.params.name,
						// Add a placeholder button without the `onPress` to avoid flicker
						headerRight: () => <Button title='Update count' />,
					})}
				/>
				<Stack.Screen name='Group' component={GroupScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
