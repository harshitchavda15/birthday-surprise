import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: "How are you feeling about your birthday today? 🎉",
    options: [
      { text: "Super excited! 🥳", response: "Yes! That's the energy we need! Let's celebrate! 🎈✨" },
      { text: "Just want the cake 🎂", response: "Priorities! I respect that. Save a slice for me... or don't, I understand 😂" },
      { text: "Can I sleep all day? 😴", response: "Honestly, the best birthday gift is a long nap. No judgment here! 🛌💤" },
    ],
  },
  {
    question: "What is your absolute favorite way to celebrate? 🎈",
    options: [
      { text: "A quiet day to myself 🧘", response: "Peace and quiet is the ultimate luxury. I hope you get exactly that! 🌸" },
      { text: "Partying with friends 🥳", response: "Woohoo! Go make some amazing memories and have the best time! 💃🕺" },
      { text: "Eating delicious food 🍕", response: "A person after my own heart! Calories don't count on birthdays! 🍔🍰" },
    ],
  },
  {
    question: "Rate my effort on this birthday website:",
    options: [
      { text: "Meh, 3/10 💅", response: "WHAT?! I spent hours debugging this! At least give me a 7 for my coding skills! 😂💻" },
      { text: "Okay fine, 7/10 👌", response: "I'll take it! The remaining 3 points I'll earn back with birthday cake! 🎂" },
      { text: "11/10, master coder! 😍", response: "YESSSS! *does happy dance* 💃🕺 Thank you! I'm so glad you like it! 🎉" },
    ],
  },
  {
    question: "What should we eat if we stop fighting for one day? 😂",
    options: [
      { text: "Pizza 🍕", response: "Excellent choice! Extra cheese represents extra peace, right? 🍕😋" },
      { text: "Ice Cream 🍨", response: "Sweet and cold—just like the peace treaty we both deserve today! 🍦✨" },
      { text: "Both 😤", response: "Now that is the level of ambition I respect! Double the treats, zero the drama! 🍕🍨🎉" },
    ],
  },
];

export default function InteractiveGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const spawnHearts = useCallback(() => {
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 2000);
  }, []);

  const handleSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowResponse(true);
    spawnHearts();
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelectedOption(null);
      setShowResponse(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Floating hearts on selection */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, scale: 0, x: `${heart.x}%`, y: `${heart.y}%` }}
          animate={{ opacity: 0, scale: 2, y: '-100px' }}
          transition={{ duration: 1.5 }}
          className="absolute text-2xl pointer-events-none z-20"
        >
          💖
        </motion.div>
      ))}

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-indigo-500 mb-3">
            Let's Play a Game! 🎮
          </h2>
          <p className="text-indigo-400 font-caveat text-xl md:text-2xl">
            (No wrong answers... but some are more right than others 😏)
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border-2 border-indigo-100"
            >
              {/* Progress */}
              <div className="flex gap-1 mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full flex-1 transition-all duration-500 ${
                      i <= currentQ ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-indigo-100'
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6 text-center">
                {questions[currentQ].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQ].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(index)}
                    disabled={showResponse}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 font-medium ${
                      selectedOption === index
                        ? 'bg-indigo-100 border-indigo-400 text-indigo-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
                    } ${showResponse && selectedOption !== index ? 'opacity-50' : ''}`}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showResponse && selectedOption !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200"
                  >
                    <p className="text-indigo-700 font-medium text-center">
                      {questions[currentQ].options[selectedOption].response}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="mt-4 mx-auto block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                      {currentQ < questions.length - 1 ? 'Next Question →' : 'See Final Message! 🎉'}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring' as const, stiffness: 200 }}
              className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-indigo-200 text-center"
            >
              <span className="text-6xl block mb-4">🏆</span>
              <h3 className="text-2xl md:text-3xl font-dancing font-bold text-indigo-600 mb-4">
                Game Complete!
              </h3>
              <p className="text-lg text-indigo-700 font-medium leading-relaxed">
                No matter what you chose, I hope you know:
              </p>
              <p className="text-2xl md:text-3xl font-bold text-pink-600 mt-4 font-dancing animate-heartbeat inline-block">
                You are incredibly appreciated! 💕
              </p>
              <p className="text-indigo-500 mt-4 font-caveat text-xl">
                I hope your day is filled with everything that makes you smile. 🌟
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
