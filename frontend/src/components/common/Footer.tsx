import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-900 dark:text-white">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="/about"
            className="text-gray-900 dark:text-white hover:text-gray-700"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-gray-900 dark:text-white hover:text-gray-700"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-900 dark:text-white hover:text-gray-700"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;