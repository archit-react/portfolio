// src/components/EarthVector.tsx
export default function EarthVector() {
  return (
    <div className="relative mx-auto aspect-square w-80 sm:w-96 lg:w-[28rem]">
      {/* Atmosphere glow */}
      <div className="absolute -inset-8 rounded-full bg-cyan-400/20 blur-3xl" />

      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Stylized vector Earth"
      >
        <defs>
          {/* Ocean radial gradient */}
          <radialGradient id="ocean" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#60a5fa" /> {/* bright blue */}
            <stop offset="45%" stopColor="#22d3ee" /> {/* cyan */}
            <stop offset="100%" stopColor="#0ea5e9" /> {/* blue */}
          </radialGradient>

          {/* Atmosphere edge vignette */}
          <radialGradient id="rim" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
          </radialGradient>

          {/* Circle clip so everything stays inside the globe */}
          <clipPath id="globeClip">
            <circle cx="250" cy="250" r="220" />
          </clipPath>

          {/* Subtle cloudy overlay */}
          <filter id="clouds" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="3"
            />
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 .045 0" />
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* Globe base */}
        <g clipPath="url(#globeClip)">
          <circle cx="250" cy="250" r="220" fill="url(#ocean)" />
          {/* Very subtle clouds */}
          <rect x="0" y="0" width="500" height="500" filter="url(#clouds)" />
        </g>

        {/* Continents (stylized blobs; not geographic-accurate on purpose) */}
        <g clipPath="url(#globeClip)" fill="#22c55e">
          {/* Americas */}
          <path
            d="M180 120c-22 10-40 32-38 54 1 10 8 19 14 26 11 13 10 25 6 33-8 15-6 30 8 44 20 19 55 22 82 10 22-10 32-30 23-49-7-14-22-21-29-36-6-12-4-28-16-42-13-15-28-20-50-40z"
            opacity=".95"
          />
          {/* Africa / Europe */}
          <path
            d="M285 170c-18 9-26 23-24 37 2 15 15 25 24 33 10 9 17 18 16 28-1 10-10 19-23 26 24 7 52-2 69-18 17-15 22-37 13-53-8-13-23-19-36-25-12-5-23-10-39-28z"
            opacity=".95"
          />
          {/* Asia */}
          <path
            d="M330 200c20 2 43 7 60 18 20 12 31 31 27 48-4 18-22 33-48 39-22 5-44 2-62-7 13-6 22-16 24-27 2-10-2-20-10-29-9-10-23-18-30-29 11-9 21-13 39-13z"
            opacity=".92"
          />
          {/* Australia-ish blob */}
          <path
            d="M360 330c10 0 21 4 28 10 9 7 12 16 8 24-4 8-15 13-28 13-11 0-22-4-29-10-8-7-11-15-8-22 4-8 15-13 29-15z"
            opacity=".92"
          />
        </g>

        {/* Graticule (lat/long lines) */}
        <g
          clipPath="url(#globeClip)"
          stroke="rgba(255,255,255,.15)"
          strokeWidth="1"
        >
          {Array.from({ length: 6 }).map((_, i) => {
            const rot = i * 15 + 15; // longitudes
            return (
              <ellipse
                key={`lon-${i}`}
                cx="250"
                cy="250"
                rx="220"
                ry="220"
                transform={`rotate(${rot} 250 250)`}
                fill="none"
              />
            );
          })}
          {Array.from({ length: 5 }).map((_, i) => {
            const ry = 220 - i * 30;
            return (
              <ellipse
                key={`lat-${i}`}
                cx="250"
                cy="250"
                rx="220"
                ry={ry}
                fill="none"
              />
            );
          })}
        </g>

        {/* Rim light */}
        <circle cx="250" cy="250" r="220" fill="url(#rim)" />
      </svg>
    </div>
  );
}
