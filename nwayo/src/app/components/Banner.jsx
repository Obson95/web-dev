

const Banner = () => {
    return (

<section className="relative flex items-center justify-center bg-gradient-to-r from-footer_color via-white to-footer_color text-blue-900 overflow-hidden py-12">
  {/* Banner Content with Enhanced Animations */}
  <div className="relative z-10 max-w-2xl text-center px-8 space-y-6 border border-solid border-header_color rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-sm animate-bounceIn">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-shadow-blue animate-scaleIn">
      Important Updates from <span className="text-red-500">Nwayo</span>
    </h2>
    <p className="text-md md:text-lg mb-6 text-shadow-blue animate-scaleIn delay-150">
      Stay informed about the latest legal changes and immigration policies. Here are the most recent updates:
    </p>
    <ul className="text-left list-disc list-inside space-y-2">
      <li className="animate-slideRight delay-300">New visa application procedures effective from November 2023.</li>
      <li className="animate-slideRight delay-500">Changes to residency requirements for students.</li>
      <li className="animate-slideRight delay-700">Upcoming deadlines for DACA renewals.</li>
    </ul>
  </div>
</section>


);
};

export default Banner;