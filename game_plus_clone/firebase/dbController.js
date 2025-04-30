import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getnavbarSection(link) {
  const q = query(
    collection(db, "/sections/navbarSection/" + link),
    orderBy("order", "asc")
  );
  const querySnap = await getDocs(q);

  const sections = querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return sections;
}
export async function getBannerSection() {
  const bannerArr = [
    "dil",
    "feodal",
    "indirim",
    "rtx",
    "simdi",
    "ultimate",
    "youtube",
  ];
  const promises = bannerArr.map(async (item) => {
    const q = query(collection(db, "/sections/banner/" + item));
    const querySnap = await getDocs(q);
    return querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  const results = await Promise.all(promises);
  const sections = results.flat();
  return sections;
}
export async function getSection(link) {
  const docRef = doc(db, "sections", link);
  const docSnap = await getDoc(docRef);
  const section = docSnap.data();
  return section;
}

export async function getNestedSection(main, arr) {
  const promises = arr.map(async (item) => {
    const q = query(collection(db, "/sections/" + main + "/" + item));
    const querySnap = await getDocs(q);
    return querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  const results = await Promise.all(promises);
  const sections = results.flat();
  return sections;
}

export async function getGames() {
  const querySnapshot = await getDocs(collection(db, "games"));
  const games = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return games;
}
