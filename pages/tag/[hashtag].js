import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import PostList from "@components/postlist";
import { Box, Grid } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../lottie/loading.json";
import notFound from "../../lottie/notFound.json";

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export default function TagDetail() {
  const router = useRouter();
  const { hashtag } = router.query;

  const { data } = useQuery(gql`
    query {
      posts(where: {tags_every: {name: "${hashtag}"}}) {
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
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Layout>
      {data?.posts?.length === 0 ? (
        <Grid
          container
          height="50vh"
          alignItems="center"
          justifyContent="center">
          <Box height="100%">
            <Lottie
              options={{ ...defaultOptions, animationData: notFound }}
            />
          </Box>
        </Grid>
      ) : data ? (
        <>
          <NextSeo
            title="Pranav Goswami Blogs"
            description="Welcome to Pranav Goswami Blogs, where I love to share my passion for all things web development, including React JS, Next JS, Gatsby, Javascript, UI/UX, and more. This is the perfect place to find expert insights, helpful tips, and engaging tutorials on the latest trends and technologies in the field. Whether you're just starting out or looking to take your skills to the next level, I've got you covered. So come on in, have a look around, and join me in this journey of exploring the exciting world of web development!"
            image="/img/og/home_og.png"
            url={window.location.href}
            canonical={window.location.href}
          />

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
        </>
      ) : (
        <Grid
          container
          height="50vh"
          alignItems="center"
          justifyContent="center">
          <Box height="50%">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: animationData
              }}
            />
          </Box>
        </Grid>
      )}
    </Layout>
  );
}
