import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAM5lpELvwI1xnd1KRlzly3Wzr-4sCA6xU",
    authDomain: "cloudfinalproj-85441.firebaseapp.com",
    projectId: "cloudfinalproj-85441",
    storageBucket: "cloudfinalproj-85441.appspot.com",
    messagingSenderId: "506845177849",
    appId: "1:506845177849:web:b2a51d1225b8bf35857f28",
    measurementId: "G-7CXQJ54EKM"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
