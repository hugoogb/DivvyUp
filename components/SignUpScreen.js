import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import SvgSignUp from "../assets/undraw_sign_up.svg";
import { globalStyles } from "../styles/global.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SignUpScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signUp } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Sign up</Text>
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
				<TouchableOpacity
					style={globalStyles.button}
					onPress={() => signUp(email, password)}
				>
					<View style={globalStyles.buttonTextContainer}>
						<Text style={globalStyles.buttonText}>Sign up</Text>
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
