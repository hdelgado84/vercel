


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'dotenv/config';
// Your web app's Firebase configuration
/*Esta claves las paso al archivo .env de varaibles de entorno que quedan en mi maquina, no debo subirlas a github e. .env */
/*
const firebaseConfig = {

  apiKey: "AIzaSyBXJpGEzXYMOAVCGnsceAtK_ae-M5dS2qQ",

  authDomain: "backend-node-pfinal.firebaseapp.com",

  projectId: "backend-node-pfinal",

  storageBucket: "backend-node-pfinal.firebasestorage.app",

  messagingSenderId: "378060205939",

  appId: "1:378060205939:web:253f46d1b66fb81f109f06"

};
*/
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
//nota: hay que instalar npm install dotenv , para que cargue la variable de entorno env
//      hay que instalar la libreria de firebase npm install firebase
//en el index import dotenv/config