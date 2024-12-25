const Profile = () => {
    // Example user progress data
    const userProgress = {
      profile: { date: '2024-03-15' },
      resume: { date: '2024-03-16' },
      linkedin: { date: '2024-03-17' },
      naukri: { date: '2024-03-18' },
      applications: { date: '2024-03-20' },
      interviews: { date: '2024-03-25' },
      offers: null // Not completed yet
    };
  
    return (
      <div>
        <ProfileRoadmap userProgress={userProgress} />
      </div>
    );
  };