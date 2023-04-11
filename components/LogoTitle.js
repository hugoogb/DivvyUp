import { Image } from "react-native";

export const LogoTitle = () => {
	return (
		<Image
			style={{ width: 50, height: 50 }}
			source={require("../assets/favicon.png")}
		/>
	);
};
