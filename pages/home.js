import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import PostList from "@components/postlist";
import { Box, Grid } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../lottie/loading.json";

import { useQuery, gql } from "@apollo/client";

export default function Home() {
  const { data } = useQuery(gql`
    query {
      posts(orderBy: publishedOn_DESC) {
        readingTime
        slug
        title
        publishedOn
        content {
          markdown
        }
        image {
          url
        }
        excerpt {
          markdown
        }
        tags {
          name
        }
        author {
          name
          image {
            url
          }
          slug
        }
      }
    }
  `);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      {data?.posts?.length > 0 ? (
        <>
          <NextSeo
            title="Pranav Goswami Blogs"
            description="Welcome to Pranav Goswami Blogs, where I love to share my passion for all things web development, including React JS, Next JS, Gatsby, Javascript, UI/UX, and more. This is the perfect place to find expert insights, helpful tips, and engaging tutorials on the latest trends and technologies in the field. Whether you're just starting out or looking to take your skills to the next level, I've got you covered. So come on in, have a look around, and join me in this journey of exploring the exciting world of web development!"
            image="/img/og/home_og.png"
            url={window.location.href}
            canonical={window.location.href}
          />
          <Layout>
            <Container>
              <div className="grid gap-10 lg:gap-10 md:grid-cols-2">
                {data.posts.slice(0, 2).map(post => (
                  <PostList
                    key={post.slug}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
                  />
                ))}
              </div>
              <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
                {data.posts.slice(2).map(post => (
                  <PostList
                    key={post.slug}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
                  />
                ))}
              </div>
            </Container>
          </Layout>
        </>
      ) : (
        <Grid
          container
          height="100vh"
          alignItems="center"
          justifyContent="center">
          <Box height="25%">
            <Lottie options={defaultOptions} />
          </Box>
        </Grid>
      )}
    </>
  );
}
