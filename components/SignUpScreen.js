import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TextInput,
	Button,
} from "react-native";
import SvgSignUp from "../assets/undraw_sign_up.svg";
import { globalStyles } from "../styles/global.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../App";

export const SignUpScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signUp } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>SignUp</Text>
				<SvgSignUp width={300} height={300}></SvgSignUp>
				<Text style={globalStyles.textDescription}>
					Create a DivvyUp account if you don't have one already
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
					title='Sign Up'
					onPress={() => signUp(email, password)}
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
