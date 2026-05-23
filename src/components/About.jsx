import React, { memo, useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";
import resumePdf from "../data/Shalvin_Shaji.pdf";

const About = memo(() => {
  const { bio } = portfolioData.personalInfo;
  const { about } = portfolioData.sectionTitles;
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // prevent background scrolling when modal is open
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showResume]);

  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative mb-20 flex items-start group">
          <span className="absolute left-[-16px] top-[-24px] font-heading text-size-index font-black text-text-white/[0.03] leading-none select-none pointer-events-none">
            {about.number}
          </span>
          <div className="flex flex-col relative z-10">
            <span className="font-heading text-size-nano font-bold text-text-white uppercase tracking-[0.4rem] mb-2 opacity-50">
              {about.prefix}
            </span>
            <h2 className="font-heading text-size-h1 font-extrabold uppercase tracking-tighter leading-none ml-[-4px] bg-gradient-to-r from-text-white via-text-white/40 to-text-white bg-clip-text text-transparent">
              {about.title}
            </h2>
          </div>
        </div>

        <div className="pl-4 border-l border-border-faint relative">
          <div className="pt-12 pb-12 border-b border-border-faint">
            <div className="flex flex-col gap-6 relative">
              <div className="flex flex-col">
                <div className="flex flex-col gap-6">
                  {bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-size-tiny leading-relaxed text-text-white/90 font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-0">
                <button
                  type="button"
                  onClick={() => setShowResume(true)}
                  className="resume-btn inline-block px-6 py-2 text-size-tiny rounded-sm text-text-white/90 relative overflow-hidden"
                >
                  <span className="relative z-10">Resume</span>
                  <svg
                    className="absolute inset-0 w-full h-full left-0 top-0 pointer-events-none"
                    viewBox="0 0 100 36"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="base"
                      x="1"
                      y="1"
                      width="98"
                      height="34"
                      rx="0"
                      ry="0"
                      fill="none"
                    />
                    <rect
                      className="overlay"
                      x="1"
                      y="1"
                      width="98"
                      height="34"
                      rx="0"
                      ry="0"
                      fill="none"
                    />
                  </svg>
                  <style>{`
                    .resume-btn svg rect.base{ stroke: rgba(255,255,255,0.08); stroke-width:1; stroke-linecap:butt }
                    .resume-btn svg rect.overlay{ stroke-dasharray: 264; stroke-dashoffset: 264; stroke-width:1; stroke-linecap:butt; stroke: transparent; transition: stroke-dashoffset 1200ms linear, stroke 220ms ease; }
                    .resume-btn:hover svg rect.overlay{ stroke-dashoffset: 0; stroke: #dc2626; }
                  `}</style>
                </button>
                {showResume && (
                  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
                    <div className="relative z-[10000] w-[92%] md:w-[80%] lg:w-[70%] h-[90%] bg-[#070707] rounded shadow-xl">
                      <button
                        aria-label="Close resume preview"
                        onClick={() => setShowResume(false)}
                        className="absolute right-3 top-3 text-text-white/70 hover:text-white z-50"
                      >
                        ✕
                      </button>
                      <iframe
                        src={resumePdf}
                        title="Resume Preview"
                        className="w-full h-full rounded"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
