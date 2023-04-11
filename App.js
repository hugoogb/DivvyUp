import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen";
import { GroupScreen } from "./components/GroupScreen";

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
					name='Home'
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name='Group' component={GroupScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
