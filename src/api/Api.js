import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const fetData = async () => {
  const data = await getDocs(collection(db, 'information')).then(
    (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return newData;
    }
  );
  return data;
};
