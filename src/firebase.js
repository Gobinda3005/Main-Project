// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import store from "./Redux/Store"
import { setUser,signOut } from "./Redux/Store"
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDuGA8QXr4q7lA19hKjGwGRkfQCCjG50f4",
	authDomain: "react-demo-32a1a.firebaseapp.com",
	projectId: "react-demo-32a1a",
	storageBucket: "react-demo-32a1a.appspot.com",
	messagingSenderId: "1015650106716",
	appId: "1:1015650106716:web:2c31fe86efe0c8c0c05599",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
onAuthStateChanged(auth,(user) =>
{
    if (user)
    {
        store.dispatch(setUser({
            email: user.email,
            password:user.password,
            
     }))   
    }
    else
    {
     store.dispatch(signOut())   
    }
})