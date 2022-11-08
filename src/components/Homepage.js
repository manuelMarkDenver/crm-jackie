import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await axios.get(
          `https://crm.jackieconnolly.info/api/wp-json/wp/v2/posts`
        );

        setPosts(fetchedPosts.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(posts);

  return (
    <>
      <div>Creative Approach CRM</div>
      <ul style={{ listStyle: "none" }}>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <h1 >{post.title.rendered}</h1>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Homepage;
