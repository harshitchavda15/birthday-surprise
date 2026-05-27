import FloatingEmojis from './FloatingEmojis';
import HeroSection from './HeroSection';
import SorrySection from './SorrySection';
import LoveReasons from './LoveReasons';
import FunnyMemes from './FunnyMemes';
import PhotoTimeline from './PhotoTimeline';
import BirthdayWishes from './BirthdayWishes';
import LoveLetter from './LoveLetter';
import PromiseSection from './PromiseSection';
import InteractiveGame from './InteractiveGame';
import MusicPlayer from './MusicPlayer';
import ConfettiButton from './ConfettiButton';
import Footer from './Footer';

export default function BirthdayPage() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen relative font-poppins">
      <FloatingEmojis />

      {/* Navigation dots */}
      <nav className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
        {['hero', 'sorry', 'reasons', 'memes', 'timeline', 'wishes', 'letter', 'promises', 'game', 'music'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="w-3 h-3 rounded-full bg-pink-300/50 hover:bg-pink-500 transition-all duration-300 hover:scale-150 block"
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          />
        ))}
      </nav>

      <div id="hero">
        <HeroSection />
      </div>

      {/* Divider */}
      <div className="flex justify-center py-4">
        <div className="flex gap-2 text-2xl">
          {['🌸', '✨', '🌸', '✨', '🌸'].map((e, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
          ))}
        </div>
      </div>

      <div id="sorry">
        <SorrySection />
      </div>

      <div className="flex justify-center py-4">
        <div className="flex gap-2 text-2xl">
          {['💕', '🎀', '💕', '🎀', '💕'].map((e, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
          ))}
        </div>
      </div>

      <div id="reasons">
        <LoveReasons />
      </div>

      <ConfettiButton />

      <div id="memes">
        <FunnyMemes />
      </div>

      <div className="flex justify-center py-4">
        <div className="flex gap-2 text-2xl">
          {['🌺', '🦋', '🌺', '🦋', '🌺'].map((e, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
          ))}
        </div>
      </div>

      <div id="timeline">
        <PhotoTimeline />
      </div>

      <div id="wishes">
        <BirthdayWishes />
      </div>

      <div className="flex justify-center py-4">
        <div className="flex gap-2 text-2xl">
          {['💝', '🌟', '💝', '🌟', '💝'].map((e, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
          ))}
        </div>
      </div>

      <div id="letter">
        <LoveLetter />
      </div>

      <div id="promises">
        <PromiseSection />
      </div>

      <ConfettiButton />

      <div id="game">
        <InteractiveGame />
      </div>

      <div id="music">
        <MusicPlayer />
      </div>

      <Footer />
    </div>
  );
}
