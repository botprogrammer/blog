import { gql } from "@apollo/client";
import { client } from "./_app";

export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ctx => {
  ctx.res.setHeader("Content-Type", "text/xml");

  const xml = await generateSitemap();

  ctx.res.write(xml);

  ctx.res.end();

  return {
    props: {}
  };
};

function formattedDate(d) {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    .map(n => (n < 10 ? `0${n}` : `${n}`))
    .join("-");
}

async function generateSitemap() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          slug
          createdAt
        }
      }
    `
  });

  const { posts } = data;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
  .map(({ slug, createdAt }) => {
    return `<url>
    <loc>https://pranavgoswamiblogs.vercel.app/post/${slug}</loc>
    <lastmod>${formattedDate(new Date(createdAt))}</lastmod>
    </url>`;
  })
  .join("")}

</urlset>`;
}
