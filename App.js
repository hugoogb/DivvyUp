import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { LogoTitle } from "./components/LogoTitle";
import { Button } from "react-native";

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
						headerTitle: (props) => <LogoTitle {...props} />,
						headerRight: () => (
							<Button
								onPress={() => alert("This is a button!")}
								title='Info'
								color='#fff'
							/>
						),
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}
