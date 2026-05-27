import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const playlist = [
  { title: "Can't Help Falling In Love", artist: "Elvis Presley", emoji: "🎵" },
  { title: "Perfect", artist: "Ed Sheeran", emoji: "🎶" },
  { title: "All Of Me", artist: "John Legend", emoji: "💿" },
  { title: "A Thousand Years", artist: "Christina Perri", emoji: "🎵" },
  { title: "Just The Way You Are", artist: "Bruno Mars", emoji: "🎶" },
  { title: "I'm Yours", artist: "Jason Mraz", emoji: "💿" },
];

export default function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl font-dancing font-bold text-pink-600 mb-2">
            Songs That Remind Me Of You 🎵
          </h2>
          <p className="text-pink-400 font-caveat text-lg md:text-xl">
            (Our unofficial playlist)
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-pink-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Player header */}
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-4 text-white text-center">
            <div className="text-3xl mb-1 animate-float inline-block">🎧</div>
            <p className="font-bold">Our Love Playlist</p>
            <p className="text-xs text-white/80">{playlist.length} songs of us</p>
          </div>

          {/* Song list */}
          <div className="divide-y divide-pink-100">
            {playlist.slice(0, isExpanded ? playlist.length : 3).map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 hover:bg-pink-50 transition-colors cursor-pointer group"
              >
                <span className="text-xl group-hover:animate-bounce">{song.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm truncate">{song.title}</p>
                  <p className="text-gray-500 text-xs truncate">{song.artist}</p>
                </div>
                <span className="text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  💕
                </span>
              </motion.div>
            ))}
          </div>

          {/* Expand/collapse */}
          <AnimatePresence>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full py-3 text-pink-500 text-sm font-medium hover:bg-pink-50 transition-colors"
            >
              {isExpanded ? 'Show less ↑' : `Show all ${playlist.length} songs ↓`}
            </motion.button>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
