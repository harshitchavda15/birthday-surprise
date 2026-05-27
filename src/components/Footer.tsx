import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-pink-100 via-rose-50 to-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
            }}
          >
            {['💖', '✨', '🌸', '💕', '🦋'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl mb-4 animate-heartbeat inline-block">💝</div>
          
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-pink-600 mb-4">
            Happy Birthday, My Everything!
          </h2>

          <p className="text-pink-500 font-caveat text-xl md:text-2xl leading-relaxed mb-6">
            I know things aren't perfect right now, 
            but I want you to know that my love for you is. 
            Let's make this birthday the start of something even more beautiful. 💕
          </p>

          <div className="flex justify-center gap-1 text-4xl mb-6">
            {['🎂', '🎁', '🎈', '🎉', '🥳', '🎊', '💖', '🌟'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 shadow-xl max-w-md mx-auto">
            <p className="text-pink-700 font-bold text-lg">
              Made with 💖, some tears 😢, a lot of coffee ☕, 
              and an overwhelming amount of love for YOU!
            </p>
          </div>

          <p className="mt-6 text-pink-400 text-sm">
            © Forever & Always Yours 💕
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
