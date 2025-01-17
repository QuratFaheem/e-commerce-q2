import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export const GetAllProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    productname,
    description,
    price,
    category,
    productUrl,
    "image": image.asset->url,
    "productUrl":slug.current,
  }`;
  const products = await sanityClient.fetch(query);
  return products; // This should return an array of objects
};

export const GetSingleProduct = async (slug: string | undefined) => {
  if (!slug) {
    throw new Error("Slug is undefined or empty");
  }

  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    productname,
    description,
    price,
    category,
    "pimage": image.asset->url,
    "productUrl": slug.current,
  }`;

  const product = await sanityClient.fetch(query, { slug }); // Pass slug as parameter
  return product;
};


