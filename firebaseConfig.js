import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, sendEmailVerification } from 'firebase/auth';

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
const firestore = getFirestore(app);
const auth = getAuth(app);

// Add event listener for email verification
auth.onAuthStateChanged(user => {
  if (user) {
    sendEmailVerification(auth.currentUser);
  }
});

export { app, firestore, auth };
