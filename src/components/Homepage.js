import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await axios.get(
          `https://crm.jackieconnolly.info/api/wp-json/wp/v2/posts`
        )
        setPosts(fetchedPosts.data)
        
      } catch (error) {
        console.log(error)
      }
      
    };

    fetchData();
  }, []);

  console.log(posts)

  return <div>{posts[0].title.rendered}</div>;
};

export default Homepage;
