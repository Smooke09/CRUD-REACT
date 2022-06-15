import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
// Configuração do app firebase web
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
}
 
// Inicializando firebase
const app = !getApps().length ? initializeApp( firebaseConfig ) : getApp()
const dataBase = getFirestore(app);
 
export { dataBase }