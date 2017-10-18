import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
	FIREBASE_API_KEY,
	AUTH_DOMAIN,
	DATABASE_URL,
	FIREBASE_PROJECT_ID,
	MESSAGE_ID
} from "react-native-dotenv";
import firebase from "firebase";
import reducers from "./reducers";

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: FIREBASE_API_KEY,
			authDomain: AUTH_DOMAIN,
			databaseURL: DATABASE_URL,
			projectId: FIREBASE_PROJECT_ID,
			storageBucket: "",
			messagingSenderId: MESSAGE_ID
		});
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>Hello!</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
