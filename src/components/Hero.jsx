import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/hero/gambar-hero1.png';
import gambarHero2 from '../assets/hero/gambar-hero2.png';
import bgVideo from '../assets/hero/bg-hero.mp4';

const Hero = () => {
  const [activeImage, setActiveImage] = useState(1);

  const { scrollY } = useScroll();

  // Parallax: background video/overlay moves slower than scroll
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layer (video + overlay) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Cross-fade Image Container (stays fixed relative to section) */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center w-full h-full px-4">
        <motion.img
          src={heroImg}
          alt="Masakseni Hero 1"
          className="absolute max-w-full max-h-full object-contain mt-25"
          initial={{ opacity: 1 }}
          animate={{ opacity: activeImage === 1 ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        <motion.img
          src={gambarHero2}
          alt="Masakseni Hero 2"
          className="absolute max-w-[50%] max-h-[80%] object-contain mt-25"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeImage === 2 ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default Hero;