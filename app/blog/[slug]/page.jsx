import React from "react";
import SinglePageBlog from "../../../Components/pages/blog/SinglePageBlog";

function capitalizeSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
export async function generateMetadata({ params }) {
  const formattedSlug = capitalizeSlug(params.slug);
  return {
    title: `${formattedSlug}`,
  };
}

const page = ({ params }) => {
  return (
    <div>
      <SinglePageBlog slug={params.slug} />
    </div>
  );
};

export default page;
