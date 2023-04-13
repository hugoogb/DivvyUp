import { View, Text } from "react-native";
import { globalStyles } from "../styles/global.styles";

export const GroupCard = ({ groupId }) => {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.textDescription}>{groupId}</Text>
		</View>
	);
};
