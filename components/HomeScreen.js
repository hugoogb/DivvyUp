import { View, Button } from "react-native";

export const HomeScreen = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Button
				title="Go to Jane's profile"
				onPress={() => navigation.navigate("Profile", { name: "Jane" })}
			/>
		</View>
	);
};
