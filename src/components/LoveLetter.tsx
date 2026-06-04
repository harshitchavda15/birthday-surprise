import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-pink-600 mb-3">
            A Letter For You 💌
          </h2>
          <p className="text-pink-400 font-caveat text-xl md:text-2xl">
            (Warning: May contain excessive mushiness)
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-12 shadow-xl border-2 border-pink-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400"></div>
                  <span className="text-7xl md:text-9xl block mb-4">💌</span>
                  <p className="text-pink-600 font-bold text-lg">Click to open your letter!</p>
                  <p className="text-pink-400 text-sm mt-1">I promise it won't bite 😉</p>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-3xl mt-3"
                  >
                    👆
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="love-letter rounded-3xl p-8 md:p-12 shadow-2xl text-left relative">
                {/* Stamp */}
                <div className="absolute top-4 right-4 text-4xl rotate-12">💖</div>

                <p className="text-pink-800 font-caveat text-xl md:text-2xl leading-relaxed space-y-4">
                  <span className="block text-2xl md:text-3xl font-bold text-pink-600 mb-4">
                    To My Favorite Person,
                  </span>

                  <span className="block">
                    Happy Birthday to the most amazing, most beautiful, most patient (you'd need to be, to deal with my silly side 😅) person in the world!
                  </span>

                  <span className="block">
                    I know things have been a bit complicated lately. I know I can be difficult sometimes, and I've made my share of mistakes. But I want you to know that through all the ups and downs, you're someone who is always on my mind and in my heart. 💭
                  </span>

                  <span className="block">
                    You make my world brighter just by existing in it. Your laugh is my favorite song. Your smile is my favorite view. And your witty, funny replies? Well... they always make my day 😂
                  </span>

                  <span className="block">
                    You bring so much light and laughter into my life, from your quick wit to your hilarious sense of humor. I appreciate all the quirks and moments that make you who you are, and I'm so grateful for the warmth you've brought into my world.
                  </span>

                  <span className="block">
                    So on this special day, I want you to know: I may not be perfect, but every moment we've shared has meant something real to me. 🌟
                  </span>

                  <span className="block text-xl md:text-2xl font-bold text-pink-600 mt-6">
                    I hope you know how much you are valued and cared for. Happy Birthday! 🎂💕
                  </span>

                  <span className="block text-right text-pink-500 mt-4 text-xl">
                    — With Love, Always 💖
                  </span>
                </p>

                {/* Decorative hearts */}
                <div className="absolute -bottom-3 -left-3 text-3xl animate-heartbeat">💗</div>
                <div className="absolute -bottom-3 -right-3 text-3xl animate-heartbeat" style={{ animationDelay: '0.5s' }}>💗</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
