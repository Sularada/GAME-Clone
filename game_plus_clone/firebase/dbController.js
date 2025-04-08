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
