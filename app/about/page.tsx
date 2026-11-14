import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import elizabethHeadshot from "../Elizabeth's headshot.jpeg";

export const metadata: Metadata = {
  title: "About Tzaddy Consulting: Elizabeth Misan-Ulori, ACA, ACTI",
  description:
    "Founded in 2022 and led by Elizabeth Misan-Ulori, ACA, ACTI, with 21 years in accounting, audit and tax.",
};

const workingPrinciples = [
  {
    title: "Records before opinions",
    description:
      "We advise from your documents, never from assumptions. If the records are weak, we fix that first.",
  },
  {
    title: "Plain English",
    description:
      "You will understand what you are signing, what you owe and why.",
  },
  {
    title: "Written scope and fee",
    description:
      "Every engagement starts with a letter stating the work, the timeline and the fee. No surprises.",
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-linear-to-br from-amber-50 via-white to-orange-50 py-20 dark:from-gray-950 dark:via-black dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
            About Tzaddy Consulting
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-gray-700 dark:text-gray-300">
            An accounting, tax and business advisory firm in Ibadan, serving
            small and medium-sized businesses across Nigeria since 2022.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
              Our story
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
              <p>
                Most small businesses see an accountant once a year and hear
                from the tax office only when something has gone wrong. By then
                the records are thin, the deadline is close and the bill is
                larger than it should be.
              </p>
              <p>
                Tzaddy Consulting was founded in November 2022 to work the other
                way round. We keep the records right through the year, file on
                time, and explain the numbers in plain English. When an
                assessment does arrive, the evidence to answer it is already on
                file.
              </p>
              <p>
                Our clients include schools, contractors, consultancies, food
                businesses and other owner-managed companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
          <Image
            src={elizabethHeadshot}
            alt="Elizabeth Omolade Misan-Ulori, lead consultant"
            className="aspect-square w-full max-w-80 rounded-2xl object-cover object-center"
          />
          <div>
            <p className="font-semibold uppercase tracking-[0.16em] text-yellow-700 dark:text-yellow-400">
              Lead consultant
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 dark:text-white">
              Elizabeth Omolade Misan-Ulori, ACA, ACTI
            </h2>
            <div className="mt-5 space-y-4 leading-8 text-gray-700 dark:text-gray-300">
              <p>
                Elizabeth has years of experience in accounting, audit and tax.
                She managed a private school&apos;s finances for years, then
                spent years at Baker Tilly Nigeria in Ibadan, first in audit and
                later in the tax department. Then she founded Tzaddy Consulting.
              </p>
              <p>
                She trains business owners and fellow accountants on tax and
                record keeping, and writes the weekly series NTA in Plain
                English.
              </p>
            </div>

            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-gray-950 dark:text-white">
                  Qualifications
                </dt>
                <dd className="mt-2 leading-7 text-gray-700 dark:text-gray-300">
                  Associate, Institute of Chartered Accountants of Nigeria.
                  Associate, Chartered Institute of Taxation of Nigeria . BSc
                  Accounting, Olabisi Onabanjo University.
                </dd>
              </div>
            </dl>
            <Link
              href="https://www.linkedin.com/in/elizabeth-omolade-misan-ulori-aca-acti-9a1a66124?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="mt-6 text-sm text-gray-600 dark:text-gray-400"
            >
              Elizabeth&apos;s LinkedIn Profile
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
            How we work
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-gray-200 p-7 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-lg bg-yellow-500 px-7 py-4 font-semibold text-black hover:bg-yellow-400"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </div>
  );
}
