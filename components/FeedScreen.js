import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export const FeedScreen = () => {
	return (
		<SafeAreaView style={[styles.container, styles.wrapper]}>
			<View>
				<Text>Feed</Text>
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
