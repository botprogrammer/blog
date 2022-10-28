import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const url = process.env.NEXT_PUBLIC_GRAPHCMS_URL;

const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
