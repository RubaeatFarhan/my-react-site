import { Video, HelpCircle, MonitorPlay } from "lucide-react";

export default function HowToEnroll() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-4">
            <MonitorPlay className="w-4 h-4" />
            Live Classes on Zoom
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            How to Enroll?
          </h2>
          <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
            Follow the step-by-step guide below to enroll in the course. All live classes are conducted via Zoom.
          </p>
        </div>

        {/* Videos Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video 1 - Enrollment Guide */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Video className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Enrollment Guide</h3>
                  <p className="text-xs text-slate-500">Learn how to enroll step by step</p>
                </div>
              </div>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GygxdwZBLDo"
                title="How to Enroll"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video 2 - Still Confused */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">No clear guidance?</h3>
                  <p className="text-xs text-slate-500">Then watch this — detailed walkthrough</p>
                </div>
              </div>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rRfO24ieQKI"
                title="Detailed Enrollment Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Zoom Info */}
        <div className="mt-8 p-5 bg-primary-50 rounded-xl border border-primary-100 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 6.5C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 20 2 18.88 2 17.5v-11zM7 9v6l4.5-3L7 9zm5.5 3L17 15V9l-4.5 3z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-primary-800 text-sm">Live Classes via Zoom</h4>
            <p className="text-xs text-primary-600 mt-1 leading-relaxed">
              All live sessions, doubt-solving classes, and interactive lectures are conducted on Zoom. You'll receive the meeting link after enrollment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
