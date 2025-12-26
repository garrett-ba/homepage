export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "We Listen",
      description:
        "Tell us what's eating your time. We'll ask questions, watch how you work, and find the friction.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "We Build",
      description:
        "We create a solution that fits your workflow—not the other way around. You'll see it working before we call it done.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "You Win",
      description:
        "Hours back in your week. Fewer mistakes. More time for the work that actually matters.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-24 md:py-32 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Simple process. Real results.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connecting line - mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-24 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent -mb-12" />
                )}

                {/* Step content */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                      {step.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-sm font-mono text-accent-green mb-2">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

