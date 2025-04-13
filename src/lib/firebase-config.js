// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBbHgGdA7scCFHkv0aOKs0IOVAzKOJlqjw",
  authDomain: "production-db-993e8.firebaseapp.com",
  databaseURL: "https://production-db-993e8-default-rtdb.firebaseio.com",
  projectId: "production-db-993e8",
  storageBucket: "production-db-993e8.firebasestorage.app",
  messagingSenderId: "796625414381",
  appId: "1:796625414381:web:1dcbd55e84a3502b8744e4",
  measurementId: "G-W3D3NSCF2Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export async function notificationPermision() {
  const permision = await Notification.requestPermission();
  console.log(permision); //default or granted or denied
  if (permision == "granted") {
    await getToken("pass your firebase cloud messaging instance", {
      vapidKey: "your vapidkey",
    });
  }
}
