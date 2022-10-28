import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import PostList from "@components/postlist";
// import POSTS from "./queries/multiplePosts";

import { useQuery, gql } from "@apollo/client";

// const url = process.env.NEXT_PUBLIC_BASE_URL;

// const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export default function Home() {
  const { loading, error, data } = useQuery(gql`
    query {
      posts {
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

  const router = useRouter();
  //console.log(router.query.category);

  return (
    <>
      {data && (
        <Layout>
          {/* <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "Stablo"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          /> */}
          <Container>
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
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
      )}
      {/* {posts} */}
      {/* {posts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "Stablo"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <Container>
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.slice(2).map(post => (
                
              ))}
            </div>
          </Container>
        </Layout>
      )} */}
      {/* <PostList key={post?._id} post={post} aspect="square" /> */}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      preview
    },
    revalidate: 10
  };
}
