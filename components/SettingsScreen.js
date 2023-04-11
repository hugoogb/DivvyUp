import { useContext } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { AuthContext } from "../App";
import SvgSettings from "../assets/undraw_settings.svg";
import { globalStyles } from "../styles/global.styles";

export const SettingsScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Settings</Text>
				<SvgSettings width={300} height={300}></SvgSettings>
				<Text style={globalStyles.textDescription}>
					Change your settings / signOut
				</Text>
				<Button title='Sign out' onPress={signOut}></Button>
			</View>
		</SafeAreaView>
	);
};
