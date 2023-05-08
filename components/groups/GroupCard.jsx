import { View, Text, FlatList } from "react-native";
import { globalStyles } from "../../styles/global.styles";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const GroupCard = ({ groupId }) => {
	const [group, setGroup] = useState({});

	useEffect(() => {
		const getGroupDataAsync = async () => {
			const docGroupSnap = await getDoc(doc(db, "groups", groupId));

			if (docGroupSnap.exists()) {
				const groupData = docGroupSnap.data();
				setGroup(groupData);

				const memberPromises = groupData.members.map(async (member) => {
					const docUserSnap = await getDoc(doc(db, "users", member));
					return docUserSnap.data();
				});

				const members = await Promise.all(memberPromises);
				setGroup({ ...groupData, members });
			} else {
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
			<View>
				<Text
					style={[
						globalStyles.textDescription,
						{ marginVertical: 10 },
					]}
				>
					{group.name}
				</Text>
				<FlatList
					horizontal={true}
					data={group.members}
					renderItem={({ item }) => <Text>{item.name}</Text>}
					keyExtractor={(item) => item.uid}
					ItemSeparatorComponent={() => (
						<Text style={[{ marginRight: 5 }]}>,</Text>
					)}
				></FlatList>
			</View>
		</View>
	);
};
