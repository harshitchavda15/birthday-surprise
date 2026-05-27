import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingEmojis from './FloatingEmojis';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  targetDate: Date;
  onComplete: () => void;
}

const funnyMessages = [
  "I know you're mad at me... but can you pause being mad for your birthday? 🥺",
  "Even when you're angry, you're the cutest angry person ever 😤💕",
  "Loading your birthday surprise... Please don't uninstall me from your life 😅",
  "Counting down to the day I annoy you with extra love! 🫣",
  "Warning: Excessive cuteness incoming on your birthday! 🚨💖",
  "I may be annoying, but at least I remember your birthday! 😏🎂",
  "Your birthday gift? My promise to be less annoying... for ONE day 😂",
  "Even my countdown timer is scared of your angry face 😱💗",
  "If you're reading this, you haven't blocked me yet! That's progress! 🎉",
  "This website has more effort than my excuses... which says a lot 😬💝",
];

const teaserMessages = [
  "🔒 Something AMAZING is locked behind this countdown...",
  "🎁 Your surprise is worth the wait, I promise!",
  "🎪 The best birthday surprise you've ever seen is loading...",
  "✨ Trust me, you'll forget you were ever upset!",
  "🎭 Spoiler: It involves a lot of hearts and embarrassing messages",
];

export default function CountdownPage({ targetDate, onComplete }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [messageIndex, setMessageIndex] = useState(0);
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        onComplete();
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funnyMessages.length);
    }, 4000);
    const teaserTimer = setInterval(() => {
      setTeaserIndex((prev) => (prev + 1) % teaserMessages.length);
    }, 5000);
    return () => {
      clearInterval(msgTimer);
      clearInterval(teaserTimer);
    };
  }, []);

  const handleImpatientClick = () => {
    setIsShaking(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => setIsShaking(false), 800);
    if (clickCount >= 5) {
      setShowSecret(true);
    }
  };

  const timeBoxVariants = {
    initial: { scale: 0, rotateY: 180 },
    animate: { scale: 1, rotateY: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 15 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex flex-col items-center justify-center relative overflow-hidden font-poppins">
      <FloatingEmojis />

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>

      <motion.div
        className="z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <motion.div
          className="mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-6xl md:text-8xl">🎂</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-dancing font-bold bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent mb-3 animate-gradient bg-[length:200%_200%]">
          Birthday Countdown!
        </h1>

        <p className="text-lg md:text-xl text-pink-600/80 mb-2 font-caveat text-2xl">
          ~ For the most beautiful soul I know ~
        </p>

        {/* Rotating funny messages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="glass-card rounded-2xl p-4 mb-8 mx-auto max-w-lg shadow-lg"
          >
            <p className="text-pink-700 font-medium text-base md:text-lg">
              {funnyMessages[messageIndex]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Countdown boxes */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={timeBoxVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border-2 border-pink-200 animate-pulse-glow">
                <motion.span
                  key={item.value}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-pink-500 to-purple-500 bg-clip-text text-transparent"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>
                <span className="text-xs md:text-sm text-pink-400 font-medium mt-1">
                  {item.label}
                </span>
              </div>
              {i < 3 && (
                <span className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-2xl text-pink-300 animate-bounce">
                  :
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Teaser */}
        <AnimatePresence mode="wait">
          <motion.p
            key={teaserIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-purple-500 font-medium mb-6 text-base md:text-lg"
          >
            {teaserMessages[teaserIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Impatient button */}
        <motion.button
          onClick={handleImpatientClick}
          className={`px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 ${isShaking ? 'animate-shake' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {clickCount === 0 && "Can't wait? Click me! 👆"}
          {clickCount === 1 && "Nope! Still gotta wait 😜"}
          {clickCount === 2 && "Stop clicking! Be patient! 🙄"}
          {clickCount === 3 && "OMG you're SO impatient! 😂"}
          {clickCount === 4 && "One more click won't help... or will it? 🤔"}
          {clickCount >= 5 && "Fine! Here's a tiny secret... 🤫"}
        </motion.button>

        {/* Secret message */}
        <AnimatePresence>
          {showSecret && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="mt-6 p-4 glass-card rounded-2xl shadow-xl max-w-md mx-auto"
            >
              <p className="text-pink-600 font-caveat text-xl md:text-2xl">
                🤫 Psst... No matter what happened between us, you'll always be the most special person in my life. This birthday is going to change everything! 💖
              </p>
              <p className="text-3xl mt-2 animate-heartbeat inline-block">❤️</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lock indicator */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2 text-pink-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl">🔐</span>
          <span className="text-sm font-medium">Full surprise unlocks on the birthday!</span>
          <span className="text-2xl">🔐</span>
        </motion.div>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 30C480 40 600 80 720 85C840 90 960 60 1080 45C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" fill="rgba(252,228,236,0.5)"/>
        </svg>
      </div>
    </div>
  );
}
