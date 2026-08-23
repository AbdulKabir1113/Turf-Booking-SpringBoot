import { Link, useNavigate } from "react-router-dom";

const OwnerNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login", { replace: true });

  };

  return (

    <div className="flex justify-end gap-4 mb-8">

      <Link
        to="/owner/dashboard"
        className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold"
      >
        Dashboard
      </Link>

      <Link
        to="/owner/turfs"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
      >
        My Turfs
      </Link>

      <Link
        to="/owner/add-turf"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
      >
        Add Turf
      </Link>

      <Link
        to="/owner/bookings"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
      >
        Bookings
      </Link>

      <Link
        to="/owner/profile"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold"
      >
        Profile
      </Link>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
      >
        Logout
      </button>

    </div>

  );

};

export default OwnerNavbar;