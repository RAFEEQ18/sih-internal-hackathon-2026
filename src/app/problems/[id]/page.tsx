import Link from "next/link";
import { notFound } from "next/navigation";
import { problemStatements } from "@/data/problemStatements";

interface ProblemDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return problemStatements.map((problem) => ({
    id: problem.id,
  }));
}

export default async function ProblemDetailsPage({ params }: ProblemDetailsProps) {
  const { id } = await params;
  const problem = problemStatements.find((p) => p.id === id);

  if (!problem) {
    notFound();
  }

  let typeStyle = "bg-slate-100 text-slate-800 border-slate-200";
  if (problem.type === "SOFTWARE") {
    typeStyle = "bg-emerald-50 text-emerald-800 border-emerald-100";
  } else if (problem.type === "HARDWARE") {
    typeStyle = "bg-orange-50 text-orange-850 border-orange-100";
  }

  // Calculate problem statement number with zero-padding (e.g., 01, 02)
  const problemNumber = String(problem.id).padStart(2, "0");

  return (
    <div className="flex-1 flex flex-col justify-between bg-slate-50">
      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Back Button */}
          <div>
            <Link
              href="/problems"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 px-4 bg-white rounded-lg border border-slate-200 shadow-sm"
            >
              ← Back to Problem Statements
            </Link>
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            {/* Header info */}
            <div className="border-b border-slate-100 pb-6 space-y-4">
              <p className="text-sm font-bold text-slate-500 tracking-wider">
                PROBLEM STATEMENT {problemNumber}
              </p>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-start">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    THEME:
                  </span>
                  <span className="ml-2 text-[10px] font-bold text-slate-700 tracking-wider uppercase">
                    {problem.theme}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    TYPE:
                  </span>
                  <span className={`ml-2 text-[10px] font-extrabold px-1.5 py-0.5 rounded border tracking-wide uppercase ${typeStyle}`}>
                    {problem.type}
                  </span>
                </div>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight pt-2">
                {problem.title}
              </h1>
            </div>

            {/* Description Body */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Description
              </h2>
              <div className="text-base text-slate-700 leading-relaxed font-normal whitespace-pre-wrap">
                {problem.description}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} University College of Engineering, Anna University-BIT Campus, Tiruchirappalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
