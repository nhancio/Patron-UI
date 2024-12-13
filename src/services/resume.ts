import { storage, db } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const uploadResume = async (file: File, userId: string) => {
  /* 
  const storageRef = ref(storage, `resumes/${userId}/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  
  await addDoc(collection(db, 'resumes'), {
    userId,
    fileName: file.name,
    url: downloadURL,
    createdAt: new Date()
  });

  return downloadURL;
  */
};

export const getLinkedInProfile = async () => {
  /* 
  const response = await fetch('https://api.linkedin.com/v2/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  return response.json();
  */
};