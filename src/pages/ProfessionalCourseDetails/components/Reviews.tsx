import { Star, ThumbsUp } from "lucide-react";
import { reviews, courseData } from "../data/courseData";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= rating ? "text-accent-400 fill-accent-400" : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

function RatingBar({ stars, percent }: { stars: number; percent: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500 w-12">{stars} star</span>
      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-400 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs text-slate-500 w-10 text-right">{percent}%</span>
    </div>
  );
}

export default function Reviews() {
  const ratingDistribution = [
    { stars: 5, percent: 72 },
    { stars: 4, percent: 18 },
    { stars: 3, percent: 7 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 1 },
  ];

  return (
    <section id="reviews" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
          Student Reviews
        </h2>

        {/* Rating Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center flex-shrink-0">
              <div className="text-5xl font-extrabold text-slate-900">{courseData.rating}</div>
              <div className="flex items-center justify-center gap-0.5 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-accent-400 fill-accent-400" />
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-1">
                {courseData.totalRatings.toLocaleString()} ratings
              </p>
            </div>
            <div className="flex-1 w-full space-y-2">
              {ratingDistribution.map((r) => (
                <RatingBar key={r.stars} stars={r.stars} percent={r.percent} />
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-200 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 text-sm truncate">{review.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{review.role}</p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">{review.date}</span>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-4">
                {review.comment}
              </p>

              <button className="flex items-center gap-1.5 mt-4 text-xs text-slate-400 hover:text-primary-600 transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" />
                Helpful
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 border border-primary-200 hover:border-primary-300 px-6 py-2.5 rounded-lg hover:bg-primary-50 transition-all">
            See all {courseData.totalRatings.toLocaleString()} reviews
          </button>
        </div>
      </div>
    </section>
  );
}
