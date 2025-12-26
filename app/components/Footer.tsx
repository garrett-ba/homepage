export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left side - Business info */}
          <div className="space-y-2">
            <p className="text-white font-medium">Bend Automation</p>
            <p className="text-sm text-zinc-500">Bend, Oregon</p>
          </div>

          {/* Right side - Contact & social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="mailto:hello@bendautomation.com"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              hello@bendautomation.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-zinc-600">
            © {currentYear} Bend Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

