import { useState } from 'react';
import client0 from '../assets/client/0.png';
import client1 from '../assets/client/1.png';
import client2 from '../assets/client/2.png';
import client3 from '../assets/client/3.png';
import client4 from '../assets/client/4.png';
import client5 from '../assets/client/5.png';
import client6 from '../assets/client/6.png';
import client7 from '../assets/client/7.png';
import client8 from '../assets/client/8.png';
import client9 from '../assets/client/9.png';
import client10 from '../assets/client/10.png';
import client11 from '../assets/client/11.png';
import client12 from '../assets/client/12.png';
import client13 from '../assets/client/13.png';
import client14 from '../assets/client/14.png';
import client15 from '../assets/client/15.png';
import client16 from '../assets/client/16.png';

const clients = [
  client0, client1, client2, client3, client4, client5, client6, client7,
  client8, client9, client10, client11, client12, client13, client14, client15, client16,
];

const Clients = () => {
  // Menggunakan state boolean sederhana untuk melacak status hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="client" className="relative w-full py-24 overflow-hidden">
      
      {/* Menyuntikkan keyframes murni ke browser agar transisi linear 100% sempurna */}
      <style>{`
        @keyframes customScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pure-infinite-scroll {
          animation: customScroll 45s linear infinite;
        }
      `}</style>

      <div className="w-full relative overflow-hidden">
        
        {/* Kontrol inline style animationPlayState dikendalikan langsung oleh state React */}
        <div 
          className="flex flex-nowrap gap-8 items-center w-max pure-infinite-scroll cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        >
          
          {/* Kelompok Pertama */}
          <div className="flex gap-8 items-center flex-shrink-0">
            {clients.map((src, index) => (
              <div 
                key={`client-1-${index}`} 
                className="w-[160px] flex-shrink-0 px-3 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Client 1 ${index}`}
                  className={`h-auto object-contain ${
                    index === 5 ? 'w-full scale-[2.2]' : 'w-full'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Kelompok Kedua (Duplikat Sempurna) */}
          <div className="flex gap-8 items-center flex-shrink-0">
            {clients.map((src, index) => (
              <div 
                key={`client-2-${index}`} 
                className="w-[160px] flex-shrink-0 px-3 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Client 2 ${index}`}
                  className={`h-auto object-contain ${
                    index === 5 ? 'w-full scale-[2.2]' : 'w-full'
                  }`}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Clients;