import { View, Text } from "react-native";
import { globalStyles } from "../styles/global.styles";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const GroupCard = ({ groupId }) => {
	const [group, setGroup] = useState({});

	useEffect(() => {
		const getGroupDataAsync = async () => {
			const docSnap = await getDoc(doc(db, "groups", groupId));

			if (docSnap.exists()) {
				setGroup(docSnap.data());
			} else {
				// docSnap.data() will be undefined in this case
				setGroup({});
			}
		};

		getGroupDataAsync();
	}, []);

	return (
		<View
			style={[
				globalStyles.container,
				{ borderWidth: 2 },
				{ borderColor: "#10181F" },
				{ borderRadius: 10 },
				{ marginBottom: 20 },
			]}
		>
			<Text style={globalStyles.textDescription}>{group.name}</Text>
			<Text
				style={[
					{ padding: 5 },
					{ marginBottom: 5 },
					{ marginHorizontal: 5 },
				]}
			>
				{group.members}
			</Text>
		</View>
	);
};
