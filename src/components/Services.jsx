import layananDesign from '../assets/service/layanan-design.png';
import designKeterangan from '../assets/service/design keterangan.png';

import layananVideo from '../assets/service/layanan-video.png';
import videoKeterangan from '../assets/service/video-keterangan.png';

import layananWeb from '../assets/service/layanan-web.png';
import webKeterangan from '../assets/service/web-keterangan.png';

import layananBranding from '../assets/service/layanan-branding.png';
import brandingKeterangan from '../assets/service/branding-keterangan.png';

import layananSosmed from '../assets/service/layanan-sosmed.png';
import sosmedKeterangan from '../assets/service/sosmed-keterangan.png';

const Services = () => {
  return (
    <section id="service" className="relative w-full min-h-screen py-24 px-12 md:px-12 lg:px-24 -mb-40">
  {/* Tetap menggunakan max-w-[1300px] agar konten di dalamnya tetap rapat ke tengah */}
  <div className="w-full max-w-[1300px] mx-auto">
    {/* Grid 3 Kolom - Tidak ada perubahan pada isi didalamnya */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-1 lg:gap-x-2 gap-y-24 lg:gap-y-32 items-center justify-center mx-auto mt-16">

      {/* Row 1, Col 1 - Layanan Desain */}
      <div className="service-row-1 flex flex-col items-center text-center pb-4 lg:pb-8 w-full">
        <img
          src={layananDesign}
          alt="Layanan Desain"
          className="w-[100%] lg:w-[125%] max-w-none h-auto object-contain scale-105"
        />
        <img
          src={designKeterangan}
          alt="Keterangan Desain"
          className="w-[110%] lg:w-[135%] max-w-none h-auto object-contain -mt-[280px] lg:-mt-[350px] scale-105"
        />
      </div>

      {/* Row 1, Col 2 - Layanan Vidio */}
      <div className="service-row-1 flex flex-col items-center text-center pb-4 lg:pb-8 w-full">
        <img
          src={layananVideo}
          alt="Layanan Vidio"
          className="w-[100%] lg:w-[125%] max-w-none h-auto object-contain scale-105"
        />
        <img
          src={videoKeterangan}
          alt="Keterangan Vidio"
          className="w-[110%] lg:w-[135%] max-w-none h-auto object-contain -mt-[280px] lg:-mt-[350px] scale-105"
        />
      </div>

      {/* Row 1, Col 3 - Layanan Website */}
      <div className="service-row-1 flex flex-col items-center text-center pb-4 lg:pb-8 w-full">
        <img
          src={layananWeb}
          alt="Layanan Website"
          className="w-[100%] lg:w-[125%] max-w-none h-auto object-contain scale-105"
        />
        <img
          src={webKeterangan}
          alt="Keterangan Website"
          className="w-[110%] lg:w-[135%] max-w-none h-auto object-contain -mt-[280px] lg:-mt-[350px] scale-105"
        />
      </div>

      {/* Row 2, Col 1 - Layanan Branding */}
      <div className="service-row-2 flex flex-col items-center text-center pb-4 lg:pb-8 w-full -mt-[340px] lg:-mt-[420px]">
        <img
          src={layananBranding}
          alt="Layanan Branding"
          className="w-[100%] lg:w-[125%] max-w-none h-auto object-contain scale-105"
        />
        <img
          src={brandingKeterangan}
          alt="Keterangan Branding"
          className="w-[110%] lg:w-[135%] max-w-none h-auto object-contain -mt-[280px] lg:-mt-[350px] scale-105"
        />
      </div>

      {/* Row 2, Col 2 - Judul "OUR SERVICE" (Tengah) */}
      <div className="service-row-2 flex flex-col items-center text-center justify-center w-full self-center -mt-[540px] lg:-mt-[670px]">
        <span className="bg-black text-white px-2 py-2 block w-fit rounded-none leading-none text-[36px] lg:text-[42px] font-bold tracking-wide uppercase">
          OUR
        </span>
        <span className="bg-black text-white px-2 py-2 block w-fit rounded-none leading-none text-[36px] lg:text-[42px] font-bold tracking-wide uppercase -mt-[12px] lg:-mt-[15px]">
          SERVICE
        </span>
      </div>

      {/* Row 2, Col 3 - Layanan Sosmed */}
      <div className="service-row-2 flex flex-col items-center text-center pb-4 lg:pb-8 w-full -mt-[370px] lg:-mt-[450px]">
        <img
          src={layananSosmed}
          alt="Layanan Sosial Media"
          className="w-[100%] lg:w-[125%] max-w-none h-auto object-contain scale-105"
        />
        <img
          src={sosmedKeterangan}
          alt="Keterangan Sosmed"
          className="w-[110%] lg:w-[135%] max-w-none h-auto object-contain -mt-[280px] lg:-mt-[350px] scale-105"
        />
      </div>

    </div>
  </div>
</section>
  );
};

export default Services;