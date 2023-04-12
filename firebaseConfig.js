import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBUpj-AYMpAidNv17qmcexpQFYpWq_AIt8",
	authDomain: "divvyup-74851.firebaseapp.com",
	projectId: "divvyup-74851",
	storageBucket: "divvyup-74851.appspot.com",
	messagingSenderId: "655704363479",
	appId: "1:655704363479:web:7fbb4df0e9c93060bbfb92",
	measurementId: "G-SWM1T81NQ8",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
