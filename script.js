// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  set,
  get,
  ref,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQUCXf2KzhOBzZiyAOiQZz5bDnLqnwea8",
  authDomain: "first-hello-67ab0.firebaseapp.com",
  databaseURL: "https://first-hello-67ab0-default-rtdb.firebaseio.com",
  projectId: "first-hello-67ab0",
  storageBucket: "first-hello-67ab0.appspot.com",
  messagingSenderId: "668893748956",
  appId: "1:668893748956:web:a63b0d1f8fca1382099e19",
  measurementId: "G-WBG16F1B9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);

function writeUserData(userID, name, email) {
  set(ref(database, "users/" + userID), {
    name: name,
    email: email,
  });
}

writeUserData(3, "Arham", "a@gmail.com");

console.log("good");

function readData() {
  const userRef = ref(database, "users");

  get(userRef).then((snapshot) => {
    snapshot.forEach((childsnapShot) => {
      console.log(childsnapShot.val());
    });
  });
}

readData();
