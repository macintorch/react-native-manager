import React from "React";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Stack>
		</Router>
	);
};

export default RouterComponent;
