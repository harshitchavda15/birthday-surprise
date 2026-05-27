import { motion } from 'framer-motion';

const reasons = [
  { emoji: '😊', reason: "Your smile that can light up even my darkest days" },
  { emoji: '🤣', reason: "The way you laugh at my terrible jokes (sometimes)" },
  { emoji: '👀', reason: "Those eyes that can see right through my nonsense" },
  { emoji: '🤗', reason: "Your hugs that make everything feel okay" },
  { emoji: '😤', reason: "Even your angry face is adorable (don't kill me)" },
  { emoji: '🧠', reason: "How smart you are (smarter than me, I admit)" },
  { emoji: '💪', reason: "Your strength in putting up with me daily" },
  { emoji: '🎵', reason: "The way you hum songs when you think no one's listening" },
  { emoji: '🥘', reason: "Your cooking that's better than any restaurant" },
  { emoji: '📱', reason: "Even your 'K.' texts have a special charm 😅" },
  { emoji: '😴', reason: "How cute you look when you fall asleep mid-conversation" },
  { emoji: '❤️', reason: "Everything. Literally everything about you." },
];

export default function LoveReasons() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-rose-50/50 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-purple-600 mb-3">
            12 Reasons Why I Love You 💝
          </h2>
          <p className="text-purple-400 font-caveat text-xl md:text-2xl">
            (Even when you're giving me the silent treatment)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 h-full">
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0 group-hover:animate-bounce">
                    {item.emoji}
                  </span>
                  <div>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold mb-1">
                      {index + 1}
                    </span>
                    <p className="text-purple-700 font-medium text-sm leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
