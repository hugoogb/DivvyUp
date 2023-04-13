import { Text, SafeAreaView, View } from "react-native";
import SvgProfileDetails from "../assets/undraw_profile_details.svg";
import { globalStyles } from "../styles/global.styles";
import { UserContext } from "../App";
import { useContext } from "react";

export const ProfileScreen = () => {
	const user = useContext(UserContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={[globalStyles.container, { flex: 4 }]}>
				<Text style={globalStyles.title}>Profile</Text>
				<SvgProfileDetails width={300} height={300}></SvgProfileDetails>
				<Text style={globalStyles.textDescription}>{user.uid}</Text>
				<Text style={globalStyles.textDescription}>{user.name}</Text>
				<Text style={globalStyles.textDescription}>{user.email}</Text>
			</View>
		</SafeAreaView>
	);
};
