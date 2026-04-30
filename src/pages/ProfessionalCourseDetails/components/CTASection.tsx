import { Zap, Shield, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courseData } from "../data/courseData";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Start Your Developer Journey?
        </h2>
        <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
          Join {courseData.students.toLocaleString()}+ students who have already transformed their careers with this course.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Zap className="w-5 h-5 text-accent-400" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Shield className="w-5 h-5 text-green-400" />
            <span>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="w-5 h-5 text-primary-300" />
            <span>Lifetime Updates</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/professional-course/order')}
            className="group bg-white hover:bg-slate-100 text-primary-700 font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
          >
            Enroll Now — ${courseData.discountPrice}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-sm text-primary-300">
            <span className="line-through">${courseData.price}</span>
            <span className="text-accent-400 font-semibold ml-2">{courseData.discountPercent}% off</span>
          </div>
        </div>

        <p className="text-xs text-primary-300 mt-6">
          🔒 Secure checkout powered by Bkash or Nagad
        </p>
      </div>
    </section>
  );
}
