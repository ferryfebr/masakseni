import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('hero');

  useEffect(() => {
    const handleManualScroll = () => {
      setActiveMenu(null);
    };

    window.addEventListener('wheel', handleManualScroll);
    window.addEventListener('touchmove', handleManualScroll);

    return () => {
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('touchmove', handleManualScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7f7f7f] to-[#454545] border-b-[5px] border-white">
      <div className="flex items-center justify-center px-6 py-[6px] mx-auto gap-30">
        
        <Link
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setActiveMenu('about')}
          style={activeMenu === 'about' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          About Us
        </Link>

        <Link
          to="service"
          smooth={true}
          offset={100}
          duration={500}
          onClick={() => setActiveMenu('service')}
          style={activeMenu === 'service' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          Service
        </Link>

        <Link
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => setActiveMenu('hero')}
          className="cursor-pointer select-none"
        >
          <img src={logo} alt="Masakseni Logo" className="h-[108px]" />
        </Link>

        <Link
          to="client"
          smooth={true}
          offset={-250}
          duration={500}
          onClick={() => setActiveMenu('client')}
          style={activeMenu === 'client' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          Client
        </Link>

        <Link
          to="contact"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setActiveMenu('contact')}
          style={activeMenu === 'contact' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          Contact
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;