import { BaseSvg } from "./Svg";

// components/Testimonial.jsx
export default function Testimonial({
  quote,
  authorName,
  authorTitle,
  avatarSrc,
  className = "",
}) {
  return (
    <section className={`bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <BaseSvg
            viewBox="0 0 24 27"
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </BaseSvg>

          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              {quote}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={avatarSrc}
              alt={`${authorName} avatar`}
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                {authorName}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {authorTitle}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
