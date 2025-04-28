
import Sidebar from './Sidebar';
import Container from './Container';
import CategoriesGrid from './CategoriesGrid';

function HeroSection() {
  return (
    <Container>
      <div className="w-full bg-white rounded-lg overflow-hidden">
        
        {/* 👇 THIS flex contains Sidebar + Main Content + Categories Grid side by side */}
        <div className="flex">

          {/* Sidebar - Left */}
          <div className="w-1/4 p-4">
            <Sidebar />
          </div>

          {/* Main Content - Right */}
          <div className="flex w-3/4 flex-col">

            {/* LEFT SIDE - Banner Image and Text */}
            <div className='flex'>
            <div className="relative w-2/3 pt-5">
              <img src="/hero-bg.jpeg" alt="Hero Banner" className="h-[450px] object-cover w-full" />
              <div className="absolute top-0 left-0 w-full h-full  bg-white/30">
                <div className="absolute top-12 left-12">
                  <img src="/logo.png" alt="DealRocket Logo" className="h-8" />
                  <h1 className="text-4xl font-bold text-black mb-2">
                    GLOBAL DEALS, <br />
                    <span className="text-red-600">TRUSTED SUPPLIERS</span>
                  </h1>
                  <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
                    SHOP NOW
                  </button>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-800">
                    <div>✔️ Millions of Products</div>
                    <div>✔️ Verified Suppliers</div>
                    <div>✔️ Competitive Pricing</div>
                    <div>✔️ Secure Transactions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Two stacked images */}
            <div className="flex flex-col gap-5 w-1/3 p-5">
              <img src="/first.png" alt="First Image" className="h-[215px] object-cover" />
              <img src="/second.png" alt="Second Image" className="h-[215px] object-cover" />
            </div>
            </div>
            {/* Categories Grid - Positioned below the main content */}
            <div>
            <div className=" p-4">
              <CategoriesGrid />
            </div>
            </div>
          </div>

          

        </div>

      </div>
    </Container>
  );
}

export default HeroSection;
