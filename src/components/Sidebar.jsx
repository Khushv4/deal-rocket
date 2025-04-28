
function Sidebar() {
  const categories = [
    "Agriculture", "Apparel & Accessories", "Automobiles & Motorcycles",
    "Beauty", "Personal Care", "Chemicals", "Building & Construction",
    "Consumer Electronics & Components", "Electrical Equipment",
    "Solar & Energy", "Fashion Accessories", "Food & Beverage", "Furniture",
    "Gifts & Crafts", "Hardware", "Health & Medical", "Home & Garden",
    "Home Appliances", "Lights & Lighting"
  ];

  return (
    <div className="w-60 bg-white border- px-1 py-6 hidden lg:block">
      <div className="flex items-center mb-5">
  <img src="/Menu.png" alt="" className="mr-4" />
  <h2 className="text-lg font-semibold mb-0">TOP CATEGORIES</h2>
</div>
      <ul className="space-y-2 text-sm text-gray-700">
        {categories.map((cat, index) => (
          <li key={index} className="hover:underline cursor-pointer">{cat}</li>
        ))}
      </ul>
      <div className="mt-6 text-red-600 font-semibold cursor-pointer hover:underline">
        View All →
      </div>
    </div>
  );
}

export default Sidebar;
