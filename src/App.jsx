import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesGrid from './components/CategoriesGrid';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Navbar />
      
        
        <div className="flex-1 p-4">
          <HeroSection />
        </div>
      </div>
   
  );
}

export default App;