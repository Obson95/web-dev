
import Cards from './components/Cards';
import Hero from './components/Hero';
import Banner from './components/Banner';


export default function HomePage() {
  return (
    <>
    {/* Hero Section */}
    <Hero />
    <Banner />
    <div className="flex items-center justify-center min-h-screen bg-white-100">
    <div className="bg-white shadow-2xl p-8 rounded-lg transform perspective-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
        <Cards
          title="Card 1"
          description="This is the first card."
          link="/page1"
        />
        <Cards
          title="Card 2"
          description="This is the second card."
          link="/page2"
        />
        <Cards
          title="Card 3"
          description="This is the third card."
          link="/page3"
        />
        <Cards
          title="Card 4"
          description="This is the fourth card."
          link="/page4"
        />
        
      </div>
   
    </div>
  </div>
  </>
);
  
}
