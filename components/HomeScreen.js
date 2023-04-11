import { SafeAreaView, View, Button, StyleSheet, Text } from "react-native";

export const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>DivvyUp</Text>
			</View>
			<View style={styles.container}>
				<Button
					title="Go to Jane's profile"
					onPress={() =>
						navigation.navigate("Profile", { name: "Jane" })
					}
				/>
				<Button
					title='See group'
					onPress={() => navigation.navigate("Group")}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	containerTitle: {
		flex: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 48,
		fontWeight: "700",
	},
});
