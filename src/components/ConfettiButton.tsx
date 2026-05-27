import { useCallback } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export default function ConfettiButton() {
  const fireConfetti = useCallback(() => {
    // Big burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#db7093', '#c71585', '#ffc0cb', '#dda0dd', '#ba55d3'],
    });

    // Side cannons
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#ffd700', '#ff6347', '#dda0dd'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#ffd700', '#ff6347', '#dda0dd'],
      });
    }, 200);

    // Stars
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.3 },
        shapes: ['star'],
        colors: ['#ffd700', '#ffb347', '#ff69b4'],
      });
    }, 500);
  }, []);

  return (
    <section className="py-12 px-4 text-center">
      <motion.button
        onClick={fireConfetti}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white text-xl font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse-glow"
      >
        🎉 Click For Birthday Confetti! 🎊
      </motion.button>
      <p className="text-pink-400 mt-3 text-sm font-caveat text-lg">(Click it! You know you want to! 😄)</p>
    </section>
  );
}
