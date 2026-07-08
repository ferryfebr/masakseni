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

          {/* Contact List */}
          <div className="space-y-4 pl-2 -mt-0">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/6282292654389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:scale-100 group"
            >
              <img src={iconWa} alt="WhatsApp" className="w-[44px] h-[44px] object-contain inverted-icon flex-shrink-0" />
              <span className="text-white font-medium text-xl md:text-2xl tracking-wide group-hover:text-white transition-colors duration-300">
                082292654389
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/masakseni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:scale-100 group"
            >
              <img src={iconIg} alt="Instagram" className="w-[44px] h-[44px] object-contain inverted-icon flex-shrink-0" />
              <span className="text-white font-medium text-xl md:text-2xl tracking-wide group-hover:text-white transition-colors duration-300">
                @masakseni
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:tempatmasakseni@gmail.com"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:scale-100 group"
            >
              <img src={iconEmail} alt="Email" className="w-[44px] h-[44px] object-contain inverted-icon flex-shrink-0" />
              <span className="text-white font-medium text-xl md:text-2xl tracking-wide break-all group-hover:text-white transition-colors duration-300">
                tempatmasakseni@gmail.com
              </span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;