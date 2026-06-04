import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import heroBg from '../../6.png';

export default function HeroSection() {
  const launchConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#ff1493', '#dda0dd', '#ffd700'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#ff1493', '#dda0dd', '#ffd700'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  useEffect(() => {
    const timer = setTimeout(launchConfetti, 500);
    return () => clearTimeout(timer);
  }, [launchConfetti]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4" style={{ background: `linear-gradient(135deg, rgba(253,242,248,0.92), rgba(252,231,243,0.88), rgba(243,232,255,0.92)), url(${heroBg}) center/cover no-repeat` }}>
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {['✨', '🌸', '💖', '🎀', '🦋', '🌺'][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Soft gradient circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-rose-200/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <motion.div
        className="text-center z-10 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Birthday emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring' as const, stiffness: 200, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-7xl md:text-9xl inline-block animate-tada">🎂</span>
        </motion.div>

        {/* Surprise text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm md:text-base font-bold mb-4 shadow-lg">
            🎉 SURPRISE! 🎉
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-8xl font-dancing font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Happy Birthday
          </span>
          <br />
          <span className="text-4xl md:text-6xl text-pink-400">My Love!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-pink-500/80 font-caveat mb-6 max-w-2xl mx-auto"
        >
          I know things have been a bit complicated lately, but I still wanted to make you something special. 
          <br />I hope this brings a smile to your face today! 😏💕
        </motion.p>

        {/* Hearts animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, type: 'spring' as const }}
          className="flex justify-center gap-2 mb-8"
        >
          {['💖', '💗', '💕', '💝', '💓'].map((heart, i) => (
            <motion.span
              key={i}
              className="text-3xl md:text-5xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-pink-400"
          >
            <p className="text-sm font-medium mb-2">Scroll down for surprises! 👇</p>
            <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-pink-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
