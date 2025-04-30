import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function loginFirebase(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error(`Error: ${error.code}, ${error.message}`);
    return false;
  }
}

export function registerFirebase(data) {
  const name = data.name;
  const surname = data.surname;
  const username = data.username;
  const phone = data.phone;
  const email = data.email;
  const date = data.date;
  const password = data.password;

  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(db, "users", user.uid), {
        name,
        surname,
        username,
        phone,
        email,
        date,
        password,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode}, ${errorMessage}`);
    });
}
