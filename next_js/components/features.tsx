'use client';

import { Briefcase ,CheckCircle2,TrendingUp } from "lucide-react";

export default function Features() {
    return (
         <section className="w-full border-t border-white/10 bg-gray-900 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything You Need to Stay Organized
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                Manage your job applications, track your progress, and stay focused
                throughout your job search.
              </p>
            </div>
        
            <div className="grid gap-6 md:grid-cols-3">
              <div className="group rounded-2xl border border-white/10 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-gray-800/80">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                </div>
        
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Organize Applications
                </h3>
        
                <p className="text-sm leading-7 text-gray-400">
                  Create custom boards and columns to track your job applications
                  at every stage of the process.
                </p>
              </div>
        
              <div className="group rounded-2xl border border-white/10 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-gray-800/80">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10">
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                </div>
        
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Track Progress
                </h3>
        
                <p className="text-sm leading-7 text-gray-400">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>
        
              <div className="group rounded-2xl border border-white/10 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-gray-800/80">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
        
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Stay Organized
                </h3>
        
                <p className="text-sm leading-7 text-gray-400">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}