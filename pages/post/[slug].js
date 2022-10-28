import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

import AuthorCard from "@components/blog/authorCard";
// import POST_DETAIL from "pages/queries/singlePost";
import { Markup } from "interweave";

import { useQuery, gql } from "@apollo/client";

import postStyle from "css/post";

export default function Post(props) {
  const [postData, setPostData] = useState();
  const [slug, setSlug] = useState();

  const router = useRouter();

  const { loading, error, data } = useQuery(
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
              markdown
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
        }
      }
`
  );

  useEffect(() => {
    setSlug(router.query.slug);
    if (data?.post) {
      const post = data.post;
      setPostData({
        postTitle: post.title,
        postReadingTime: post.readingTime,
        postPublishedOn: post.publishedOn,
        postImage: post.image.url,
        postAuthorImage: post.author.image.url,
        postContent: post.content.html,
        // postExcerpt: data?.post.data.attributes.excerpt,
        postAuthorName: post.author.name,
        postAuthorShortDescription: post.author.description.markdown,
        currentPostId: parseInt(router.query.slug)
      });
    }
  }, [slug, router, data]);

  return (
    <>
      {postData && data && (
        <Layout>
          {/* <NextSeo
            title={`${post.title} - ${siteConfig.title}`}
            description={post.excerpt || ""}
            canonical={`${siteConfig?.url}/post/${post.slug.current}`}
            openGraph={{
              url: `${siteConfig?.url}/post/${post.slug.current}`,
              title: `${post.title} - ${siteConfig.title}`,
              description: post.excerpt || "",
              images: [
                {
                  url: GetImage(post?.mainImage).src || ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: siteConfig.title
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          /> */}
          {/*
          <div className="relative bg-white/20">
            <div className="absolute w-full h-full -z-10">
              {post?.mainImage && (
                <Image
                  {...GetImage(post.mainImage)}
                  alt={post.mainImage?.alt || "Thumbnail"}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <Container className="py-48">
              <h1 className="relative max-w-3xl mx-auto mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl after:absolute after:w-full after:h-full after:bg-white after:inset-0 after:-z-10 after:blur-2xl after:scale-150">
                {post.title}
              </h1>
            </Container>
          </div> */}

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
        </Layout>
      )}
    </>
  );
}
