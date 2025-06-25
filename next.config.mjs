import nextMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  // you can keep adding more config here if needed
};

export default nextMdx({
  extension: /\.mdx?$/,
})(nextConfig);
