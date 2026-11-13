import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services: Tax Defence, Tax Filing, Bookkeeping, Financial Statements",
  description:
    "Six services for Nigerian small businesses, from defending a tax assessment to monthly accounts and payroll setup.",
};

const services = [
  {
    id: "tax-assessment-defence",
    title: "Tax Assessment Defence and Dispute Resolution",
    introduction:
      "A demand notice or best-of-judgement assessment is the tax office's opening position. It can be answered, and there is a deadline for doing so.",
    items: [
      "Review of the assessment against your records and the law",
      "Reconciliation of turnover, VAT and withholding tax to bank statements",
      "Written objection filed within the statutory period",
      "Representation at meetings with the Nigeria Revenue Service or State Internal Revenue Service",
    ],
    closing: (
      <>
        Once a dispute closes, we set up your filing calendar so the next one
        does not arise. See{" "}
        <a
          href="#tax-compliance"
          className="font-semibold text-yellow-700 underline underline-offset-4 dark:text-yellow-400"
        >
          Tax Compliance
        </a>
        .
      </>
    ),
  },
  {
    id: "tax-compliance",
    title: "Tax Compliance",
    introduction:
      "Returns filed correctly and on time, with a calendar so nothing is missed.",
    items: [
      "Company income tax returns and computations",
      "Monthly VAT and withholding tax returns",
      "PAYE remittance and annual employer returns",
      "Personal income tax returns for business owners and directors",
      "Tax clearance certificates",
    ],
  },
  {
    id: "bookkeeping-monthly-accounts",
    title: "Bookkeeping and Monthly Management Accounts",
    introduction:
      "Records kept through the year, so tax filing and bank requests are never a scramble.",
    items: [
      "Monthly posting and bank reconciliation",
      "Receivables and payables schedules",
      "A monthly report showing profit, cash and what needs attention",
    ],
  },
  {
    id: "financial-statements",
    title: "Financial Statements Preparation",
    introduction:
      "Annual financial statements prepared under IFRS for SMEs, for tax filing, banks and your own decisions.",
    items: [
      "Preparation from your accounting records or trial balance",
      "Reconstruction from bank statements where records are incomplete",
      "Supporting schedules and notes",
    ],
  },
  {
    id: "business-setup-systems",
    title: "Business Setup and Systems",
    introduction:
      "For new businesses, and for established ones whose records have fallen behind.",
    items: [
      "Chart of accounts and accounting software setup",
      "Payroll structure and PAYE registration",
      "Inventory and stock control systems",
      "Record keeping procedures your staff can follow",
    ],
  },
  {
    id: "training-advisory",
    title: "Training and Advisory",
    items: [
      "Tax and record keeping training for business owners and staff",
      "Costing, pricing and profitability reviews",
      "Cash flow projections and documents for bank facilities",
      "Advice on the tax effect of a business decision before you make it",
    ],
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-linear-to-br from-amber-50 via-white to-orange-50 py-20 dark:from-gray-950 dark:via-black dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-gray-700 dark:text-gray-300">
            Six things we do for small and medium-sized businesses, in the order
            most clients come to us.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-10"
          >
            <p className="font-semibold uppercase tracking-[0.16em] text-yellow-700 dark:text-yellow-400">
              Service {index + 1}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-950 dark:text-white sm:text-3xl">
              {service.title}
            </h2>
            {service.introduction && (
              <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                {service.introduction}
              </p>
            )}
            <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-gray-700 marker:text-yellow-600 dark:text-gray-300">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {service.closing && (
              <p className="mt-6 leading-7 text-gray-700 dark:text-gray-300">
                {service.closing}
              </p>
            )}
          </section>
        ))}
      </div>

      <section className="bg-yellow-500 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Not sure which of these you need?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-900">
            Tell us what you are dealing with and we will tell you where to
            start.
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
