import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tzaddy Consulting, Ibadan: Call, WhatsApp or Email",
  description:
    "Reach Tzaddy Consulting at No 90, MKO Abiola Way, Ring Road, Ibadan. Phone and WhatsApp +234 909 550 9872.",
};

const contactPrompts = [
  {
    icon: "👤",
    title: "Your Name & Business Name",
    description:
      "Help us personalize our response and understand who we're speaking with.",
  },
  {
    icon: "🎯",
    title: "What Are You Trying to Solve",
    description:
      "A tax letter, books that are behind, a filing deadline or a business decision.",
  },
  {
    icon: "⏰",
    title: "Urgency & Deadline",
    description:
      "Let us know how urgent it is and any deadlines you're working against.",
  },
  {
    icon: "📱",
    title: "Best Way to Reach You",
    description:
      "Provide your preferred contact method so we can get back to you quickly.",
  },
];

const companyLinkedIn = "https://www.linkedin.com/company/tzaddyy-consulting/";
const instagram = "https://www.instagram.com/naijabiz_fixer";
const mapLink =
  "https://www.google.com/maps/search/?api=1&query=No+90+MKO+Abiola+Way+Ring+Road+Ibadan+Oyo+State+Nigeria";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="bg-linear-to-br from-blue-50 to-purple-50 py-20 dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Contact Tzaddy Consulting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Every good engagement starts with a real conversation. Tell us what
            you&apos;re dealing with, and we&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Here&apos;s what helps us respond well to your first message:
            </h2>
            <div className="space-y-6">
              {contactPrompts.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div aria-hidden="true" className="shrink-0 text-4xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg italic text-gray-600 dark:text-gray-400">
              The more we know upfront, the faster we can give you a useful
              response.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Speak to Us
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-black">
              <div aria-hidden="true" className="mb-4 text-4xl">
                📞
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Phone
              </h3>
              <a
                href="tel:+2349095509872"
                className="text-xl font-semibold text-yellow-700 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
              >
                +234 909 550 9872
              </a>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Call us directly for immediate assistance.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-black">
              <div aria-hidden="true" className="mb-4 text-4xl">
                💬
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Quick Message
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/2349095509872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
                >
                  WhatsApp →
                </a>
                <a
                  href="mailto:consultant@tzaddyconsulting.com.ng"
                  className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
                >
                  Email →
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-black">
              <div aria-hidden="true" className="mb-4 text-4xl">
                📍
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Office
              </h3>
              <address className="not-italic leading-7 text-gray-600 dark:text-gray-400">
                No 90, MKO Abiola Way, Ring Road, Ibadan, Oyo State
              </address>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Visits by appointment.
              </p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex font-semibold text-yellow-700 underline underline-offset-4 dark:text-yellow-400"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-black">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Office Hours
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                Monday to Friday
              </span>
              , 9am to 5pm
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We respond to messages received outside these hours on the next
              working day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Find Us Online
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div aria-hidden="true" className="mb-4 text-5xl">
                📸
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Instagram
              </h3>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">
                @naijabiz_fixer
              </p>
            </a>
            <a
              href={companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div aria-hidden="true" className="mb-4 text-5xl">
                💼
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                LinkedIn
              </h3>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">
                Tzaddy Consulting
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Ready to Connect?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Tell us what you are dealing with. We reply within one working day.
          </p>
          <a
            href="https://wa.me/2349095509872"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-linear-to-r from-yellow-500 to-yellow-600 px-8 py-4 font-semibold text-black transition-shadow hover:shadow-lg"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
