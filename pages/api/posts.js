// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function getAllPosts(url) {
  // res.status(200).json({ name: "John Doe" });
  axios.get(`${url}/api`);
}
