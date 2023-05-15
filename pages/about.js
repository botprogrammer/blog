import Layout from "../components/layout";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function About({ fullUrl }) {
  return (
    <Layout>
      <NextSeo
        title="About Pranav Goswami"
        description="Pranav Goswami is a Fullstack developer who specializes in designing and developing exceptional digital experiences."
        canonical="https://pranavgoswamiblogs.vercel.app/about"
        url="https://pranavgoswamiblogs.vercel.app/about"
      />

      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-left lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-center text-4xl mb-4 font-medium text-gray-100">
              Ahoy, matey! Wassup?
            </h1>
            <p className="leading-relaxed text-xl text-gray-300 my-8">
              I’m Pranav Goswami, a front-end web developer and
              designer based in Gujarat, India. I&apos;ve been
              building stuff on the web for the last 2 years. My main
              focus is on creating engaging, accessible & performant
              interfaces on web.
              <br />
              <br />
              My interest in web development started back in 2017, in
              my first year of collage when I discoverd some stunning
              websites -- turns out there&apos;s more to that than
              just only HTML and CSS!
              <br />
              <br />
              Aside from my job, writing about web development and
              design on my blog is something I enjoy. A great deal of
              my time is spent researching new technologies and trends
              which helps me to learn a ton of new stuff, and grow as
              a developer. In my free time, you can find me playing
              chess ♟, reading books 📚, or at the gym 🏋️‍♂️.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button
                  className="ml-4 inline-flex text-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                  style={{ backgroundColor: "#FF1A75" }}>
                  Get in touch!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

About.getInitialProps = async ({ req }) => {
  const protocol = req?.headers["x-forwarded-proto"] || "http";
  const host = req?.headers["host"];
  const fullUrl = `${protocol}://${host}${req?.url}`;

  return {
    fullUrl
  };
};
