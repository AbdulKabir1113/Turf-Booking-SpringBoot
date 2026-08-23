import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Hexagon,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSearch = () => {
    if (search.trim() === "") return;

    navigate(`/turfs?search=${encodeURIComponent(search)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Hexagon
            size={30}
            className="text-green-600"
          />

          <h1 className="text-3xl font-bold text-green-700">
            TurfHub
          </h1>
        </div>

        {/* Search */}
        <div className="hidden lg:flex w-[430px] relative">
          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-400 cursor-pointer"
            onClick={handleSearch}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search turf, area or city"
            className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Location */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-green-600">
            <MapPin size={18} />
            <span>Hyderabad</span>
          </div>

          {/* Login / User */}
          {user ? (
            <div className="relative" ref={menuRef}>

              <button
                onClick={() => setShowMenu(!showMenu)}
                className="font-semibold text-green-700 hover:text-green-800"
              >
                Hi, {user.fullName} ▼
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border overflow-hidden">

                  <button
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/profile");
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    👤 Profile
                  </button>

                  <button
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/my-bookings");
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    📅 My Bookings
                  </button>

                  <hr />

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;