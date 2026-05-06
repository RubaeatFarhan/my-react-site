import { useNavigate } from "react-router-dom";
import { CalendarDays, Clock, Eye, Lock, Zap, Flame, Video, MonitorPlay, Calendar } from "lucide-react";

export default function CurrentBatch() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Current Batch Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-[2px] shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 animate-pulse"></div>
        <div className="relative bg-white rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Flame className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h3 className="text-sm font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent uppercase tracking-wider">
                  Current Batch
                </h3>
                <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                  🔥 Enrolling Now
                </span>
              </div>
            </div>
          </div>

          {/* Batch Name */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-4 mb-4 border border-primary-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-1.5 rounded-lg">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              [CyberCracker] Hacker Pathway – Level 1
            </h4>
          </div>
          <p className="text-sm text-slate-600 font-semibold">
            Batch 01 | May 2026
          </p>
        </div>

        {/* Batch Details */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2 border border-slate-200">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-1.5 rounded-lg">
              <CalendarDays className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Start Date</p>
              <p className="text-sm font-bold text-slate-900">15 May 2026</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2 border border-slate-200">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">End Date</p>
              <p className="text-sm font-bold text-slate-900">15 Aug 2026</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate('/professional-course/order')}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300"
          >
            <Eye className="w-4 h-4" />
            View Class Routine
          </button>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 bg-slate-100 rounded-lg py-2 px-3 border border-slate-200">
            <Lock className="w-3 h-3" />
            <span>Join batch after enrollment</span>
          </div>
        </div>
        </div>
      </div>

      {/* Course Content Stats */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            <MonitorPlay className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent uppercase tracking-wider">
            Course Content
          </h3>
        </div>

        {/* Archive Classes */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-1.5 rounded-lg">
              <Video className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Archive Classes
            </h4>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-extrabold text-blue-600">60+</span>
            <span className="text-sm text-slate-600 font-medium">Classes</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Clock className="w-3 h-3 text-blue-500" />
            <span>Duration: 20-40 minutes each</span>
          </div>
        </div>

        {/* Mega Live Classes */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-1.5 rounded-lg">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Mega Live Classes
            </h4>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-extrabold text-purple-600">4</span>
            <span className="text-sm text-slate-600 font-medium">Sessions</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MonitorPlay className="w-3 h-3 text-purple-500" />
            <span>Conducted via Zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
}
