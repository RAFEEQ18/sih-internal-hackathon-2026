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
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                  {problem.theme}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border tracking-wide ${typeStyle}`}>
                  {problem.type}
                </span>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
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
