import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sorryReasons = [
  { emoji: '🙈', text: "For all the times I was being a total goofball when you needed me to be serious" },
  { emoji: '😅', text: "For winning arguments that I definitely should have let you win" },
  { emoji: '🤦', text: "For forgetting that one thing... and that other thing... okay, a lot of things" },
  { emoji: '😤', text: "For being stubborn like a donkey (a very cute donkey though)" },
  { emoji: '🙃', text: "For all my 'I'm fine' when I clearly wasn't fine" },
  { emoji: '😬', text: "For my terrible sense of timing with jokes" },
  { emoji: '🫠', text: "For melting your patience on a daily basis" },
  { emoji: '🤡', text: "For being a clown when you wanted a prince/princess" },
];

export default function SorrySection() {
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [allRevealed, setAllRevealed] = useState(false);

  const handleReveal = (index: number) => {
    const newSet = new Set(revealedCards);
    newSet.add(index);
    setRevealedCards(newSet);
    if (newSet.size === sorryReasons.length) {
      setAllRevealed(true);
    }
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-pink-600 mb-3">
            I'm Sorry For... 😅
          </h2>
          <p className="text-pink-400 font-caveat text-xl md:text-2xl">
            (Tap each card to reveal my confessions)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sorryReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => handleReveal(index)}
              className="cursor-pointer"
            >
              <div
                className={`rounded-2xl p-5 h-40 flex items-center justify-center text-center transition-all duration-500 shadow-lg hover:shadow-xl ${
                  revealedCards.has(index)
                    ? 'bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-300'
                    : 'bg-white border-2 border-pink-200 hover:border-pink-400'
                }`}
              >
                <AnimatePresence mode="wait">
                  {!revealedCards.has(index) ? (
                    <motion.div
                      key="hidden"
                      exit={{ rotateY: 90, opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-4xl mb-2 animate-wiggle inline-block">🎁</span>
                      <span className="text-pink-400 text-sm font-medium">Tap to reveal!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="revealed"
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-3xl mb-2">{reason.emoji}</span>
                      <p className="text-pink-700 text-sm font-medium leading-snug">
                        {reason.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mt-8 text-center"
            >
              <div className="love-letter rounded-2xl p-6 max-w-lg mx-auto shadow-xl">
                <p className="text-pink-700 font-caveat text-xl md:text-2xl leading-relaxed">
                  You found all my confessions! 😱<br />
                  But here's the biggest one: <br />
                  <span className="text-2xl md:text-3xl font-bold text-pink-600">
                    I'm sorry for making you upset, and I'd do anything to see your smile again 💖
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
