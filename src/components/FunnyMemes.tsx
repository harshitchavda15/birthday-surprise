import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memes = [
  {
    setup: "Us right now:",
    punchline: "Me: *exists*\nYou: And I took that personally 😤",
    emoji: "🎭"
  },
  {
    setup: "My brain at 3 AM:",
    punchline: "\"Remember that dumb thing you said 3 weeks ago that made them upset? Yeah, let's replay that 500 times.\" 🧠💀",
    emoji: "🌙"
  },
  {
    setup: "Relationship Status:",
    punchline: "It's complicated... but I still saved you a piece of cake 🎂",
    emoji: "💑"
  },
  {
    setup: "When you say 'I'm fine':",
    punchline: "Translation: You have approximately 3.7 seconds to figure out what you did wrong 💀",
    emoji: "🚨"
  },
  {
    setup: "Our fights be like:",
    punchline: "Round 1: 😡😡\nRound 2: 😤😤\nRound 3: 😤...🥺\nRound 4: 🫂💕",
    emoji: "🥊"
  },
  {
    setup: "Me making this website at 2 AM:",
    punchline: "Sleep: Am I a joke to you?\nMe: Yes, because my partner's happiness > sleep 💻❤️",
    emoji: "👨‍💻"
  },
];

export default function FunnyMemes() {
  const [currentMeme, setCurrentMeme] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextMeme = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length);
    }, 200);
  };

  const prevMeme = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentMeme((prev) => (prev - 1 + memes.length) % memes.length);
    }, 200);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Fun background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            😂
          </span>
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-rose-500 mb-3">
            Our Relationship in Memes 😂
          </h2>
          <p className="text-rose-400 font-caveat text-xl md:text-2xl">
            (Because if we can't laugh about it, what's the point?)
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMeme}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-rose-200 min-h-[250px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Card number */}
                <div className="absolute top-3 right-3 bg-rose-100 text-rose-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {currentMeme + 1}/{memes.length}
                </div>

                <span className="text-5xl mb-4">{memes[currentMeme].emoji}</span>

                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="setup"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-rose-600 mb-3">
                        {memes[currentMeme].setup}
                      </h3>
                      <p className="text-rose-400 text-sm animate-bounce">
                        👆 Tap to reveal 👆
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="punchline"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <p className="text-lg md:text-xl text-rose-700 font-medium whitespace-pre-line leading-relaxed">
                        {memes[currentMeme].punchline}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevMeme}
              className="w-12 h-12 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 flex items-center justify-center text-xl font-bold transition-colors shadow-md"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextMeme}
              className="w-12 h-12 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 flex items-center justify-center text-xl font-bold transition-colors shadow-md"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
