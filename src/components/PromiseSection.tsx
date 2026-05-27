import { useState } from 'react';
import { motion } from 'framer-motion';

const promises = [
  { icon: '🤐', text: "I promise to actually LISTEN (not just nod and zone out)", checked: false },
  { icon: '🧹', text: "I promise to pick up after myself (at least 80% of the time)", checked: false },
  { icon: '📱', text: "I promise to reply to texts within 5 minutes (okay, 15... fine, 30 max)", checked: false },
  { icon: '🍕', text: "I promise to let YOU pick the restaurant without saying 'I don't care'", checked: false },
  { icon: '🎬', text: "I promise to watch your favorite shows without complaining", checked: false },
  { icon: '🫂', text: "I promise more hugs, fewer arguments", checked: false },
  { icon: '🗓️', text: "I promise to remember ALL important dates (added to 3 calendars!)", checked: false },
  { icon: '👑', text: "I promise to treat you like the royalty you are — EVERY day", checked: false },
];

export default function PromiseSection() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (index: number) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setCheckedItems(newSet);
  };

  const allChecked = checkedItems.size === promises.length;

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-emerald-600 mb-3">
            My Promises To You 🤞
          </h2>
          <p className="text-emerald-400 font-caveat text-xl md:text-2xl">
            (Legally binding... probably... maybe... okay not really 😅)
          </p>
        </motion.div>

        <div className="space-y-3">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => toggleCheck(index)}
              className="cursor-pointer"
            >
              <div
                className={`flex items-center gap-4 p-4 rounded-2xl shadow-md transition-all duration-300 border-2 ${
                  checkedItems.has(index)
                    ? 'bg-emerald-50 border-emerald-300 shadow-emerald-100'
                    : 'bg-white border-emerald-100 hover:border-emerald-200'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    checkedItems.has(index)
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'border-emerald-300'
                  }`}
                >
                  {checkedItems.has(index) && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-sm"
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
                <span className="text-2xl flex-shrink-0">{promise.icon}</span>
                <p
                  className={`text-sm md:text-base font-medium transition-all duration-300 ${
                    checkedItems.has(index) ? 'text-emerald-700' : 'text-gray-600'
                  }`}
                >
                  {promise.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {allChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' as const, stiffness: 200 }}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl p-6 shadow-xl border-2 border-emerald-300">
              <span className="text-5xl block mb-3">🎉</span>
              <p className="text-emerald-700 font-bold text-lg md:text-xl">
                You checked all my promises! That means you believe in us! 💚
              </p>
              <p className="text-emerald-500 font-caveat text-lg mt-2">
                And I promise to try my very best to keep each one! 🌟
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
