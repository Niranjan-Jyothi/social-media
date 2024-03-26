import { useEffect, useState } from "react";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    //async function definition to get user profile by username
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        //Fetch from database/API call
        const userProfileFromDB = await getUserProfileByUserName(username);

        //save it our store so other components can use it
        setUserProfile(userProfileFromDB);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    //calling the function to get user profile
    getUserProfile();
  }, [setUserProfile, username]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;

function getUserProfileByUserName(userName) {
  return new Promise((resolve, reject) => {
    // Simulating delay with setTimeout
    setTimeout(() => {
      // Resolve the promise with userData
      const userProfile = userDB[userName] || null;
      resolve(userProfile);
    }, 2000); // 2 seconds delay
  });
}

const userDB = {
  johndoe: {
    Name: "John Doe",
    UserName: "johndoe",
    Followers: 1000,
    Following: 500,
    Posts: 50,
    ProfilePic: "/DP1.png",
    Id: 1,
  },

  njyothi: {
    Name: "Niranjan Jyothi",
    UserName: "njyothi",
    Followers: 642,
    Following: 789,
    Posts: 23,
    ProfilePic: "/DP2.png",
    Id: 2,
  },
};
