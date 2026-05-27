import { useState, useCallback, useEffect } from 'react';
import CountdownPage from './components/CountdownPage';
import BirthdayPage from './components/BirthdayPage';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  // Birthday: June 22 of current year (or next year if already passed)
  const getBirthdayDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const birthday = new Date(year, 5, 22, 0, 0, 0); // June 22 (month is 0-indexed)
    
    // If birthday already passed this year, use next year
    if (now > birthday) {
      // Birthday has passed, show the birthday page!
      return null;
    }
    return birthday;
  };

  const [birthdayDate] = useState(getBirthdayDate);
  const [isCountdownComplete, setIsCountdownComplete] = useState(birthdayDate === null);
  const [showTransition, setShowTransition] = useState(false);

  const handleCountdownComplete = useCallback(() => {
    setShowTransition(true);
    setTimeout(() => {
      setIsCountdownComplete(true);
      setShowTransition(false);
    }, 2000);
  }, []);

  // Check for dev/demo mode - press 'B' key 3 times to bypass countdown
  const [, setKeyPresses] = useState(0);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'b') {
        setKeyPresses((prev) => {
          const next = prev + 1;
          if (next >= 3) {
            handleCountdownComplete();
            return 0;
          }
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleCountdownComplete]);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {/* Transition animation */}
        {showTransition && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 1.5, times: [0, 0.6, 1] }}
              className="text-center"
            >
              <span className="text-8xl md:text-[150px] block">🎂</span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl font-dancing font-bold text-pink-600 mt-4"
              >
                It's Your Birthday! 🎉
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-pink-400 mt-2 text-lg font-caveat"
              >
                Let the celebration begin...
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {/* Main content */}
        {!showTransition && !isCountdownComplete && birthdayDate && (
          <motion.div
            key="countdown"
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <CountdownPage
              targetDate={birthdayDate}
              onComplete={handleCountdownComplete}
            />
          </motion.div>
        )}

        {!showTransition && isCountdownComplete && (
          <motion.div
            key="birthday"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <BirthdayPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
