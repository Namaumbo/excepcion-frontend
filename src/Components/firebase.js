
import { getStorage } from "firebase/storage";
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLGBA8APGL1bGRJV_jD9QPdHMSLXpvqOE",
  authDomain: "excepcion-library-61baa.firebaseapp.com",
  databaseURL: "https://excepcion-library-61baa-default-rtdb.firebaseio.com",
  projectId: "excepcion-library-61baa",
  storageBucket: "excepcion-library-61baa.appspot.com",
  messagingSenderId: "196141835047",
  appId: "1:196141835047:web:ce5cf309a00b468f5fbf02",
};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// listing tracks
 const storage = getStorage(app);

 export default storage;
