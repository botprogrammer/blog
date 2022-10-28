import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import GetImage from "@utils/getImage";
import Navbar from "@components/navbar";

import Footer from "@components/footer";

console.log("layout");

export default function Layout(props) {
  const { children } = props;
  const ogimage = GetImage(props?.openGraphImage)?.src ?? "";
  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" /> */}
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
      />

      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <Navbar {...props} />
        <div>{children}</div>
        {console.log("layout")}

        <Footer {...props} />
      </div>
    </>
  );
}