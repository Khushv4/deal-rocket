function CategoriesGrid() {
  const cards = [
    { title: "Global Market Place", img: "/marketplace.png" },
    { title: "Buy Leads", img: "/buyleads.png" },
    { title: "Sell Offers", img: "/selloffers.png" },
    { title: "Deal Assist", img: "/dealassist.png" },
    { title: "Industrial Jobs", img: "/industrialjobs.png" }
  ];

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-gray-100 p-4 shadow-md rounded-md flex flex-col items-center">
          <img src={card.img} alt={card.title} className="h-20 mb-4" />
          <h3 className="text-center text-sm font-semibold">{card.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoriesGrid;

