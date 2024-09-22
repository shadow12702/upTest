import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyD3FMlNdDS_HyoUEbqOUFsqpG3XueFBse0",
	authDomain: "blogging-80be7.firebaseapp.com",
	projectId: "blogging-80be7",
	storageBucket: "blogging-80be7.appspot.com",
	messagingSenderId: "775780448794",
	appId: "1:775780448794:web:98240d2a8bfb4e37126fa3",
	measurementId: "G-R203SF5KEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
