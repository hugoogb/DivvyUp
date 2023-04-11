import { useState, useContext } from "react";
import { AuthContext } from "../App";
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TextInput,
	Button,
} from "react-native";
import SvgLogin from "../assets/undraw_login.svg";

export const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useContext(AuthContext);

	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Login</Text>
				<SvgLogin width={300} height={300}></SvgLogin>
				<Text style={styles.textDescription}>
					Log into your DivvyUp account
				</Text>
			</View>
			<View style={styles.containerSignIn}>
				<TextInput
					placeholder='Username'
					value={username}
					onChangeText={setUsername}
				/>
				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<Button
					title='Sign in'
					onPress={() => signIn({ username, password })}
				/>
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
	containerSignIn: {
		flex: 2,
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
