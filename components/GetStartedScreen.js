import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import SvgPeople from "../assets/undraw_people.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalStyles } from "../styles/global.styles";

export const GetStartedScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>DivvyUp</Text>
				<SvgPeople width={300} height={300}></SvgPeople>
				<Text style={globalStyles.textDescription}>
					Split and share group expenses in a simple, fair and
					transparent way. Keep track of who owes what
				</Text>
			</View>
			<View style={styles.containerButtons}>
				<TouchableOpacity
					style={globalStyles.button}
					onPress={() => navigation.navigate("SignIn")}
				>
					<View style={globalStyles.buttonTextContainer}>
						<Text style={globalStyles.buttonText}>Sign In</Text>
						<Ionicons
							name='arrow-forward-circle'
							size={22}
							color={"#EEE3D9"}
							style={globalStyles.buttonIcon}
						></Ionicons>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={[globalStyles.button, globalStyles.buttonSecondary]}
					onPress={() => navigation.navigate("SignUp")}
				>
					<View style={globalStyles.buttonTextContainer}>
						<Text
							style={[
								globalStyles.buttonText,
								globalStyles.buttonTextSecondary,
							]}
						>
							Sign Up
						</Text>
						<Ionicons
							name='arrow-forward-circle-outline'
							size={22}
							color={"#10181F"}
							style={globalStyles.buttonIcon}
						></Ionicons>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	containerButtons: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
