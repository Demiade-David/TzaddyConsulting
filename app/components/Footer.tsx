import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Tzaddy Consulting
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Accounting, tax and business advisory for Nigerian SMEs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h4>
            <address className="space-y-2 not-italic text-gray-600 dark:text-gray-400">
              <p>
                Tzaddy Consulting
                <br />
                No 90, MKO Abiola Way, Ring Road, Ibadan, Oyo State
              </p>
              <p>
                <a href="tel:+2349095509872">+234 909 550 9872</a>
              </p>
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=consultant%40tzaddyconsulting.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  consultant@tzaddyconsulting.com.ng
                </a>
              </p>
              <p>Monday to Friday, 9am to 5pm</p>
            </address>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/tzaddyy-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/naijabiz_fixer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Tzaddy Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
