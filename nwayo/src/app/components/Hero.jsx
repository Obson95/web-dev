import Image from 'next/image';

const Hero = () => {
  return (
<section className="relative custom-height flex items-center justify-center bg-white bg-header_color text-blue-900 overflow-hidden ">
  {/* Hero Content with 3D Effect and Animated Border */}
  <div className="relative z-10 max-w-xl text-center px-6 space-y-6 border-animation">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-blue animate-fadeInUp">
      Welcome to <span className="text-red-500">Nwayo</span>
    </h1>
    <p className="text-lg md:text-xl mb-6 text-shadow-blue animate-fadeInUp delay-150">
      Your guide to navigating life in the USA. Discover resources for housing, legal aid, education, and more.
    </p>
    <button className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-md shadow-3d hover:shadow-3d-hover transition-transform duration-300 transform-gpu hover:scale-105 animate-fadeInUp delay-300">
      Get Started
    </button>
  </div>
</section>
  

  );
};

export default Hero;


