import { useState } from "react";
import { PlayCircle, Youtube, Volume2, VolumeX } from "lucide-react";

const previewVideos = [
  {
    id: "1",
    title: "Introduction to Ethical Hacking",
    description: "Learn the fundamentals of ethical hacking and cybersecurity concepts",
    thumbnail: "https://img.youtube.com/vi/U7KiygxTXuQ/hqdefault.jpg",
    videoId: "U7KiygxTXuQ",
    duration: "15:30"
  },
  {
    id: "2", 
    title: "Network Security Basics",
    description: "Understanding network protocols and security vulnerabilities",
    thumbnail: "https://img.youtube.com/vi/p5ZPFHOo1nU/hqdefault.jpg",
    videoId: "p5ZPFHOo1nU",
    duration: "12:45"
  },
  {
    id: "3",
    title: "Penetration Testing Tools",
    description: "Hands-on demonstration of popular penetration testing tools",
    thumbnail: "https://img.youtube.com/vi/izjtoqdMmko/hqdefault.jpg",
    videoId: "izjtoqdMmko",
    duration: "18:20"
  }
];

export default function CoursePreview() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set());

  const togglePlay = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const toggleMute = (videoId: string) => {
    const newMutedVideos = new Set(mutedVideos);
    if (newMutedVideos.has(videoId)) {
      newMutedVideos.delete(videoId);
    } else {
      newMutedVideos.add(videoId);
    }
    setMutedVideos(newMutedVideos);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Course Preview Videos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Watch these sample lessons to get a glimpse of what you'll learn in this comprehensive ethical hacking course
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {previewVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Video Player/Thumbnail */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                {playingVideo === video.id ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&mute=${mutedVideos.has(video.id) ? '1' : '0'}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => toggleMute(video.id)}
                      className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      {mutedVideos.has(video.id) ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => togglePlay(video.id)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      Click to play
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {playingVideo === video.id ? (
                    <button
                      onClick={() => togglePlay(video.id)}
                      className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white font-medium text-sm px-3 py-1.5 rounded transition-colors"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Pause
                    </button>
                  ) : (
                    <button
                      onClick={() => togglePlay(video.id)}
                      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm px-3 py-1.5 rounded transition-colors"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Play Video
                    </button>
                  )}
                  
                  <a
                    href={`https://youtu.be/${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium text-sm transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Ready to start your ethical hacking journey?
          </p>
          <a
            href="/professional-course/order"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
