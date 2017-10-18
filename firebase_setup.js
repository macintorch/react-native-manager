import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyCwFeLPYlLXkrHcps-HpIr5EH5kWmCdrG0",
	authDomain: "rn-manager-a041f.firebaseapp.com",
	databaseURL: "https://rn-manager-a041f.firebaseio.com",
	projectId: "rn-manager-a041f",
	storageBucket: "",
	messagingSenderId: "665657125259"
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;
