import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function ModernFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a dedicated team offering thrilling adventure trips in
              Djerba, ensuring unforgettable experiences for every explorer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/product-category/excursions"
                  className="text-sm hover:text-white transition-colors"
                >
                  Excursions
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Modern Street</p>
            <p className="text-sm">City, State 12345</p>
            <p className="text-sm">Email: tkitek@modern.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">
              Subscribe to receive the latest updates and exclusive offers on
              our adventure trips!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              &copy; 2023 Modern Company. All rights reserved by
              <Link href={"https://rayen.me"}>
                <span className="text-yellow-500"> rayen.me</span>
              </Link>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
