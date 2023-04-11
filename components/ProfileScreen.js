import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useEffect } from "react";

export const ProfileScreen = ({ navigation, route }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Use `setOptions` to update the button that we previously specified
		// Now the button includes an `onPress` handler to update the count
		navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => setCount((c) => c + 1)}
					title='Update count'
				/>
			),
		});
	}, [navigation]);

	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text style={styles.bigBlue}>
				This is {route.params.name}'s profile
			</Text>
			<Text style={styles.red}>ProfileID: {route.params.profileID}</Text>
			<Text>Count: {count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	bigBlue: {
		backgroundColor: "blue",
		fontWeight: "bold",
		fontSize: 30,
	},
	red: {
		color: "red",
	},
});
