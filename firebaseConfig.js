import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

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
const db = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, auth, db, storage };
