import type { Metadata } from "next";
import Link from "next/link";
import { getArticlesNewestFirst } from "./articles";

export const metadata: Metadata = {
  title: "Insights: Plain English Tax and Accounting for Business Owners",
  description:
    "Articles that explain Nigerian tax law, accounts and compliance in plain English for business owners.",
};

export default function Insights() {
  const articles = getArticlesNewestFirst();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
          Insights
        </h1>
        <p className="mt-5 text-xl leading-8 text-gray-700 dark:text-gray-300">
          Plain English tax and accounting for business owners.
        </p>
      </header>

      <section
        aria-label="Articles"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {articles.map((article) => (
          <article
            key={article.slug}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="flex items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span>{article.publishedAt ?? "Publication date to be confirmed"}</span>
              <span className="rounded-full bg-yellow-100 px-3 py-1 font-medium text-yellow-900 dark:bg-yellow-500/15 dark:text-yellow-300">
                {article.category}
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-bold text-gray-950 dark:text-white">
              <Link
                href={`/insights/${article.slug}`}
                className="hover:text-yellow-700 dark:hover:text-yellow-400"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-4 line-clamp-2 leading-7 text-gray-700 dark:text-gray-300">
              {article.summary}
            </p>
            <Link
              href={`/insights/${article.slug}`}
              className="mt-6 inline-flex font-semibold text-yellow-700 underline underline-offset-4 dark:text-yellow-400"
            >
              Read article
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
