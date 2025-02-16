import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation(); // Get the current URL path

  // Define the mapping of routes to index values
  const indexing = {
    "/": 0,
    "/projects" :1,
    "/achievements": 2,
    "/hire": 3,
  };

  // Set initial state based on the current URL
  const [currentButton, setCurrentButton] = useState(indexing[location.pathname] || 0);

  // Update state when location changes (in case user navigates via browser back/forward buttons)
  useEffect(() => {
    setCurrentButton(indexing[location.pathname] || 0);
  }, [location.pathname]);

  function shiftAttention(e) {
    const value = indexing[e.target.getAttribute("href")];
    setCurrentButton(value);
  }

  return (
    <nav className="flex items-center flex-wrap gap-2 mb-8">
      {["About","Projects", "Achievements", "Hire"].map((item, index) => (
        <Link
          to={item === "About" ? "/" : `/${item.toLowerCase()}`}
          key={index}
          onClick={shiftAttention}
          className={`relative text-gray-500 text-sm px-3 py-2 rounded-md transition-all duration-200 ${
            index === currentButton
              ? "bg-gray-900 text-white shadow-md"
              : "hover:bg-gray-100"
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
