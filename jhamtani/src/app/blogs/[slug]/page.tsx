import Header from "@/components/header/Header";
import BlogDetail from "@/components/blog/BlogDetail";
import Footer from "@/components/footer/Footer";
import { getBlogBySlug, getAllBlogs, cmsBlogToBlogPost, BlogPost } from "@/data/blogsData";
import { getCmsBlogBySlugOrId, getCmsBlogs } from "@/services/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function fetchBlog(slug: string): Promise<BlogPost | null> {
  const localBlog = getBlogBySlug(slug);
  if (localBlog) return localBlog;

  const cmsBlog = await getCmsBlogBySlugOrId(slug);
  if (cmsBlog) {
    return cmsBlogToBlogPost(cmsBlog);
  }

  return null;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  const params = blogs.map((blog) => ({
    slug: blog.slug,
  }));

  try {
    const cmsBlogs = await getCmsBlogs();
    cmsBlogs.forEach((c) => {
      if (c.slug && !params.some((p) => p.slug === c.slug)) {
        params.push({ slug: c.slug });
      }
    });
  } catch {}

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Jhamtani",
      description: "The requested blog article could not be found.",
    };
  }

  const canonicalUrl = `https://jhamtani.com/blogs/${blog.slug}`;
  const authorName =
    blog.author && blog.author !== "admin" ? blog.author : "Jhamtani Group";

  return {
    title: `${blog.title} | Jhamtani`,
    description: blog.metaDescription,
    keywords: blog.keywords,
    authors: [{ name: authorName }],
    publisher: "Jhamtani Group",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${blog.title} | Jhamtani`,
      description: blog.metaDescription,
      url: canonicalUrl,
      siteName: "Jhamtani",
      type: "article",
      publishedTime: blog.dateIso,
      authors: [authorName],
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
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

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

