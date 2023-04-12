import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import SvgSignUp from "../assets/undraw_sign_up.svg";
import { globalStyles } from "../styles/global.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SignUpScreen = () => {
	const [typing, setTyping] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signUp } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={[globalStyles.container, { flex: 3 }]}>
				<Text style={globalStyles.title}>Sign up</Text>
				<SvgSignUp
					width={typing === false ? 300 : 0}
					height={typing === false ? 300 : 0}
				></SvgSignUp>
				<Text style={globalStyles.textDescription}>
					Create a DivvyUp account if you don't have one already
				</Text>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={[globalStyles.container, { flex: 2 }]}
			>
				<View style={globalStyles.containerRow}>
					<TextInput
						style={[globalStyles.input, globalStyles.inputDouble]}
						placeholder='First name'
						value={firstName}
						onChangeText={setFirstName}
						onFocus={() => setTyping(true)}
						onBlur={() => setTyping(false)}
					/>
					<TextInput
						style={[globalStyles.input, globalStyles.inputDouble]}
						placeholder='Last name'
						value={lastName}
						onChangeText={setLastName}
						onFocus={() => setTyping(true)}
						onBlur={() => setTyping(false)}
					/>
				</View>
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
					onPress={() => signUp(email, password, firstName, lastName)}
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
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};
