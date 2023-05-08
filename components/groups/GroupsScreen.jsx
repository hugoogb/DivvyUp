import {
	Text,
	SafeAreaView,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
	KeyboardAvoidingView,
} from "react-native";
import SvgGroup from "../../assets/undraw_group.svg";
import { globalStyles } from "../../styles/global.styles";
import { useContext, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
	collection,
	doc,
	addDoc,
	updateDoc,
	arrayUnion,
	getDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { UserContext } from "../../context/user/UserContext";
import { GroupCard } from "./GroupCard";

export const GroupsScreen = () => {
	const user = useContext(UserContext);
	const [typing, setTyping] = useState(false);
	const [name, setName] = useState("");
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
	}, []);

	const handleOnPressCreateGroup = () => {
		const createGroupAsync = async () => {
			// Add a new document with a generated id.
			const newGroupRef = await addDoc(collection(db, "groups"), {
				name: name,
				members: arrayUnion(user.uid),
			});

			const userRef = doc(db, "users", user.uid);

			await updateDoc(userRef, {
				groups: arrayUnion(newGroupRef.id),
			});

			await getGroupsAsync();
		};

		createGroupAsync();
		setName("");
	};

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			{groups !== undefined ? (
				<>
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
				</>
			) : (
				<>
					<View style={[globalStyles.container, { flex: 4 }]}>
						<Text style={globalStyles.title}>Groups</Text>
						<SvgGroup
							width={typing === false ? 300 : 0}
							height={typing === false ? 300 : 0}
						></SvgGroup>
						<Text style={globalStyles.textDescription}>
							Your Groups will be showed here!
						</Text>
					</View>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={[globalStyles.container, { flex: 2 }]}
					>
						<TextInput
							style={globalStyles.input}
							placeholder='Group name'
							value={name}
							onChangeText={setName}
							onFocus={() => setTyping(true)}
							onBlur={() => setTyping(false)}
						/>
						<TouchableOpacity
							style={globalStyles.button}
							onPress={() => {
								name !== ""
									? handleOnPressCreateGroup()
									: alert("Group name can't be empty");
							}}
						>
							<View style={globalStyles.buttonTextContainer}>
								<Text style={globalStyles.buttonText}>
									Create group
								</Text>
								<Ionicons
									name='arrow-forward-circle'
									size={22}
									color={"#EEE3D9"}
									style={globalStyles.buttonIcon}
								></Ionicons>
							</View>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				</>
			)}
		</SafeAreaView>
	);
};
