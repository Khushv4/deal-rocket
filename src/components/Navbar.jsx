import { FaSearch, FaRegHeart, FaCoins } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";

function Navbar() {
  return (
    <div className="w-full shadow-md">
      {/* Top Header */}
      <div className="flex items-center justify-between px-8 py-3 bg-white">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="DealRocket Logo" className="h-10" />
          
        </div>

        <div className="flex border border-orange-600 rounded-4xl overflow-hidden px- w-2xl ">
  <div className=" ">
  <select className="py-2 text-sm outline-none flex-grow px-3">
    <option c>Products</option>
  </select>
  </div>
  <input
    type="text"
    placeholder="Search for products..."
    className="px-4 py-2 outline-none flex-grow"
  />
  <button className="px-8 rounded-4xl bg-red-600 text-white ">
    <span className="flex items-center"><FaSearch className="mr-2" /> Search</span>
  </button>
</div>



        <div className="flex items-center gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
          <FaCoins/>
            <span>RFQ</span>
            
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
          <FaCoins/>
            <span>Supplier</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
          <FaCoins />
            <span>Buyer</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdOutlineMessage size={18} />
            Message
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaRegHeart size={18} />
            <span>Shortlist</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center bg-gray-100 px-8 py-2 text-sm text-gray-700 justify-between">
      <button className="bg-red-600 text-white px-4 py-2 rounded-md mr-6 font-medium flex items-center">
  ALL CATEGORIES
  <span className="ml-2">
    <img src="/options.png" alt="" />
  </span>
</button>
        <div className="flex gap-6">
          <a href="#" className="hover:underline hover:text-orange-600">Home</a>
          <a href="#" className="hover:underline hover:text-orange-600">Stock Sale</a>
          <a href="#" className="hover:underline hover:text-orange-600">Buy Leads</a>
          <a href="#" className="hover:underline hover:text-orange-600">Sell Offer</a>
          <a href="#" className="hover:underline hover:text-orange-600">Deal Assist</a>
          <a href="#" className="hover:underline hover:text-orange-600">Industry Jobs</a>
          <a href="#" className="hover:underline hover:text-orange-600">Trade Shows</a>
          <a href="#" className="hover:underline hover:text-orange-600">Vendor Zone</a>
        </div>
        <div className="flex items-center gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
          Our Features
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
          Help
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
          English
            
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Sign/Signup
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
