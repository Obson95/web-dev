import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
         src="/xcv.jpg"
          alt="Community Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-red-500">Nwayo</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your guide to navigating life in the USA. Discover resources for housing, legal aid, education, and more.
        </p>
        <button className="px-8 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 rounded-md shadow-lg transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
