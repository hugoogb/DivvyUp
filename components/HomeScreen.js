import {
	SafeAreaView,
	View,
	Button,
	StyleSheet,
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
					style={styles.button}
					onPress={() => navigation.navigate("SignUp")}
				>
					<View style={styles.buttonTextContainer}>
						<Text style={styles.buttonText}>SignUp</Text>
						<ArrowRightIcon
							color={"#EEE3D9"}
							size={24}
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
		fontSize: 56,
		fontWeight: "800",
		marginBottom: 20,
		color: "#10181F",
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
	buttonText: {
		color: "#EEE3D9",
		padding: 5,
		fontSize: 16,
	},
	buttonTextContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonIcon: {
		marginLeft: "auto",
	},
});
