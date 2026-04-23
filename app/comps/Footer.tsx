import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">

        {/* Brand */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">

          <a href="#" className="z-50 flex items-center">
            <Image src="/logotransp.png" alt="Kova Logo" width={120} height={40} className="h-8 w-auto" />
          </a>
          </div>

          <p className="text-sm text-gray-500">
            High-performance marketing systems for ambitious brands.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a href="#results" className="text-gray-500 hover:text-gray-900 transition">
            Results
          </a>
          <a href="#process" className="text-gray-500 hover:text-gray-900 transition">
            Process
          </a>
          <a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-500 hover:text-gray-900 transition">
            FAQ
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-wrap justify-between items-center gap-4 text-center md:text-left">

          <span className="text-xs text-gray-400 w-full md:w-auto">
            © 2026 Kova Growth. All rights reserved.
          </span>

          <div className="flex gap-6 justify-center md:justify-end w-full md:w-auto text-xs">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}