import React from "react";

const Footer = () => {
  const locations = [
    { name: "BANGALORE", country: "India" },
    { name: "DUBAI", country: "UAE" },
    { name: "KATHMANDU", country: "Nepal" },
    { name: "COLOMBO", country: "Sri Lanka" },
  ];

  const handleLocationClick = (location: string) => {
    console.log(`Location clicked: ${location}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {locations.map((location) => (
            <div
              key={location.name}
              className="text-center cursor-pointer group transition-all duration-300 hover:transform hover:scale-105"
              onClick={() => handleLocationClick(location.name)}
            >
              <h3 className="text-lg font-semibold tracking-wider group-hover:text-emerald transition-colors duration-300">
                {location.name}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{location.country}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Eden Clicks Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;