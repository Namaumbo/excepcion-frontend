
import { getStorage } from "firebase/storage";
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "
};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// listing tracks
 const storage = getStorage(app);

 export default storage;
