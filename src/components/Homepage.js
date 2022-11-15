import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [homepageElements, setHomepageElements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await axios.get(
          `https://crm.jackieconnolly.info/api/wp-json/wp/v2/posts`
        );

        const fetchedHomepageElements = await axios.get(
          `https://crm.jackieconnolly.info/api/wp-json/wp/v2/pages?slug=homepage`
        );

        setHomepageElements(fetchedHomepageElements.data);
        setPosts(fetchedPosts.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        {homepageElements?.[0]?.acf?.banner ? (
          <Box
            component="img"
            alt="background-image"
            src={homepageElements?.[0]?.acf?.banner}
            sx={{ width: "100vw" }}
          />
        ) : (
          <Box sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItem: "center"
          }}>
            <CircularProgress color="primary"/>
          </Box>
        )}

        <Box
          sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            height: "100%",
            weight: "100%",
            backgroundColor: "#000",
            opacity: "70%",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Homepage;
