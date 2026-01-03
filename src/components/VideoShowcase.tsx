import { useEffect, useRef } from "react";

const videoStyles = [
  { title: "Life with dinosaurs", gradient: "from-teal-900 to-emerald-600" },
  { title: "The Story of Julius Caesar", gradient: "from-violet-900 to-purple-600" },
  { title: "Turn images into videos", gradient: "from-cyan-900 to-teal-600" },
  { title: "The story of Cleopatra", gradient: "from-indigo-900 to-blue-600" },
  { title: "Apollo 11 Moon Landing", gradient: "from-slate-900 to-cyan-900" },
  { title: "Japanese Ink Style", gradient: "from-zinc-900 to-violet-800" },
];

const VideoShowcase = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Create unique faceless videos for every niche
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          From Image generation to video generation, StoryShort can generate any style of video in seconds.
        </p>
      </div>

      {/* Scrolling showcase */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {[...videoStyles, ...videoStyles].map((style, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 h-96 rounded-2xl bg-gradient-to-br ${style.gradient} p-6 flex flex-col justify-end card-hover cursor-pointer border border-border/30`}
            >
              <h3 className="text-foreground font-semibold text-lg">{style.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
