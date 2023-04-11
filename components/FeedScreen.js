import { SafeAreaView, View, Text } from "react-native";
import SvgFeed from "../assets/undraw_feed.svg";
import { globalStyles } from "../styles/global.styles";

export const FeedScreen = () => {
	return (
		<SafeAreaView style={[globalStyles.container, globalStyles.wrapper]}>
			<View style={globalStyles.containerTitle}>
				<Text style={globalStyles.title}>Feed</Text>
				<SvgFeed width={300} height={300}></SvgFeed>
				<Text style={globalStyles.textDescription}>
					Look up your feed
				</Text>
			</View>
		</SafeAreaView>
	);
};
