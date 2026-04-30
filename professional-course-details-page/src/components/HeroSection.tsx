import { Star, Users, Clock, PlayCircle, Globe, BarChart3, Award } from "lucide-react";
import { courseData } from "../data/courseData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "text-accent-400 fill-accent-400"
              : star - 0.5 <= rating
              ? "text-accent-400 fill-accent-400"
              : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900" />
      <div className="absolute inset-0 bg-[url('/images/course-hero.jpg')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-400/20 text-accent-400 border border-accent-400/30">
                <BarChart3 className="w-3 h-3" />
                BESTSELLER
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-400/20 text-green-400 border border-green-400/30">
                <Clock className="w-3 h-3" />
                Updated {courseData.lastUpdated}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {courseData.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {courseData.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent-400 font-bold text-base">{courseData.rating}</span>
                <StarRating rating={courseData.rating} />
                <span className="text-slate-400">({courseData.totalRatings.toLocaleString()} ratings)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-4 h-4" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                <span>{courseData.language}</span>
              </div>
              <span>•</span>
              <span>Subtitles: {courseData.subtitles.join(", ")}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <img
                src={courseData.instructor.avatar}
                alt={courseData.instructor.name}
                className="w-10 h-10 rounded-full border-2 border-primary-400 object-cover"
              />
              <div>
                <p className="text-sm text-slate-300">
                  Created by{" "}
                  <a href="#instructor" className="text-primary-400 hover:text-primary-300 font-medium underline underline-offset-2">
                    {courseData.instructor.name}
                  </a>
                </p>
                <p className="text-xs text-slate-500">{courseData.instructor.title}</p>
              </div>
            </div>
          </div>

          {/* Right - Price Card */}
          <div className="lg:col-span-2 animate-fade-in-up delay-200">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Video Preview */}
              <div className="relative group cursor-pointer">
                <img
                  src={courseData.heroImage}
                  alt="Course Preview"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-primary-600 fill-primary-600" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
                  Preview this course
                </div>
              </div>

              {/* Price */}
              <div className="p-6 space-y-4">
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${courseData.discountPrice}
                  </span>
                  <span className="text-lg text-slate-400 line-through mb-1">
                    ${courseData.price}
                  </span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded mb-1">
                    {courseData.discountPercent}% off
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
                  <Clock className="w-4 h-4" />
                  <span>2 days left at this price!</span>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300 transition-all animate-pulse-glow">
                  Enroll Now
                </button>

                <button className="w-full border-2 border-slate-200 hover:border-primary-300 text-slate-700 font-semibold py-3 rounded-xl hover:bg-primary-50 transition-all">
                  Add to Wishlist
                </button>

                <p className="text-center text-xs text-slate-500">
                  30-Day Money-Back Guarantee
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <h4 className="font-semibold text-sm text-slate-900">This course includes:</h4>
                  {courseData.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Award className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
