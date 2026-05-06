import { CheckCircle2, Target } from "lucide-react";
import { courseData } from "../data/courseData";

export default function WhatYouWillLearn() {
  return (
    <div className="border border-slate-200 rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            What you'll learn
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {courseData.whatYouWillLearn.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 group"
            >
              <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
