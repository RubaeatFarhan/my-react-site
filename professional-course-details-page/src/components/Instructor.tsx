import { Star, Users, BookOpen, Award } from "lucide-react";
import { courseData } from "../data/courseData";

export default function Instructor() {
  const { instructor } = courseData;

  return (
    <section id="instructor" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
          Meet Your Instructor
        </h2>

        <div className="bg-gradient-to-br from-primary-50 to-slate-50 rounded-2xl p-8 lg:p-10 border border-primary-100">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-28 h-28 rounded-2xl object-cover shadow-lg shadow-primary-200/50 border-4 border-white"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-slate-900">{instructor.name}</h3>
              <p className="text-primary-600 font-medium text-sm mt-1">
                {instructor.title}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
                  <span className="font-semibold">{instructor.rating}</span>
                  <span>Instructor Rating</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <Users className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold">{instructor.students.toLocaleString()}</span>
                  <span>Students</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <BookOpen className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold">{instructor.courses}</span>
                  <span>Courses</span>
                </div>
              </div>

              <p className="text-slate-600 mt-5 leading-relaxed text-sm lg:text-base">
                {instructor.bio}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {["Google", "Meta", "React", "Node.js", "TypeScript", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary-200/50">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Award className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-slate-900">12+</div>
              <div className="text-xs text-slate-500">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-slate-900">185K+</div>
              <div className="text-xs text-slate-500">Students Taught</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Star className="w-6 h-6 text-accent-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-slate-900">4.9</div>
              <div className="text-xs text-slate-500">Avg. Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
