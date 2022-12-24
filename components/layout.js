import React, { useState, useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import GetImage from "@utils/getImage";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { Snackbar, MuiAlert, Box } from "@mui/material";

import hljs from "highlight.js";

export default function Layout(props) {
  const [open, setOpen] = useState(false);
  const { children } = props;
  const ogimage = GetImage(props?.openGraphImage)?.src ?? "";

  useEffect(() => {
    const allCodeTags = document.querySelectorAll("code");
    allCodeTags.forEach(data => {
      data.classList.add("language-javascript");
    });

    const handleCopy = element => {
      navigator.clipboard.writeText(element.textContent);
    };

    document.querySelectorAll("pre code").forEach(el => {
      el.parentElement.onclick = () => {
        // handleCopy(el);
        setOpen(true);
      };
      hljs.highlightAll();
    });
  }, []);

  return (
    <>
      <Head></Head>
      <NextSeo
        // title={props.title}
        title="Blogs | Pranav Goswami"
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
        <div>
          {children}
          {open && (
            <Box sx={{ display: "flex", position: "relative" }}>
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SuccessOutlinedIcon"
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "1rem"
                }}>
                <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
              </svg>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                action={svg}
                autoHideDuration={50000}
                open={open}
                onClose={() => setOpen(false)}
                message={"Copied To Clipboard!"}
                sx={{
                  "& .MuiSnackbarContent-root": {
                    background: "#0e1111",
                    color: "whitesmoke"
                  },
                  "& .MuiPaper-elevation": {
                    display: "flex",
                    flexDirection: "row-reverse",
                    minWidth: "unset"
                  },
                  "& .MuiSnackbarContent-action": {
                    paddingLeft: "0"
                  }
                }}
              />
            </Box>
          )}
        </div>

        <Footer {...props} />
      </div>
    </>
  );
}

const svg = (
  <svg
    class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="SuccessOutlinedIcon"
    style={{
      width: "1.5rem",
      height: "1.5rem",
      fill: "whitesmoke",
      marginRight: "1rem"
    }}>
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
  </svg>
);

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );
});
