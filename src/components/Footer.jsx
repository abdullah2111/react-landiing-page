import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* Sub Footer 1 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Brand Center", href: "#" },
              { label: "Blog", href: "#" },
            ]}
          />
          <FooterColumn
            title="Help center"
            links={[
              { label: "Discord Server", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Facebook", href: "#" },
              { label: "Contact Us", href: "#" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "#" },
              { label: "Licensing", href: "#" },
              { label: "Terms", href: "#" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Brand Center", href: "#" },
              { label: "Blog", href: "#" },
            ]}
          />
          <FooterColumn
            title="Download"
            links={[
              { label: "iOS", href: "#" },
              { label: "Android", href: "#" },
              { label: "Windows", href: "#" },
              { label: "MacOS", href: "#" },
            ]}
          />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Sub Footer 2 */}
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          ></a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2025 All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>

          {/* Social Icons */}
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
