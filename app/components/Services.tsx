export default function Services() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Automation that fits where you are
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Whether you&apos;re looking to save a few hours a week or build something custom, we&apos;ll find the right solution for your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Quick Wins */}
          <div className="group relative p-8 bg-white/[0.03] chamfered-border transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1">
            {/* Icon */}
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-accent-green/10">
              <svg
                className="w-6 h-6 text-accent-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">Quick Wins</h3>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mb-6">
              Start saving time fast. We&apos;ll automate repetitive tasks like email sorting, appointment reminders, and basic document handling.
            </p>

            {/* Best for */}
            <p className="text-sm text-zinc-500 mb-6">
              <span className="text-zinc-400 font-medium">Best for:</span> Busy owners who want immediate relief
            </p>

            {/* Learn more link */}
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-accent-green hover:text-accent-green-hover transition-colors"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Card 2 - Streamlined Operations */}
          <div className="group relative p-8 bg-white/[0.03] chamfered-border transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1">
            {/* Icon */}
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-accent-blue/10">
              <svg
                className="w-6 h-6 text-accent-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">Streamlined Operations</h3>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mb-6">
              Connect your tools so they work together. Automatic CRM updates, invoicing workflows, customer follow-ups that happen without you.
            </p>

            {/* Best for */}
            <p className="text-sm text-zinc-500 mb-6">
              <span className="text-zinc-400 font-medium">Best for:</span> Growing businesses ready to systematize
            </p>

            {/* Learn more link */}
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-accent-blue hover:text-accent-blue-hover transition-colors"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Card 3 - Custom Solutions */}
          <div className="group relative p-8 bg-white/[0.03] chamfered-border transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1">
            {/* Icon */}
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-purple-500/10">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mb-6">
              AI-powered systems built for how you work. Searchable knowledge bases, smart document processing, custom tools designed just for you.
            </p>

            {/* Best for */}
            <p className="text-sm text-zinc-500 mb-6">
              <span className="text-zinc-400 font-medium">Best for:</span> Businesses with unique needs or complex operations
            </p>

            {/* Learn more link */}
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

