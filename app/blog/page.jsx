import BlogsPage from "@/Components/pages/blog/BlogsPage";

export async function generateMetadata() {
  return {
    title: "Blogs", // Capitalize the slug for the title
  };
}
export default function Page() {
  return (
    <div>
      <BlogsPage />
    </div>
  );
}
