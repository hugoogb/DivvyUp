import { SafeAreaView, Button, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Button
				title="Go to Jane's profile"
				onPress={() => navigation.navigate("Profile", { name: "Jane" })}
			/>
			<Button
				title='See group'
				onPress={() => navigation.navigate("Group")}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
