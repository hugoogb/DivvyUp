import { createStackNavigator } from "@react-navigation/stack";
import { GroupsScreen } from "./GroupsScreen";
import { CreateGroupScreen } from "./CreateGroupScreen";
import { GroupDetailsScreen } from "./GroupDetailsScreen";

const Stack = createStackNavigator();

export const GroupsNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Groups'
				component={GroupsScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='CreateGroup'
				component={CreateGroupScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='GroupDetails'
				component={GroupDetailsScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};
