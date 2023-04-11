import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput,
	SafeAreaView,
	FlatList,
} from "react-native";
import { useState } from "react";

export const GroupsScreen = () => {
	const [text, setText] = useState("");
	const [groups, setGroups] = useState([
		{
			id: 0,
			name: "Familia",
		},
		{
			id: 1,
			name: "Grupo 1",
		},
		{
			id: 2,
			name: "Los del espacio mami",
		},
		{
			id: 3,
			name: "La familia gran",
		},
	]);

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text style={styles.text}>Create group</Text>
			<TextInput
				style={styles.input}
				onChangeText={setText}
				value={text}
				placeholder='Enter group name'
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					if (text !== "") {
						setGroups(() =>
							groups.push({
								id: groups[groups.length - 1].id + 1,
								name: text,
							})
						);
						setText("");
						console.log(groups);
					} else {
						alert("Name can't be empty");
					}
				}}
			>
				<Text>Add group</Text>
			</TouchableOpacity>
			<FlatList
				style={styles.flatList}
				data={groups}
				renderItem={({ item }) => <Text>{item.name}</Text>}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: 200,
		borderRadius: 10,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		borderRadius: 10,
		margin: 10,
	},
	flatList: {
		padding: 10,
	},
	text: {
		margin: 20,
		marginBottom: 10,
	},
});
