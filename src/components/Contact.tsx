import { useMemo } from "react";

type Star = { top: string; left: string; size: number; delay: string };

export default function Contact() {
  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
      arr.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        delay: `${(Math.random() * 4).toFixed(2)}s`,
      });
    }
    return arr;
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* deep-space background */}
      <div className="absolute inset-0 -z-10 bg-[#070B1A]" />

      {/* starfield */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/90 animate-star-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
            }}
          />
        ))}
        <span className="shooting-star" />
        <span className="shooting-star shooting-star--alt" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-20 lg:gap-28 lg:grid-cols-2 items-center">
          {/* contact card */}
          <div
            className="
  relative
  w-full
  max-w-md
  rounded-3xl
  p-8
  shadow-[0_8px_32px_rgba(0,0,0,0.45)]
  border border-white/20
  bg-white/10
  backdrop-blur-2xl
  before:absolute before:inset-0 before:rounded-3xl
  before:bg-gradient-to-br before:from-white/30 before:to-white/5
  before:opacity-20
  before:pointer-events-none
"
          >
            <p className="text-sm tracking-wider text-white/70">GET IN TOUCH</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
              Contact.
            </h2>

            <div className="mt-8 space-y-6 text-white/90 relative z-10">
              <div>
                <p className="text-lg font-semibold">
                  Contact me through my email
                </p>
                <a
                  href="mailto:therethough@gmail.com"
                  className="underline underline-offset-4 hover:text-cyan-300 transition"
                >
                  therethough@gmail.com
                </a>
              </div>

              <div>
                <p className="text-lg font-semibold mb-3">
                  Visit my social profiles
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/archit-linked"
                    target="_blank"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/90">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/architsharma9"
                    target="_blank"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/90">
                      <path
                        fillRule="evenodd"
                        d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.29 3.44 9.78 8.2 11.37.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.83 1.1.83 2.22 0 1.61-.02 2.9-.02 3.29 0 .32.22.69.83.57C20.56 22.09 24 17.59 24 12.3 24 5.67 18.63.3 12 .3z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold mb-3">Download my resume</p>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:brightness-110 transition"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Earth visual */}
          <div className="relative mx-auto aspect-square w-80 sm:w-96 lg:w-[28rem]">
            {/* Core gradient with breathing pulse */}
            <div className="absolute inset-0 rounded-full animate-planet-pulse bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,#10b981_35%,#065f46_60%,#1e3a8a_85%)]" />

            {/* Cloud layer (drifting softly) */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-cloud-drift mix-blend-overlay" />

            {/* Orbit bands (counter-rotate) */}
            <div className="absolute inset-0 animate-orbit-slow">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{
                    transform: `rotate(${i * 20}deg) skewY(${10 + i * 2}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Atmosphere glow (pulses) */}
            <div className="absolute -inset-8 rounded-full bg-cyan-400/20 blur-3xl animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
