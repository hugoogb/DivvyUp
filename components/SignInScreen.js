import { useState, useContext } from "react";
import { AuthContext } from "../App";
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import SvgSignIn from "../assets/undraw_sign_in.svg";
import { globalStyles } from "../styles/global.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SignInScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Sign in</Text>
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
				<TouchableOpacity
					style={globalStyles.button}
					onPress={() => signIn(email, password)}
				>
					<View style={globalStyles.buttonTextContainer}>
						<Text style={globalStyles.buttonText}>Sign in</Text>
						<Ionicons
							name='arrow-forward-circle'
							size={22}
							color={"#EEE3D9"}
							style={globalStyles.buttonIcon}
						></Ionicons>
					</View>
				</TouchableOpacity>
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
