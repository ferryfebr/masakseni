const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen py-24 px-6 md:px-16 -mb-56">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Lorem Ipsum Text */}
        <div className="mb-16 max-w-[700px] mx-auto">
          <p className="text-white/90 text-xl leading-relaxed mb-6 font-medium text-center">
            Masak Seni adalah layanan jasa yang bergerak di bidang digital & kreatif
            yang bertujuan untuk membantu brand/bisnis yang memiliki keterbatasan
            dalam <strong className="font-bold text-white">membangun estetika, branding</strong>, maupun <strong className="font-bold text-white">promosi dalam dunia digital</strong>. 
          </p>
          <p className="text-white/90 text-xl leading-relaxed font-medium text-center">
              Intinya, Masak Seni menyediakan jasa untuk menghandle segala kebutuhan
              visual seperti desain dan vidio, Masak Seni juga menyediakan jasa layanan
              promosi dalam sosial media brand/bisnis agar dapat lebih dikenal oleh banyak
              orang dengan konsep yang profesional dan efektif.
          </p>
        </div>

        {/* Bottom Section - Center Row Layout */}
        <div className="flex flex-row items-center justify-center gap-0 -mr-[-25px] mt-10 w-full max-w-5xl mx-auto">
          {/* Left Column - Stepped Brutalist ABOUT US Title */}
          <div className="flex flex-col items-end text-right shrink-0 -mr-[30px]">
            <span className="bg-black text-white px-2 py-2 block w-fit rounded-none text-[46px] font-bold uppercase leading-none">
              ABOUT
            </span>
            <span className="bg-black text-white px-2 py-2 block w-fit rounded-none text-[46px] font-bold uppercase leading-none">
              US
            </span>
          </div>

          {/* Right Column - Capsule Stack (Anti-Hancur) */}
          <div className="relative flex flex-col items-center justify-center gap-3 w-[480px] shrink-0">
            <div className="bg-white text-[#666666] py-[12px] px-14 rounded-full text-[23px] font-bold tracking-wide uppercase text-center w-fit">
              CREATIVE ENTHUSIAST
            </div>
            <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white text-[#666666] border-[4px] border-[#666666] rounded-full text-2xl font-bold font-sans top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              &
            </div>
            <div className="bg-white text-[#666666] py-[12px] px-16 rounded-full text-[23px] font-bold tracking-wide uppercase text-center w-fit">
              SOCMED ENTHUSIAST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;