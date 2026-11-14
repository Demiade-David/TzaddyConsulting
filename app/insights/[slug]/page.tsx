import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "../ShareButtons";
import { articles } from "../articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function InsightArticle({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const whatsappLink = `https://wa.me/2349095509872?text=${encodeURIComponent("Need help with this?")}`;

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/insights"
        className="font-semibold text-yellow-700 underline underline-offset-4 dark:text-yellow-400"
      >
        ← All insights
      </Link>
      <header className="mt-8 border-b border-gray-200 pb-8 dark:border-gray-800">
        <p className="font-semibold text-yellow-700 dark:text-yellow-400">
          {article.category}
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
          {article.publishedAt && (
            <>
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
              {" · "}
            </>
          )}
          {article.author}
        </p>
        <div className="mt-6">
          <ShareButtons title={article.title} />
        </div>
      </header>

      <div className="space-y-8 py-10 text-lg leading-8 text-gray-700 dark:text-gray-300">
        <p>{article.introduction}</p>
        {article.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-2xl font-bold text-gray-950 dark:text-white">
              {section.title}
            </h2>
            <p>{section.text}</p>
          </section>
        ))}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-gray-950 dark:text-white">
            The Tzaddy Perspective
          </h2>
          <p>{article.conclusion}</p>
        </section>
      </div>

      <footer className="border-t border-gray-200 pt-8 dark:border-gray-800">
        <p className="text-xl font-semibold text-gray-950 dark:text-white">
          Need help with this?{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 underline underline-offset-4 dark:text-yellow-400"
          >
            Message Us on WhatsApp.
          </a>
        </p>
      </footer>
    </article>
  );
}
