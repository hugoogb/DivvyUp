import { SafeAreaView, View, Text } from "react-native";
import SvgLoading from "../assets/undraw_loading.svg";
import { globalStyles } from "../styles/global.styles";

export const SplashScreen = () => {
	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.container}>
				<Text style={globalStyles.title}>Loading...</Text>
				<SvgLoading width={300} height={300}></SvgLoading>
				<Text style={globalStyles.textDescription}>Loading...</Text>
			</View>
		</SafeAreaView>
	);
};
