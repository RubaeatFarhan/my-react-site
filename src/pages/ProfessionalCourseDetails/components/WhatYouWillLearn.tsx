import { CheckCircle2 } from "lucide-react";
import { courseData } from "../data/courseData";

export default function WhatYouWillLearn() {
  return (
    <section id="overview" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50/50">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
            What you'll learn
          </h2>
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
    </section>
  );
}
