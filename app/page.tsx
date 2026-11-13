import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tzaddy Consulting: Tax and Accounting for Nigerian SMEs, Ibadan",
  description:
    "Ibadan accounting and tax firm for small businesses. Tax assessment defence, tax filing, bookkeeping and financial statements.",
};

const services = [
  {
    id: "tax-assessment-defence",
    title: "Tax Assessment Defence",
    description:
      "Received a demand notice or an assessment you do not agree with? We review it, file the objection and represent you.",
  },
  {
    id: "tax-compliance",
    title: "Tax Compliance",
    description:
      "Company income tax, VAT, withholding tax, PAYE and personal income tax, filed correctly and on time.",
  },
  {
    id: "bookkeeping-monthly-accounts",
    title: "Bookkeeping and Monthly Accounts",
    description:
      "Monthly records, bank reconciliations and a report you can read and act on.",
  },
  {
    id: "financial-statements",
    title: "Financial Statements",
    description:
      "Annual accounts under IFRS for SMEs, even where records are incomplete.",
  },
  {
    id: "business-setup-systems",
    title: "Business Setup and Systems",
    description:
      "Chart of accounts, payroll, inventory and record keeping, set up properly from the start.",
  },
  {
    id: "training-advisory",
    title: "Training and Advisory",
    description:
      "Tax and record keeping training for business owners, plus cash flow projections and bank facility documents.",
  },
];

const figures = [
  {
    figure: "21 years",
    caption: "Our lead consultant's experience in accounting, audit and tax",
  },
  {
    figure: "Over ₦1 billion",
    caption:
      "In tax assessments contested for 7 clients. Final agreed liability: ₦50 million.",
  },
  {
    figure: "92",
    caption: "Business owners trained at our 2025 Nigeria Tax Act webinar",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-linear-to-br from-amber-50 via-white to-orange-50 dark:from-gray-950 dark:via-black dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 font-semibold uppercase tracking-[0.18em] text-yellow-700 dark:text-yellow-400">
              Accounting · Tax · Business Advisory
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl">
              Tax and accounting help for Nigerian small businesses
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300 sm:text-xl">
              We keep your books in order, file your taxes on time, and stand
              with you when the tax office raises an assessment. Based in
              Ibadan, serving businesses across Nigeria.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-yellow-500 px-7 py-4 text-center font-semibold text-black transition-colors hover:bg-yellow-400"
              >
                Talk to Us
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-gray-300 px-7 py-4 text-center font-semibold text-gray-900 transition-colors hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Experience and outcomes"
        className="bg-white py-14 dark:bg-black"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {figures.map((item) => (
            <div key={item.figure} className="text-center">
              <p className="text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
                {item.figure}
              </p>
              <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-gray-600 dark:text-gray-400">
                {item.caption}
              </p>
            </div>
          ))}
          <p className="md:col-span-3 text-center text-base leading-7 text-gray-600 dark:text-gray-400">
            Every tax case turns on its own facts and records. Past outcomes do
            not predict future results.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Practical accounting and tax support for the decisions and
              deadlines that matter.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group rounded-xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-black"
              >
                <h3 className="text-xl font-semibold text-gray-950 group-hover:text-yellow-700 dark:text-white dark:group-hover:text-yellow-400">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.16em] text-yellow-700 dark:text-yellow-400">
              Who you will deal with
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
              Direct advice from the person doing the work
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Elizabeth Misan-Ulori, ACA, ACTI, leads every engagement. She
              spent eight years in audit and tax at Baker Tilly Nigeria and
              eight years running a school&apos;s finances before founding
              Tzaddy Consulting in 2022. You deal with the person doing the
              work.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex font-semibold text-yellow-700 underline decoration-yellow-500 underline-offset-4 dark:text-yellow-400"
            >
              More about us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-yellow-500 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Got a letter from the tax office, or books that are behind?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-900">
            Tell us what you are dealing with. We reply within one working day.
          </p>
          <a
            href="https://wa.me/2349095509872"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-black px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
