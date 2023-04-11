import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GroupsScreen } from "./GroupsScreen";
import { FeedScreen } from "./FeedScreen";
import { NotificationsScreen } from "./NotificationsScreen";
import { SettingsScreen } from "./SettingsScreen";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Feed") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "Groups") {
						iconName = focused ? "people" : "people-outline";
					} else if (route.name === "Notifications") {
						iconName = focused
							? "notifications"
							: "notifications-outline";
					} else if (route.name === "Settings") {
						iconName = focused ? "settings" : "settings-outline";
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: "#10181F",
				tabBarInactiveTintColor: "#10181F",
				tabBarBadgeStyle: { backgroundColor: "#C03F3A" },
				tabBarActiveBackgroundColor: "#EEE3D9",
				tabBarInactiveBackgroundColor: "#EEE3D9",
				tabBarStyle: {
					backgroundColor: "#EEE3D9",
					borderTopWidth: 1,
					borderTopColor: "#10181F",
					paddingTop: 10,
				},
			})}
		>
			<Tab.Screen name='Feed' component={FeedScreen} />
			<Tab.Screen name='Groups' component={GroupsScreen} />
			<Tab.Screen
				name='Notifications'
				component={NotificationsScreen}
				// TODO : useContext
				options={{ tabBarBadge: 3 }}
			/>
			<Tab.Screen name='Settings' component={SettingsScreen} />
		</Tab.Navigator>
	);
};
