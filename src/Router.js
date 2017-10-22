import React from "React";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" modal hideNavBar>
				<Scene key="auth">
					<Scene
						key="login"
						component={LoginForm}
						title="Please Login"
					/>
				</Scene>

				<Scene key="main">
					<Scene
						onRight={() => console.log("Right!!")}
						rightTitle="Add"
						key="employeeList"
						component={EmployeeList}
						title="Employees"
					/>
				</Scene>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
