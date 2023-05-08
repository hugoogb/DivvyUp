import { Text } from "react-native";

export const GroupDetailsScreen = ({ route, navigation }) => {
	const { group } = route.params;
	return (
		<>
			<Text>Group details page</Text>
			<Text>{group.name}</Text>
		</>
	);
};
