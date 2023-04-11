import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import SvgNotifications from "../assets/undraw_notifications.svg";

export const NotificationsScreen = () => {
	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Notifications</Text>
				<SvgNotifications width={300} height={300}></SvgNotifications>
				<Text style={styles.textDescription}>
					Check your notifications
				</Text>
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
		fontWeight: "700",
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
});
