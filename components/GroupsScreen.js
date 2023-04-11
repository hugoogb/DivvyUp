import { Text, SafeAreaView, View } from "react-native";
import SvgGroup from "../assets/undraw_group.svg";
import { globalStyles } from "../styles/global.styles";

export const GroupsScreen = () => {
	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Groups</Text>
				<SvgGroup width={300} height={300}></SvgGroup>
				<Text style={globalStyles.textDescription}>
					Your Groups will be showed here!
				</Text>
			</View>
		</SafeAreaView>
	);
};
