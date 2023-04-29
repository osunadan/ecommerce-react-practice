import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmEmivalZ4b-bMM23-VKCNTK5b7tlq0-0",
  authDomain: "ecommerce-prueba-osunadan.firebaseapp.com",
  projectId: "ecommerce-prueba-osunadan",
  storageBucket: "ecommerce-prueba-osunadan.appspot.com",
  messagingSenderId: "56016866131",
  appId: "1:56016866131:web:23780c5f2a5f1eb0382fa6"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);