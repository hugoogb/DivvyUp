import { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import { AuthContext } from "../App";

export const SettingsScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View>
				<Text>Settings</Text>
				<Button title='Sign out' onPress={signOut}></Button>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: "#EEE3D9",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
