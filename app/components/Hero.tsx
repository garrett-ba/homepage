export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950/10 via-purple-950/10 to-black overflow-hidden border-b border-white/10">
      {/* Background Network Illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Blur filters for depth of field */}
            <filter id="blur-light" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
            <filter id="blur-medium" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
            <filter id="blur-heavy" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
            </filter>
            
            {/* Glow effect for focused nodes */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <style>
            {`
              @keyframes flowDash {
                0% { stroke-dashoffset: 24; }
                100% { stroke-dashoffset: 0; }
              }
              .flow-line {
                animation: flowDash 1s linear infinite;
              }
              .flow-line-slow {
                animation: flowDash 1.8s linear infinite;
              }
              .flow-line-fast {
                animation: flowDash 0.7s linear infinite;
              }
              .flow-line-reverse {
                animation: flowDash 1.2s linear infinite reverse;
              }
            `}
          </style>

          {/* Far background blurred nodes */}
          <circle cx="50" cy="80" r="8" fill="rgb(0, 102, 255)" opacity="0.15" filter="url(#blur-heavy)" />
          <circle cx="200" cy="50" r="10" fill="rgb(0, 208, 132)" opacity="0.12" filter="url(#blur-heavy)" />
          <circle cx="400" cy="30" r="7" fill="rgb(0, 102, 255)" opacity="0.1" filter="url(#blur-heavy)" />
          <circle cx="1150" cy="100" r="9" fill="rgb(0, 208, 132)" opacity="0.15" filter="url(#blur-heavy)" />
          <circle cx="1050" cy="50" r="6" fill="rgb(0, 102, 255)" opacity="0.12" filter="url(#blur-heavy)" />
          <circle cx="80" cy="520" r="8" fill="rgb(0, 208, 132)" opacity="0.12" filter="url(#blur-heavy)" />
          <circle cx="300" cy="560" r="7" fill="rgb(0, 102, 255)" opacity="0.1" filter="url(#blur-heavy)" />
          <circle cx="1100" cy="550" r="10" fill="rgb(0, 102, 255)" opacity="0.15" filter="url(#blur-heavy)" />
          <circle cx="950" cy="520" r="6" fill="rgb(0, 208, 132)" opacity="0.1" filter="url(#blur-heavy)" />

          {/* Mid-depth blurred nodes */}
          <circle cx="150" cy="150" r="6" fill="rgb(0, 208, 132)" opacity="0.2" filter="url(#blur-medium)" />
          <circle cx="350" cy="120" r="7" fill="rgb(0, 102, 255)" opacity="0.18" filter="url(#blur-medium)" />
          <circle cx="100" cy="350" r="5" fill="rgb(0, 102, 255)" opacity="0.2" filter="url(#blur-medium)" />
          <circle cx="250" cy="450" r="6" fill="rgb(0, 208, 132)" opacity="0.18" filter="url(#blur-medium)" />
          <circle cx="500" cy="500" r="7" fill="rgb(0, 102, 255)" opacity="0.15" filter="url(#blur-medium)" />
          <circle cx="700" cy="80" r="6" fill="rgb(0, 208, 132)" opacity="0.2" filter="url(#blur-medium)" />
          <circle cx="850" cy="150" r="8" fill="rgb(0, 102, 255)" opacity="0.22" filter="url(#blur-medium)" />
          <circle cx="1000" cy="200" r="5" fill="rgb(0, 208, 132)" opacity="0.18" filter="url(#blur-medium)" />
          <circle cx="900" cy="400" r="7" fill="rgb(0, 102, 255)" opacity="0.2" filter="url(#blur-medium)" />
          <circle cx="1050" cy="450" r="6" fill="rgb(0, 208, 132)" opacity="0.15" filter="url(#blur-medium)" />

          {/* Light blur nodes (closer) */}
          <circle cx="200" cy="250" r="5" fill="rgb(0, 102, 255)" opacity="0.25" filter="url(#blur-light)" />
          <circle cx="450" cy="180" r="6" fill="rgb(0, 208, 132)" opacity="0.28" filter="url(#blur-light)" />
          <circle cx="180" cy="400" r="5" fill="rgb(0, 208, 132)" opacity="0.25" filter="url(#blur-light)" />
          <circle cx="380" cy="380" r="6" fill="rgb(0, 102, 255)" opacity="0.22" filter="url(#blur-light)" />
          <circle cx="750" cy="200" r="5" fill="rgb(0, 102, 255)" opacity="0.28" filter="url(#blur-light)" />
          <circle cx="950" cy="280" r="6" fill="rgb(0, 208, 132)" opacity="0.25" filter="url(#blur-light)" />
          <circle cx="820" cy="350" r="5" fill="rgb(0, 208, 132)" opacity="0.22" filter="url(#blur-light)" />
          <circle cx="1100" cy="320" r="7" fill="rgb(0, 102, 255)" opacity="0.28" filter="url(#blur-light)" />

          {/* Connections from far background blurred nodes */}
          <line x1="50" y1="80" x2="150" y2="150" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.08" filter="url(#blur-light)" />
          <line x1="200" y1="50" x2="350" y2="120" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.08" filter="url(#blur-light)" />
          <line x1="400" y1="30" x2="450" y2="180" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.06" filter="url(#blur-light)" />
          <line x1="80" y1="520" x2="180" y2="400" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.08" filter="url(#blur-light)" />
          <line x1="300" y1="560" x2="380" y2="380" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.06" filter="url(#blur-light)" />
          <line x1="80" y1="520" x2="250" y2="450" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.07" filter="url(#blur-light)" />
          <line x1="1150" y1="100" x2="1050" y2="50" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.08" filter="url(#blur-light)" />
          <line x1="1050" y1="50" x2="1000" y2="200" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.08" filter="url(#blur-light)" />
          <line x1="1150" y1="100" x2="1000" y2="200" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.07" filter="url(#blur-light)" />
          <line x1="1100" y1="550" x2="1050" y2="450" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.08" filter="url(#blur-light)" />
          <line x1="950" y1="520" x2="900" y2="400" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.07" filter="url(#blur-light)" />
          <line x1="1100" y1="550" x2="950" y2="520" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.06" filter="url(#blur-light)" />

          {/* Connections from mid-depth blurred nodes */}
          <line x1="150" y1="150" x2="350" y2="120" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="350" y1="120" x2="450" y2="180" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="100" y1="350" x2="180" y2="400" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="100" y1="350" x2="200" y2="250" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.1" />
          <line x1="250" y1="450" x2="350" y2="350" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="250" y1="450" x2="380" y2="380" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.1" />
          <line x1="500" y1="500" x2="380" y2="380" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.1" />
          <line x1="500" y1="500" x2="600" y2="300" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.08" />
          <line x1="700" y1="80" x2="750" y2="200" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="700" y1="80" x2="850" y2="150" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="850" y1="150" x2="850" y2="250" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.15" />
          <line x1="850" y1="150" x2="1000" y2="200" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="1000" y1="200" x2="950" y2="280" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="1000" y1="200" x2="1100" y2="320" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.1" />
          <line x1="900" y1="400" x2="1050" y2="450" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="1050" y1="450" x2="1050" y2="320" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.1" />
          <line x1="900" y1="400" x2="950" y2="280" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.1" />

          {/* Connections from light blur nodes */}
          <line x1="450" y1="180" x2="350" y2="220" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.15" />
          <line x1="450" y1="180" x2="450" y2="280" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="380" y1="380" x2="350" y2="350" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.15" />
          <line x1="380" y1="380" x2="450" y2="280" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="820" y1="350" x2="900" y2="400" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.15" />
          <line x1="1100" y1="320" x2="1050" y2="320" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.15" />

          {/* Static solid connection lines - left region */}
          <line x1="200" y1="250" x2="350" y2="220" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.15" />
          <line x1="350" y1="220" x2="450" y2="280" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.15" />
          <line x1="180" y1="400" x2="350" y2="350" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="350" y1="350" x2="450" y2="280" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="200" y1="250" x2="180" y2="400" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.1" />
          <line x1="150" y1="150" x2="200" y2="250" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />

          {/* Static solid connection lines - right region */}
          <line x1="750" y1="200" x2="850" y2="250" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.18" />
          <line x1="850" y1="250" x2="950" y2="280" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.18" />
          <line x1="950" y1="280" x2="1050" y2="320" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.15" />
          <line x1="820" y1="350" x2="950" y2="280" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.15" />
          <line x1="850" y1="250" x2="820" y2="350" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="750" y1="200" x2="600" y2="300" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="850" y1="250" x2="750" y2="200" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.1" />

          {/* Cross-region connections */}
          <line x1="450" y1="280" x2="600" y2="300" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.12" />
          <line x1="600" y1="300" x2="750" y2="200" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.12" />
          <line x1="600" y1="300" x2="820" y2="350" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.1" />
          <line x1="350" y1="350" x2="600" y2="300" stroke="rgb(0, 208, 132)" strokeWidth="1" opacity="0.08" />
          <line x1="380" y1="380" x2="600" y2="300" stroke="rgb(0, 102, 255)" strokeWidth="1" opacity="0.08" />

          {/* Animated dotted flow lines - from far nodes */}
          <line
            x1="50" y1="80" x2="150" y2="150"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.2"
            className="flow-line-slow"
          />
          <line
            x1="200" y1="50" x2="350" y2="120"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.2"
            className="flow-line-slow"
          />
          <line
            x1="80" y1="520" x2="250" y2="450"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.18"
            className="flow-line-reverse"
          />
          <line
            x1="1150" y1="100" x2="1000" y2="200"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.2"
            className="flow-line-slow"
          />
          <line
            x1="1100" y1="550" x2="1050" y2="450"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.18"
            className="flow-line-reverse"
          />

          {/* Animated dotted flow lines - from mid-depth nodes */}
          <line
            x1="350" y1="120" x2="450" y2="180"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.25"
            className="flow-line"
          />
          <line
            x1="700" y1="80" x2="850" y2="150"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.28"
            className="flow-line-fast"
          />
          <line
            x1="850" y1="150" x2="850" y2="250"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.3"
            className="flow-line"
          />
          <line
            x1="250" y1="450" x2="380" y2="380"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.25"
            className="flow-line-slow"
          />
          <line
            x1="500" y1="500" x2="600" y2="300"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.22"
            className="flow-line-reverse"
          />
          <line
            x1="1050" y1="450" x2="900" y2="400"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.25"
            className="flow-line-reverse"
          />

          {/* Animated dotted flow lines - left cluster */}
          <line
            x1="150" y1="150" x2="200" y2="250"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
            className="flow-line-slow"
          />
          <line
            x1="200" y1="250" x2="350" y2="220"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.4"
            className="flow-line"
          />
          <line
            x1="350" y1="220" x2="450" y2="280"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.4"
            className="flow-line"
          />
          <line
            x1="180" y1="400" x2="350" y2="350"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.3"
            className="flow-line-reverse"
          />
          <line
            x1="350" y1="350" x2="350" y2="220"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
            className="flow-line-slow"
          />
          <line
            x1="100" y1="350" x2="200" y2="250"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.25"
            className="flow-line"
          />
          <line
            x1="380" y1="380" x2="450" y2="280"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.3"
            className="flow-line-fast"
          />

          {/* Animated dotted flow lines - right cluster */}
          <line
            x1="750" y1="200" x2="850" y2="250"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.45"
            className="flow-line-fast"
          />
          <line
            x1="850" y1="250" x2="950" y2="280"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.45"
            className="flow-line"
          />
          <line
            x1="950" y1="280" x2="1050" y2="320"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.4"
            className="flow-line"
          />
          <line
            x1="1050" y1="320" x2="1100" y2="320"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
            className="flow-line-fast"
          />
          <line
            x1="820" y1="350" x2="850" y2="250"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
            className="flow-line-reverse"
          />
          <line
            x1="900" y1="400" x2="820" y2="350"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.3"
            className="flow-line-slow"
          />
          <line
            x1="1000" y1="200" x2="950" y2="280"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.3"
            className="flow-line"
          />
          <line
            x1="1000" y1="200" x2="1100" y2="320"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.28"
            className="flow-line-slow"
          />
          <line
            x1="900" y1="400" x2="950" y2="280"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.28"
            className="flow-line"
          />

          {/* Central flow connecting regions */}
          <line
            x1="450" y1="280" x2="600" y2="300"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
            className="flow-line-slow"
          />
          <line
            x1="600" y1="300" x2="750" y2="200"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.35"
            className="flow-line"
          />
          <line
            x1="600" y1="300" x2="820" y2="350"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.28"
            className="flow-line-fast"
          />
          <line
            x1="350" y1="350" x2="600" y2="300"
            stroke="rgb(0, 102, 255)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.25"
            className="flow-line-slow"
          />
          <line
            x1="380" y1="380" x2="600" y2="300"
            stroke="rgb(0, 208, 132)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.22"
            className="flow-line"
          />

          {/* Primary focused nodes - left cluster */}
          <circle cx="350" cy="220" r="8" fill="rgb(0, 102, 255)" opacity="0.7" filter="url(#glow)" />
          <circle cx="450" cy="280" r="10" fill="rgb(0, 208, 132)" opacity="0.75" filter="url(#glow)" />
          <circle cx="350" cy="350" r="7" fill="rgb(0, 208, 132)" opacity="0.65" filter="url(#glow)" />

          {/* Primary focused nodes - right cluster */}
          <circle cx="850" cy="250" r="12" fill="rgb(0, 102, 255)" opacity="0.8" filter="url(#glow)" />
          <circle cx="950" cy="280" r="10" fill="rgb(0, 208, 132)" opacity="0.75" filter="url(#glow)" />
          <circle cx="1050" cy="320" r="8" fill="rgb(0, 102, 255)" opacity="0.7" filter="url(#glow)" />
          <circle cx="820" cy="350" r="9" fill="rgb(0, 208, 132)" opacity="0.7" filter="url(#glow)" />

          {/* Central hub node */}
          <circle cx="600" cy="300" r="14" fill="rgb(0, 208, 132)" opacity="0.6" filter="url(#glow)" />

          {/* Secondary focused nodes (sharp, no glow) */}
          <circle cx="200" cy="250" r="5" fill="rgb(0, 102, 255)" opacity="0.5" />
          <circle cx="180" cy="400" r="5" fill="rgb(0, 208, 132)" opacity="0.45" />
          <circle cx="750" cy="200" r="6" fill="rgb(0, 102, 255)" opacity="0.55" />
          <circle cx="1100" cy="320" r="6" fill="rgb(0, 208, 132)" opacity="0.5" />
          <circle cx="900" cy="400" r="5" fill="rgb(0, 102, 255)" opacity="0.45" />

          {/* Inner highlights on main nodes */}
          <circle cx="848" cy="248" r="4" fill="white" opacity="0.3" />
          <circle cx="948" cy="278" r="3" fill="white" opacity="0.3" />
          <circle cx="598" cy="298" r="5" fill="white" opacity="0.25" />
          <circle cx="448" cy="278" r="3" fill="white" opacity="0.25" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-8 p-10 bg-black/40 backdrop-blur-lg chamfered-border">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Less busywork. <span className="text-accent-green">More business.</span>
          </h1>
          <p className="text-lg md:text-xl leading-8 text-zinc-400">
            We help Bend businesses automate the repetitive stuff—so you can focus on your customers and your craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-12 px-6 rounded-full bg-accent-blue text-white font-medium hover:bg-accent-blue-hover transition-colors">
              See How It Works
            </button>
            <button className="h-12 px-6 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}