export default function Navigation() {
  return (
    <header className="bg-black border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32"
                height="32"
                rx="6"
                fill="url(#logoGradient)"
              />
              <path
                d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M16 8V24M8 12L16 16L24 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0066FF" />
                  <stop offset="1" stopColor="#00D084" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-white text-lg font-semibold">Bend Automation</span>
        </div>
      </nav>
    </header>
  );
}
