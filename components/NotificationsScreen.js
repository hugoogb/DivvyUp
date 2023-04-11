import { SafeAreaView, View, Text } from "react-native";
import SvgNotifications from "../assets/undraw_notifications.svg";
import { globalStyles } from "../styles/global.styles";

export const NotificationsScreen = () => {
	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Notifications</Text>
				<SvgNotifications width={300} height={300}></SvgNotifications>
				<Text style={globalStyles.textDescription}>
					Check your notifications
				</Text>
			</View>
		</SafeAreaView>
	);
};
