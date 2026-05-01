const courseNavLinks = [
  { label: "Overview", anchor: "#overview" },
  { label: "Curriculum", anchor: "#curriculum" },
  { label: "Instructor", anchor: "#instructor" },
  { label: "Reviews", anchor: "#reviews" },
  { label: "FAQ", anchor: "#faq" },
];

export default function CourseSubNav() {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center h-11">
          <div className="flex items-center gap-6">
            {courseNavLinks.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
