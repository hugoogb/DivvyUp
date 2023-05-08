import {
	Text,
	SafeAreaView,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../styles/global.styles";
import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { UserContext } from "../../context/user/UserContext";
import { GroupCard } from "./GroupCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export const GroupsScreen = ({ navigation }) => {
	const user = useContext(UserContext);

	const [groups, setGroups] = useState([]);

	const getGroupsAsync = async () => {
		const docSnap = await getDoc(doc(db, "users", user.uid));

		if (docSnap.exists()) {
			setGroups(docSnap.data().groups);
		} else {
			// docSnap.data() will be undefined in this case
			setGroups([]);
		}
	};

	useEffect(() => {
		const bootstrapGroups = async () => {
			await getGroupsAsync();
		};

		bootstrapGroups();
	}, [user.groups]);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.container}>
				<Text style={globalStyles.title}>Groups</Text>
			</View>
			<View
				style={[
					{ maxHeight: 500 },
					{ marginTop: 20 },
					{ marginBottom: 20 },
				]}
			>
				<FlatList
					data={groups}
					renderItem={({ item }) => (
						<GroupCard groupId={item}></GroupCard>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
			<TouchableOpacity
				style={globalStyles.button}
				onPress={() => {
					navigation.navigate("Home", {
						screen: "GroupsNav",
						params: {
							screen: "CreateGroup",
						},
					});
				}}
			>
				<View style={globalStyles.buttonTextContainer}>
					<Ionicons
						name='add-circle-outline'
						size={22}
						color={"#EEE3D9"}
						style={globalStyles.buttonIcon}
					></Ionicons>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
