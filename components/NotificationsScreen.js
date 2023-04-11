import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export const NotificationsScreen = () => {
	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View>
				<Text>Notifications</Text>
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
});
