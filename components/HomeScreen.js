import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import SvgPeople from "../assets/undraw_people.svg";
import { ArrowRightIcon } from "react-native-heroicons/outline";

export const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>DivvyUp</Text>
				<SvgPeople width={300} height={300}></SvgPeople>
				<Text style={styles.textDescription}>
					Split and share group expenses in a simple, fair and
					transparent way. Keep track of who owes what
				</Text>
			</View>
			<View style={styles.containerButtons}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Login")}
				>
					<View style={styles.buttonTextContainer}>
						<Text style={styles.buttonText}>Login</Text>
						<ArrowRightIcon
							color={"#EEE3D9"}
							size={24}
							style={styles.buttonIcon}
						></ArrowRightIcon>
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
						<ArrowRightIcon
							color={"#10181F"}
							size={22}
							style={styles.buttonIcon}
						></ArrowRightIcon>
					</View>
				</TouchableOpacity>
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
	title: {
		fontSize: 62,
		fontWeight: "900",
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
	},
	buttonSignUp: {
		backgroundColor: "#EEE3D9",
		borderWidth: 1,
		borderColor: "#10181F",
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
