import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GroupsScreen } from "./GroupsScreen";
import { FeedScreen } from "./FeedScreen";
import { NotificationsScreen } from "./NotificationsScreen";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Feed' component={FeedScreen} />
			<Tab.Screen name='Groups' component={GroupsScreen} />
			<Tab.Screen name='Notifications' component={NotificationsScreen} />
		</Tab.Navigator>
	);
};
