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
import SvgSignIn from "../assets/undraw_sign_in.svg";
import { globalStyles } from "../styles/global.styles";

export const SignInScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>SignIn</Text>
				<SvgSignIn width={300} height={300}></SvgSignIn>
				<Text style={globalStyles.textDescription}>
					Log into your DivvyUp account
				</Text>
			</View>
			<View style={styles.containerSign}>
				<TextInput
					placeholder='Email'
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<Button
					title='Sign in'
					onPress={() => signIn(email, password)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	containerSign: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
	},
});
