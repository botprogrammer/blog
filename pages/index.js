import React from "react";
import Home from "./home";
import { gql } from "@apollo/client";
import { client } from "./_app";

export default function Index({ data }) {
  return <Home data={data} />;
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
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
    `
  });

  return {
    props: { data }
  };
}
