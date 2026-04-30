import { useState } from "react";
import { ChevronDown, PlayCircle, Lock, Clock } from "lucide-react";
import { modules } from "../data/courseData";

function ModuleAccordion({ module, isOpen, onToggle }: {
  module: typeof modules[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const totalDuration = module.lessons.length + " lectures";

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-100 text-primary-700 text-sm font-bold flex-shrink-0">
            {module.id}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900 text-sm lg:text-base truncate">
              {module.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{totalDuration}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 bg-slate-50/50">
          {module.lessons.map((lesson, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3 hover:bg-slate-100/60 transition-colors border-b border-slate-100/60 last:border-0"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                {lesson.isPreview ? (
                  <PlayCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
                <span className={`text-sm truncate ${lesson.isPreview ? "text-primary-600 font-medium" : "text-slate-600"}`}>
                  {lesson.title}
                </span>
                {lesson.isPreview && (
                  <span className="text-[10px] font-semibold text-primary-600 bg-primary-100 px-1.5 py-0.5 rounded flex-shrink-0">
                    PREVIEW
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0 ml-3">
                <Clock className="w-3 h-3" />
                <span>{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [openModules, setOpenModules] = useState<number[]>([1]);
  const [showAll, setShowAll] = useState(false);

  const toggleModule = (id: number) => {
    setOpenModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const displayedModules = showAll ? modules : modules.slice(0, 5);
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <section id="curriculum" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Course Curriculum
          </h2>
          <p className="text-slate-500">
            {modules.length} modules • {totalLessons} lessons • 63.5 hours total length
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={() =>
              setOpenModules(
                openModules.length === modules.length ? [] : modules.map((m) => m.id)
              )
            }
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            {openModules.length === modules.length ? "Collapse all" : "Expand all"}
          </button>
        </div>

        <div className="space-y-3">
          {displayedModules.map((module) => (
            <ModuleAccordion
              key={module.id}
              module={module}
              isOpen={openModules.includes(module.id)}
              onToggle={() => toggleModule(module.id)}
            />
          ))}
        </div>

        {!showAll && modules.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 border border-primary-200 hover:border-primary-300 px-6 py-2.5 rounded-lg hover:bg-primary-50 transition-all"
            >
              Show {modules.length - 5} more modules
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
