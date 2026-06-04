import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wishes = [
  "May this year bring you everything your beautiful heart deserves 💖",
  "I wish for your happiness to multiply like my mistakes 😅💕",
  "May all your dreams come true (especially the ones about me being less annoying) 🌟",
  "Wishing you 365 days of no arguments... okay, maybe 360 is more realistic 😂",
  "May your birthday cake be as sweet as you are (impossible, but we'll try) 🎂",
  "I wish you infinite patience (especially when dealing with my silly jokes!) 🙏😄",
  "I will always be grateful that you are a part of my life ✨",
  "May this birthday remind you how incredibly loved you are 💝",
];

export default function BirthdayWishes() {
  const [activeWish, setActiveWish] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveWish((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50/50 via-pink-50/50 to-rose-50/50 relative">
      {/* Candle decorations */}
      <div className="absolute top-4 left-1/4 text-4xl animate-float" style={{ animationDelay: '0s' }}>🕯️</div>
      <div className="absolute top-8 right-1/4 text-3xl animate-float" style={{ animationDelay: '1s' }}>🕯️</div>
      <div className="absolute top-12 left-1/3 text-2xl animate-float" style={{ animationDelay: '2s' }}>✨</div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="text-6xl md:text-8xl mb-4 animate-cake-bounce inline-block">🎂</div>
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-amber-600 mb-3">
            Birthday Wishes For You 🌟
          </h2>
          <p className="text-amber-500 font-caveat text-xl md:text-2xl">
            (Each one comes straight from my chaotic heart)
          </p>
        </motion.div>

        {/* Wish carousel */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWish}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.6, type: 'spring' as const }}
              className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl border-2 border-amber-200"
            >
              <div className="text-4xl mb-4">🌈</div>
              <p className="text-xl md:text-2xl text-amber-700 font-medium leading-relaxed font-caveat">
                {wishes[activeWish]}
              </p>
              <div className="mt-4 text-amber-400 text-sm">
                Wish {activeWish + 1} of {wishes.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {wishes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveWish(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeWish
                  ? 'bg-amber-500 scale-125 shadow-md'
                  : 'bg-amber-200 hover:bg-amber-300'
              }`}
            />
          ))}
        </div>

        {!isAutoPlaying && (
          <button
            onClick={() => setIsAutoPlaying(true)}
            className="mt-3 text-amber-500 text-sm hover:text-amber-600 transition-colors"
          >
            ▶ Resume autoplay
          </button>
        )}
      </div>
    </section>
  );
}
