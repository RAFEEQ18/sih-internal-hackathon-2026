"use client";

import { useState } from "react";
import Link from "next/link";
import { problemStatements } from "@/data/problemStatements";

export default function ProblemsPage() {
  const [search, setSearch] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Extract unique themes dynamically
  const themes = Array.from(new Set(problemStatements.map((p) => p.theme))).sort();
  const types = ["SOFTWARE", "HARDWARE", "SOFTWARE/HARDWARE"];

  // Filter logic
  const filteredProblems = problemStatements.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.theme.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchesTheme = selectedTheme ? p.theme === selectedTheme : true;
    const matchesType = selectedType ? p.type === selectedType : true;

    return matchesSearch && matchesTheme && matchesType;
  });

  const isFiltered = search || selectedTheme || selectedType;

  const handleClearFilters = () => {
    setSearch("");
    setSelectedTheme("");
    setSelectedType("");
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-slate-50">
      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Page Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Problem Statements
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Browse, search, and filter the official problem statements for the SIH 2026 Internal Hackathon.
            </p>
          </div>

          {/* Search and Filters panel */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Search Bar */}
              <div className="flex flex-col">
                <label htmlFor="search" className="text-xs font-semibold text-slate-600 mb-1">
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search title, theme, description..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-50"
                />
              </div>

              {/* Theme Filter */}
              <div className="flex flex-col">
                <label htmlFor="theme" className="text-xs font-semibold text-slate-600 mb-1">
                  Theme Filter
                </label>
                <select
                  id="theme"
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-50 cursor-pointer"
                >
                  <option value="">All Themes</option>
                  {themes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="flex flex-col">
                <label htmlFor="type" className="text-xs font-semibold text-slate-600 mb-1">
                  Type Filter
                </label>
                <select
                  id="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-slate-50 cursor-pointer"
                >
                  <option value="">All Types</option>
                  {types.map((ty) => (
                    <option key={ty} value={ty}>
                      {ty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count & Clear Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t border-slate-100">
              <span className="text-sm text-slate-600 font-semibold">
                Showing {filteredProblems.length} of {problemStatements.length} problem statements
              </span>

              {isFiltered && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 py-1 px-2.5 hover:bg-orange-50 rounded transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredProblems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProblems.map((problem) => {
                let typeStyle = "bg-slate-100 text-slate-800 border-slate-200";
                if (problem.type === "SOFTWARE") {
                  typeStyle = "bg-emerald-50 text-emerald-800 border-emerald-100";
                } else if (problem.type === "HARDWARE") {
                  typeStyle = "bg-orange-50 text-orange-850 border-orange-100";
                }

                return (
                  <div
                    key={problem.id}
                    className="flex flex-col justify-between bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-150"
                  >
                    <div className="space-y-4">
                      {/* Theme and Type Badge */}
                      <div className="flex justify-between items-start gap-3">
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block truncate max-w-[70%]">
                          {problem.theme}
                        </span>
                        <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded border tracking-wide ${typeStyle} shrink-0`}>
                          {problem.type}
                        </span>
                      </div>

                      {/* Problem Statement Title */}
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {problem.title}
                      </h2>
                    </div>

                    {/* View Details Link */}
                    <div className="pt-6">
                      <Link
                        href={`/problems/${problem.id}`}
                        className="w-full inline-block text-center py-2 px-4 border border-slate-200 hover:border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 shadow-sm space-y-4">
              <p className="text-slate-500 font-medium">No problem statements matched your search or filters.</p>
              <button
                onClick={handleClearFilters}
                className="text-sm font-semibold text-orange-600 hover:text-orange-700 border border-orange-200 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
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
