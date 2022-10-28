import blockQuoteSvg from "../public/img/quote.svg";

const postStyle = {
  pre: {
    background: "#232B2B"
  },
  a: {
    color: "#ff3183",
    textDecoration: "none",
    "& h1, h2, h3, h4, h5, h6, p, strong": {
      color: "#ff3183"
    }
  },
  img: {
    margin: "2rem auto"
  },
  blockquote: {
    padding: "30px 80px",
    position: "relative",
    border: "none",
    fontSize: "1.5rem",
    fontWeight: "400px",
    textAlign: "center",
    fontStyle: "normal",
    borderRight: "1px solid #232B2B",
    "::after": {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
      content: `""`,
      backgroundImage: `url(${blockQuoteSvg.src})`,
      fontSize: "200px",
      height: "10rem",
      width: "10rem",
      zIndex: "0"
    }
  },
  li: {
    display: "flex",
    listStyle: "none"
  },
  "& .pink": {
    color: "#ff3183s"
  }
};

export default postStyle;
