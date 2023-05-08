import { Text, SafeAreaView, View } from "react-native";
import SvgProfileDetails from "../assets/undraw_profile_details.svg";
import { globalStyles } from "../styles/global.styles";
import { UserContext } from "../context/user/UserContext";
import { useContext } from "react";

export const ProfileScreen = () => {
	const user = useContext(UserContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={[globalStyles.container, { flex: 4 }]}>
				<Text style={globalStyles.title}>Profile</Text>
				<SvgProfileDetails width={300} height={300}></SvgProfileDetails>
				{user ? (
					<>
						<Text style={globalStyles.textDescription}>
							{user.name}
						</Text>
						<Text style={globalStyles.textDescription}>
							{user.email}
						</Text>
						{user.groups ? (
							<Text style={globalStyles.textDescription}>
								Number of groups: {user.groups.length}
							</Text>
						) : (
							<></>
						)}
					</>
				) : (
					<></>
				)}
			</View>
		</SafeAreaView>
	);
};
