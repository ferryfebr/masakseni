import iconWa from '../assets/contact/icon-wa.png';
import iconIg from '../assets/contact/icon-ig.png';
import iconEmail from '../assets/contact/icon-email.png';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen py-24 px-12 md:px-24 flex items-center -mt-[20px]">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col justify-center">
        
        {/* Container Utama - Kiri Aligned */}
        <div className="flex flex-col items-start text-left select-none max-w-2xl">
          
          {/* Brutalist Heading: Dua baris blok hitam bertumpuk */}
          <div className="flex flex-col items-start font-bold tracking-tight mb-14 text-[56px] md:text-[76px] leading-[0.95]">
            <span className="bg-[#1A1A1A] text-white px-2 py-2 block w-fit rounded-none tracking-[2px]">
              Contact
            </span>
            <span className="bg-[#1A1A1A] text-white px-2 py-2 block w-fit rounded-none -mt-[15px] tracking-[2px]">
              Person
            </span>
          </div>

          {/* Contact List - Jarak antar list sedikit disesuaikan agar seimbang dengan logo yang membesar */}
          <div className="space-y-8 pl-2 -mt-5">
            
            {/* WhatsApp */}
            <div className="flex items-center gap-5 group">
              <a
                href="https://wa.me/6282292654389"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              >
                {/* UKURAN BARU: Diperbesar 20% menjadi w-[44px] h-[44px] */}
                <img src={iconWa} alt="WhatsApp" className="w-[44px] h-[44px] object-contain inverted-icon" />
              </a>
              <span className="text-white font-medium text-xl md:text-2xl tracking-wide">
                082292654389
              </span>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-5 group -mt-5">
              <a
                href="https://instagram.com/masakseni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              >
                {/* UKURAN BARU: Diperbesar 20% menjadi w-[44px] h-[44px] */}
                <img src={iconIg} alt="Instagram" className="w-[44px] h-[44px] object-contain inverted-icon" />
              </a>
              <span className="text-white font-medium text-xl md:text-2xl tracking-wide">
                @masakseni
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 group -mt-5">
              <a
                href="mailto:tempatmasakseni@gmail.com"
                className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              >
                {/* UKURAN BARU: Diperbesar 20% menjadi w-[44px] h-[44px] */}
                <img src={iconEmail} alt="Email" className="w-[44px] h-[44px] object-contain inverted-icon" />
              </a>
              <span className="text-white font-medium text-xl md:text-2xl tracking-wide break-all">
                tempatmasakseni@gmail.com
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;