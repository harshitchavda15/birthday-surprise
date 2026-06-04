import { motion } from 'framer-motion';
import img1 from '../../1.png';
import img2 from '../../2.png';
import img3 from '../../3.png';
import img4 from '../../4.png';
import img5 from '../../5.png';

const timelineEvents = [
  {
    emoji: "🌅",
    title: "The Beginning",
    description: "When we first met, I had no idea you'd become the most important person in my life. But here we are! 💫",
    mood: "from-pink-100 to-rose-100",
    border: "border-pink-300",
    image: img1,
  },
  {
    emoji: "😂",
    title: "The Funny Times",
    description: "Remember all those inside jokes? The ones that made us laugh until our stomachs hurt? I miss those moments! 🤣",
    mood: "from-amber-100 to-yellow-100",
    border: "border-amber-300",
    image: img2,
  },
  {
    emoji: "🥰",
    title: "The Sweet Times",
    description: "The late-night talks, the random 'I love you' texts, the surprise dates... those were pure magic! ✨",
    mood: "from-purple-100 to-indigo-100",
    border: "border-purple-300",
    image: img3,
  },
  {
    emoji: "⛈️",
    title: "The Challenges",
    description: "Every journey has its ups and downs, and we've had our share of complicated moments. But I'll always value what we've shared. 🌸",
    mood: "from-gray-100 to-blue-100",
    border: "border-blue-300",
    image: img4,
  },
  {
    emoji: "🌈",
    title: "The Future ✨",
    description: "No matter what the future holds, I hope it brings you beautiful memories, genuine happiness, exciting adventures, and everything your heart deserves. 🌈",
    mood: "from-green-100 to-emerald-100",
    border: "border-emerald-300",
    image: img5,
  },
];

export default function PhotoTimeline() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white/50 to-pink-50/50 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-dancing font-bold text-pink-600 mb-3">
            Our Love Story 📖
          </h2>
          <p className="text-pink-400 font-caveat text-xl md:text-2xl">
            (A timeline of us — the good, the bad, and the adorable)
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-emerald-300 md:-translate-x-0.5"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-pink-400 rounded-full -translate-x-2 md:-translate-x-2 z-10 shadow-md"></div>

              {/* Card */}
              <div className={`ml-14 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-1/2' : 'md:ml-auto md:pl-12 md:w-1/2'}`}>
                <div className={`bg-gradient-to-br ${event.mood} rounded-2xl overflow-hidden shadow-lg border-2 ${event.border} hover:shadow-xl transition-shadow duration-300`}>
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <span className="text-4xl block mb-2">{event.emoji}</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
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
