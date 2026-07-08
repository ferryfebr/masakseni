import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLinkClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7f7f7f] to-[#454545] border-b-[5px] border-white">
      <div className="flex items-center justify-center px-6 py-[6px] mx-auto gap-30">
        
        <Link
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => handleLinkClick('about')}
          style={activeMenu === 'about' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="hidden min-[1025px]:inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          About Us
        </Link>

        <Link
          to="service"
          smooth={true}
          offset={100}
          duration={500}
          onClick={() => handleLinkClick('service')}
          style={activeMenu === 'service' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="hidden min-[1025px]:inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
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
          onClick={() => handleLinkClick('client')}
          style={activeMenu === 'client' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="hidden min-[1025px]:inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          Client
        </Link>

        <Link
          to="contact"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => handleLinkClick('contact')}
          style={activeMenu === 'contact' ? { backgroundColor: '#000000', paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' } : {}}
          className="hidden min-[1025px]:inline-block text-white text-[20px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:scale-110 bg-transparent px-3 py-1 uppercase select-none"
        >
          Contact
        </Link>

        {/* Hamburger Button - Visible on tablet */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-8 top-8 min-[1025px]:hidden flex flex-col items-center justify-center p-2 cursor-pointer select-none z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-[3px] bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`block w-7 h-[3px] bg-white rounded mt-[6px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-[3px] bg-white rounded mt-[6px] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </div>

      {/* Tablet Dropdown Menu */}
      <div className={`min-[1025px]:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-r from-[#7f7f7f] to-[#454545] border-t-[2px] border-white/20 px-6 py-4">
          <div className="flex flex-col items-center gap-2">
            <Link to="about" smooth={true} offset={-100} duration={500} onClick={() => handleLinkClick('about')}
              className="text-white text-[18px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-200 ease-in-out bg-transparent px-4 py-3 uppercase select-none w-full text-center rounded hover:bg-black/20">
              About Us
            </Link>
            <Link to="service" smooth={true} offset={100} duration={500} onClick={() => handleLinkClick('service')}
              className="text-white text-[18px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-200 ease-in-out bg-transparent px-4 py-3 uppercase select-none w-full text-center rounded hover:bg-black/20">
              Service
            </Link>
            <Link to="client" smooth={true} offset={-250} duration={500} onClick={() => handleLinkClick('client')}
              className="text-white text-[18px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-200 ease-in-out bg-transparent px-4 py-3 uppercase select-none w-full text-center rounded hover:bg-black/20">
              Client
            </Link>
            <Link to="contact" smooth={true} offset={-80} duration={500} onClick={() => handleLinkClick('contact')}
              className="text-white text-[18px] tracking-tight font-semibold cursor-pointer hover:text-white transition-all duration-200 ease-in-out bg-transparent px-4 py-3 uppercase select-none w-full text-center rounded hover:bg-black/20">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;