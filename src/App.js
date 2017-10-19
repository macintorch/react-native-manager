import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
	FIREBASE_API_KEY,
	AUTH_DOMAIN,
	DATABASE_URL,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	MESSAGE_ID
} from "react-native-dotenv";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: FIREBASE_API_KEY,
			authDomain: AUTH_DOMAIN,
			databaseURL: DATABASE_URL,
			projectId: FIREBASE_PROJECT_ID,
			storageBucket: FIREBASE_STORAGE_BUCKET,
			messagingSenderId: MESSAGE_ID
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
