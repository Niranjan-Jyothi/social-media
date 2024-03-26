import { useEffect, useState } from "react";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const userProfile = useUserProfileStore((state) => state.userProfile);

  useEffect(() => {
    //defining the function
    const getPosts = async () => {
      if (!userProfile) return; //no profile in store
      setIsLoading(true);

      try {
        const postsForUser = await getPostsByUserId(userProfile.Id);
        postsForUser.sort((a, b) => b.createdAt - a.createdAt);

        setPosts(postsForUser);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts(); //call the function
  }, [userProfile]);

  return { isLoading, posts };
};

export default useGetUserPosts;

function getPostsByUserId(userId) {
  return new Promise((resolve, reject) => {
    // Simulating delay with setTimeout
    setTimeout(() => {
      // Resolve the promise with user posts
      const userPosts = postsDB[userId] || null;
      resolve(userPosts);
    }, 3000); // 3 seconds delay to mock API delay
  });
}

const postsDB = {
  1: [
    {
      Id: 1,
      imageURL: "Img1.png",
      Likes: 100,
      Comments: 20,
      createdAt: 2015,
    },
    {
      Id: 2,
      imageURL: "Img2.png",
      Likes: 100,
      Comments: 20,
      createdAt: 2015,
    },
  ],

  2: [
    {
      Id: 1,
      imageURL: "Img3.png",
      Likes: 100,
      Comments: 20,
      createdAt: 2015,
    },
  ],
};
