import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/college-building.png')" }}
    >
      {/* Dark Navy Overlay - Graduated from left to right on desktop, top to bottom on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-slate-950 via-slate-950/95 lg:via-slate-950/85 to-slate-950/75 lg:to-slate-900/25 z-0" />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 flex flex-col justify-between">
        
        {/* Hero Content aligned left */}
        <div className="max-w-2xl text-left space-y-6 my-auto">
          {/* Main Title Section */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none uppercase">
              SMART INDIA <br />
              HACKATHON 2026
            </h1>
            
            <p className="text-2xl sm:text-3xl font-extrabold tracking-wider text-orange-500 uppercase">
              INTERNAL HACKATHON
            </p>
          </div>

          {/* Green-Orange Decorative Line */}
          <div className="h-1.5 w-28 bg-gradient-to-r from-orange-500 to-emerald-500 rounded-full" />

          {/* College Name & Intro */}
          <div className="space-y-4">
            <div className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide uppercase leading-relaxed max-w-xl">
              UNIVERSITY COLLEGE OF ENGINEERING, <br />
              ANNA UNIVERSITY-BIT CAMPUS, <br />
              TIRUCHIRAPPALLI
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
              Explore the problem statements for the Smart India Hackathon 2026 Internal Hackathon.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/problems"
              className="w-full sm:w-auto px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-sm hover:shadow transition-all duration-150 text-center text-sm"
            >
              Explore Problem Statements
            </Link>
            <a
              href="/SIH INTERNAL HACKATHON PS-26 - Sheet1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/50 font-bold rounded-lg shadow transition-all duration-150 text-center text-sm"
            >
              View Original PDF
            </a>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-12 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-5 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10">
            {/* Innovate */}
            <div className="flex items-start gap-3">
              <div className="text-emerald-400 mt-0.5 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xs sm:text-sm">Innovate</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">Work on real-world problems.</p>
              </div>
            </div>

            {/* Collaborate */}
            <div className="flex items-start gap-3">
              <div className="text-orange-400 mt-0.5 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xs sm:text-sm">Collaborate</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">Build solutions together.</p>
              </div>
            </div>

            {/* Create */}
            <div className="flex items-start gap-3">
              <div className="text-emerald-400 mt-0.5 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xs sm:text-sm">Create</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">Turn ideas into solutions.</p>
              </div>
            </div>

            {/* Excel */}
            <div className="flex items-start gap-3">
              <div className="text-orange-400 mt-0.5 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xs sm:text-sm">Excel</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">Showcase your ideas.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950/80 text-slate-400 py-6 text-center text-xs border-t border-white/5 shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} University College of Engineering, Anna University-BIT Campus, Tiruchirappalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
