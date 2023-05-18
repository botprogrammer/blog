import Layout from "@components/layout";
import { Box, Grid } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import notFound from "../lottie/notFound.json";

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Layout>
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
    </Layout>
  );
}
