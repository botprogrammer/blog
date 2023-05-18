import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import AuthorCard from "@components/blog/authorCard";
import { Markup } from "interweave";

import { useQuery, gql } from "@apollo/client";

import postStyle from "css/post";
import Lottie from "react-lottie";
import animationData from "../../lottie/loading.json";
import notFound from "../../lottie/notFound.json";

export default function Post() {
  const [postData, setPostData] = useState({});

  const router = useRouter();

  const { slug } = router.query;

  const { data } = useQuery(
    gql`
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
`
  );

  useEffect(() => {
    if (data?.post) {
      const { post } = data;
      setPostData({
        postTitle: post.title,
        postReadingTime: post.readingTime,
        postPublishedOn: post.publishedOn,
        postImage: post.image.url,
        postAuthorImage: post.author.image.url,
        postContent: post.content.html,
        postExcerpt: post.excerpt.text,
        postAuthorName: post.author.name,
        postAuthorShortDescription: post.author.description.html,
        currentPostId: parseInt(router.query.slug)
      });
    }
  }, [data, router.query.slug]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Layout>
      {data?.post === null ? (
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
            title={`${postData.postTitle} - Pranav Goswami Blogs`}
            description={postData.postExcerpt}
            image={postData.postImage}
            url={window.location.href}
            canonical={window.location.href}
          />
          <Box sx={postStyle}>
            <Container className="!pt-0">
              <div className="max-w-screen-md mx-auto test">
                <div className="text-center"></div>

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
                <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
                  <Markup content={postData.postContent} />
                </div>
                <div className="flex justify-center mt-7 mb-7">
                  <Link href="/">
                    <a className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                      ← View all posts
                    </a>
                  </Link>
                </div>
                {postData.postAuthorName && (
                  <AuthorCard
                    authorName={postData.postAuthorName}
                    authorImage={postData.postAuthorImage}
                    authorShortDescription={
                      postData.postAuthorShortDescription
                    }
                  />
                )}
              </article>
            </Container>
          </Box>
        </>
      ) : (
        <Grid
          container
          height="100vh"
          alignItems="center"
          justifyContent="center">
          <Box height="25%">
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
