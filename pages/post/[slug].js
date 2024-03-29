import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";
import Container from "@components/container";
import { NextSeo } from "next-seo";
import Head from "next/head";

import AuthorCard from "@components/blog/authorCard";
import { Markup } from "interweave";

import { gql } from "@apollo/client";

import postStyle from "css/post";
import Lottie from "react-lottie";
import notFound from "../../lottie/notFound.json";
import { client } from "pages/_app";
import { getUrl } from "nextjs-current-url/server";

export default function Post({ data: { post }, currentUrl }) {
  const [postData, setPostData] = useState(post);

  const seoData = {
    title: post?.title || "Pranav Goswami Blogs",
    description:
      post?.excerpt?.text ||
      "Welcome to Pranav Goswami Blogs, where I love to share my passion for all things web development, including React JS, Next JS, Gatsby, Javascript, UI/UX, and more. This is the perfect place to find expert insights, helpful tips, and engaging tutorials on the latest trends and technologies in the field. Whether you're just starting out or looking to take your skills to the next level, I've got you covered. So come on in, have a look around, and join me in this journey of exploring the exciting world of web development!",
    image: post?.image?.url || "",
    url: currentUrl
  };

  useEffect(() => {
    if (post) {
      setPostData({
        postTitle: post.title,
        postReadingTime: post.readingTime,
        postPublishedOn: post.publishedOn,
        postImage: post.image.url,
        postAuthorImage: post.author.image.url,
        postContent: post.content.html,
        postAuthorName: post.author.name,
        postAuthorShortDescription: post.author.description.html
      });
    } else {
      setPostData(null);
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Layout dataProps={postData}>
      {post === null ? (
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
      ) : post ? (
        <>
          <NextSeo
            title={seoData.title}
            description={seoData.description}
            openGraph={{
              images: [{ url: seoData.image }]
            }}
            url={seoData.url}
            canonical={seoData.url}
          />
          <Head>
            <link rel="preload" as="image" href={seoData.image} />
          </Head>
          <Box sx={postStyle}>
            <Container className="!pt-0">
              <div className="max-w-screen-md mx-auto test">
                {/* <div className="text-center"></div> */}

                <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                  {postData.postTitle}
                </h1>

                <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0 w-10 h-10">
                      {postData.postAuthorImage && (
                        <Image
                          src={postData.postAuthorImage}
                          blurDataURL={postData.postAuthorImage}
                          objectFit="cover"
                          placeholder="blur"
                          layout="fill"
                          className="rounded-full"
                          alt="Image"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-400">
                        {postData.postAuthorName}
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <time
                          className="text-gray-500 dark:text-gray-400"
                          dateTime={postData.postPublishedOn}>
                          {postData.postPublishedOn}
                        </time>
                        <span>
                          · {postData.postReadingTime || "5"} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
              {postData.postImage && (
                <Image
                  src={postData.postImage}
                  blurDataURL={postData.postImage}
                  placeholder="blur"
                  layout="fill"
                  loading="eager"
                  objectFit="cover"
                  alt="Image"
                />
              )}
            </div>

            <Container>
              <article className="max-w-screen-md mx-auto ">
                <div
                  className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500"
                  style={{ maxWidth: "unset" }}>
                  <Markup content={postData.postContent} />
                </div>
                <div className="flex justify-center mt-7 mb-7">
                  <Link href="/">
                    <a className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                      ← View all posts
                    </a>
                  </Link>
                </div>

                <AuthorCard
                  authorName={postData.postAuthorName}
                  authorImage={postData.postAuthorImage}
                  authorShortDescription={
                    postData.postAuthorShortDescription
                  }
                />
              </article>
            </Container>
          </Box>
        </>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const url = getUrl({ req });
  const slug = url.pathname.split("/").pop().split(".")[0];

  const currentUrl = url.origin + "/post/" + slug;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=59"
  );

  const dataQuery = gql`
  query {
    post(where: { slug: "${slug}" }) {
      author {
        name
        slug
        image {
          url
        }
        description {
          html
        }
      }
      content {
        html
      }
      image {
        url
      }
      slug
      title
      readingTime
      publishedOn
      tags {
        name
      }
      excerpt {
        text
      }
    }
  }
`;

  const { data } = await client.query({
    query: dataQuery
  });

  return { props: { data, currentUrl } };
}
