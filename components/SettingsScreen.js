import { useContext } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import { AuthContext } from "../App";
import SvgSettings from "../assets/undraw_settings.svg";

export const SettingsScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Settings</Text>
				<SvgSettings width={300} height={300}></SvgSettings>
				<Text style={styles.textDescription}>
					Change your settings / signOut
				</Text>
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
	containerTitle: {
		flex: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 56,
		fontWeight: "700",
		marginBottom: 20,
		color: "#10181F",
	},
	textDescription: {
		fontSize: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 20,
		textAlign: "center",
	},
});
