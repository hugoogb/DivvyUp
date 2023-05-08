import { useState, useContext } from "react";
import { AuthContext } from "../../App";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import SvgSignIn from "../../assets/undraw_sign_in.svg";
import { globalStyles } from "../../styles/global.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SignInScreen = () => {
	const [typing, setTyping] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={[globalStyles.container, { flex: 4 }]}>
				<Text style={globalStyles.title}>Sign in</Text>
				<SvgSignIn
					width={typing === false ? 300 : 0}
					height={typing === false ? 300 : 0}
				></SvgSignIn>
				<Text style={globalStyles.textDescription}>
					Log into your DivvyUp account
				</Text>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={[globalStyles.container, { flex: 2 }]}
			>
				<TextInput
					style={globalStyles.input}
					placeholder='Email'
					value={email}
					onChangeText={setEmail}
					onFocus={() => setTyping(true)}
					onBlur={() => setTyping(false)}
				/>
				<TextInput
					style={globalStyles.input}
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					onFocus={() => setTyping(true)}
					onBlur={() => setTyping(false)}
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
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};
