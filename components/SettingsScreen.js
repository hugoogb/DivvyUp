import { useContext } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../App";
import SvgSettings from "../assets/undraw_settings.svg";
import { globalStyles } from "../styles/global.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SettingsScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Settings</Text>
				<SvgSettings width={300} height={300}></SvgSettings>
				<Text style={globalStyles.textDescription}>
					Change your settings / Sign out
				</Text>
			</View>
			<View style={globalStyles.container}>
				<TouchableOpacity
					style={[globalStyles.button, globalStyles.buttonSecondary]}
					onPress={() => signOut()}
				>
					<View style={globalStyles.buttonTextContainer}>
						<Text
							style={[
								globalStyles.buttonText,
								globalStyles.buttonTextSecondary,
							]}
						>
							Sign out
						</Text>
						<Ionicons
							name='arrow-forward-circle-outline'
							size={22}
							color={"#10181F"}
							style={globalStyles.buttonIcon}
						></Ionicons>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
