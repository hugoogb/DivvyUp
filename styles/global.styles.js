import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	wrapper: {
		backgroundColor: "#EEE3D9",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	containerRow: {
		flexDirection: "row",
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
	button: {
		backgroundColor: "#10181F",
		margin: 5,
		padding: 10,
		borderRadius: 10,
		width: 280,
		borderWidth: 1,
		borderColor: "#10181F",
	},
	buttonSecondary: {
		backgroundColor: "#EEE3D9",
	},
	buttonText: {
		color: "#EEE3D9",
		padding: 5,
		fontSize: 16,
		marginLeft: 15,
		fontWeight: "600",
	},
	buttonTextSecondary: {
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
	input: {
		color: "#10181F",
		fontSize: 16,
		fontWeight: "400",
		borderWidth: 1,
		borderColor: "#10181F",
		margin: 5,
		padding: 10,
		borderRadius: 10,
		width: 280,
	},
	inputDouble: {
		width: 135,
	},
});
