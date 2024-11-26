import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getAnalytics = async (userId: string) => {
  /* 
  const jobsQuery = query(collection(db, 'applications'), where('userId', '==', userId));
  const referralsQuery = query(collection(db, 'referrals'), where('userId', '==', userId));

  const [jobsSnapshot, referralsSnapshot] = await Promise.all([
    getDocs(jobsQuery),
    getDocs(referralsQuery)
  ]);

  return {
    jobsApplied: jobsSnapshot.size,
    referralsSent: referralsSnapshot.size
  };
  */
  
  // Temporary mock data
  return {
    jobsApplied: 25,
    referralsSent: 10
  };
};