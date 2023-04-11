import { SafeAreaView, View, Text } from "react-native";
import SvgSignUp from "../assets/undraw_sign_up.svg";
import { globalStyles } from "../styles/global.styles";

export const SignUpScreen = () => {
	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>SignUp</Text>
				<SvgSignUp width={300} height={300}></SvgSignUp>
				<Text style={globalStyles.textDescription}>
					Create a DivvyUp account if you don't have one already
				</Text>
			</View>
			<View style={globalStyles.container}>
				<Text>SignUp</Text>
			</View>
		</SafeAreaView>
	);
};
