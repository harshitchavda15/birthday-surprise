import { useEffect, useState } from 'react';

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const emojis = ['💖', '🌸', '✨', '🦋', '🌺', '💕', '🎀', '💗', '🌷', '💐', '🎈', '🧁', '🍰', '🎂', '🥳', '🎁', '💝', '🌹'];

export default function FloatingEmojis() {
  const [items, setItems] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const newItems: FloatingEmoji[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 8,
      size: 16 + Math.random() * 24,
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-up"
          style={{
            left: `${item.left}%`,
            bottom: '-50px',
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            animationIterationCount: 'infinite',
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
