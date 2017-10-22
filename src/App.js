import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
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
import Router from "./Router";

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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
