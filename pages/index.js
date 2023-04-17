import React from "react";
import Home from "./home";

export default function Index({ fullUrl }) {
  return <Home url={fullUrl} />;
}

Index.getInitialProps = async ({ req }) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["host"];
  const fullUrl = `${protocol}://${host}${req.url}`;

  return {
    fullUrl
  };
};
