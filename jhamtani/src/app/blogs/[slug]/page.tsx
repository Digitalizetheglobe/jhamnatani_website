import Header from "@/components/header/Header";
import BlogDetail from "@/components/blog/BlogDetail";
import Footer from "@/components/footer/Footer";
import { getBlogBySlug, getAllBlogs } from "@/data/blogsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Jhamtani",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${blog.title} | Jhamtani`,
    description: blog.metaDescription,
    keywords: blog.keywords,
    openGraph: {
      title: `${blog.title} | Jhamtani`,
      description: blog.metaDescription,
      url: `https://jhamtani.com/blogs/${blog.slug}`,
      siteName: "Jhamtani",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 628,
          alt: blog.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BlogDetail blog={blog} />
      </main>
      <Footer />
    </>
  );
}
