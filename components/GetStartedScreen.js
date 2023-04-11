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
					style={styles.button}
					onPress={() => navigation.navigate("SignIn")}
				>
					<View style={styles.buttonTextContainer}>
						<Text style={styles.buttonText}>SignIn</Text>
						<Ionicons
							name='arrow-forward-circle'
							size={22}
							color={"#EEE3D9"}
							style={styles.buttonIcon}
						></Ionicons>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.buttonSignUp]}
					onPress={() => navigation.navigate("SignUp")}
				>
					<View style={styles.buttonTextContainer}>
						<Text
							style={[styles.buttonText, styles.buttonTextSignUp]}
						>
							SignUp
						</Text>
						<Ionicons
							name='arrow-forward-circle-outline'
							size={22}
							color={"#10181F"}
							style={styles.buttonIcon}
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
	button: {
		backgroundColor: "#10181F",
		margin: 5,
		padding: 10,
		borderRadius: 10,
		width: 275,
		borderWidth: 1,
		borderColor: "#10181F",
	},
	buttonSignUp: {
		backgroundColor: "#EEE3D9",
		width: 225,
	},
	buttonText: {
		color: "#EEE3D9",
		padding: 5,
		fontSize: 16,
		marginLeft: 15,
		fontWeight: "600",
	},
	buttonTextSignUp: {
		color: "#10181F",
		fontSize: 14,
		fontWeight: "400",
	},
	buttonTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	buttonIcon: {
		marginRight: 15,
	},
});
