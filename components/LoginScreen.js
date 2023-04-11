import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import SvgLogin from "../assets/undraw_login.svg";

export const LoginScreen = () => {
	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Login</Text>
				<SvgLogin width={300} height={300}></SvgLogin>
				<Text style={styles.textDescription}>
					Log into your DivvyUp account
				</Text>
			</View>
			<View style={styles.container}>
				<Text>Login</Text>
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
		fontWeight: "800",
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
