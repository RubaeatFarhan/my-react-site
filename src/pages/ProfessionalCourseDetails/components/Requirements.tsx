import { AlertCircle } from "lucide-react";
import { courseData } from "../data/courseData";

export default function Requirements() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Requirements */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">Requirements</h2>
            <ul className="space-y-3">
              {courseData.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">Description</h2>
            <div className="space-y-4">
              {courseData.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-primary-700">
                <span className="font-semibold">Note:</span> This course is updated regularly to keep up with the latest industry trends and framework changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
