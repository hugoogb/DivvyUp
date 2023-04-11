import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import SvgGroup from "../assets/undraw_group.svg";

export const GroupsScreen = () => {
	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Groups</Text>
				<SvgGroup width={300} height={300}></SvgGroup>
				<Text style={styles.textDescription}>
					Your Groups will be showed here!
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
