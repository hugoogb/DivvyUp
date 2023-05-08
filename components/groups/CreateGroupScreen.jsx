import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import SvgGroup from "../../assets/undraw_group.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/UserContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalStyles } from "../../styles/global.styles";
import {
	doc,
	addDoc,
	collection,
	arrayUnion,
	updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const CreateGroupScreen = ({ navigation }) => {
	const user = useContext(UserContext);

	const [typing, setTyping] = useState(false);
	const [name, setName] = useState("");

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
		};

		createGroupAsync();
		setName("");

		navigation.navigate("Home", {
			screen: "GroupsNav",
			params: {
				screen: "GroupDetails",
				params: { group: { name: name } },
			},
		});
	};

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={[globalStyles.container, { flex: 4 }]}>
				<Text style={globalStyles.title}>Groups</Text>
				<SvgGroup
					width={!typing ? 300 : 0}
					height={!typing ? 300 : 0}
				></SvgGroup>
				<Text style={globalStyles.textDescription}>
					Your Groups will be showed here!
				</Text>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={[
					globalStyles.container,
					{ flex: 1 },
					{ marginBottom: 50 },
				]}
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
		</SafeAreaView>
	);
};
