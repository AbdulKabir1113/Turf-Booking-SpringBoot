import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  Pencil,
  KeyRound,
  LogOut,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}

        <div className="bg-green-600 text-white text-center py-8">

          <div className="w-24 h-24 rounded-full bg-white text-green-600 flex items-center justify-center text-4xl font-bold mx-auto">

            {user.fullName.charAt(0).toUpperCase()}

          </div>

          <h1 className="text-3xl font-bold mt-4">
            {user.fullName}
          </h1>

          <p className="text-green-100">
            Welcome to TurfHub
          </p>

        </div>

        {/* User Details */}

        <div className="p-8 space-y-5">

          <div className="flex items-center gap-4 border rounded-xl p-4">

            <User className="text-green-600" />

            <div>
              <p className="text-gray-500 text-sm">
                Full Name
              </p>

              <h3 className="font-semibold">
                {user.fullName}
              </h3>
            </div>

          </div>

          <div className="flex items-center gap-4 border rounded-xl p-4">

            <Mail className="text-green-600" />

            <div>
              <p className="text-gray-500 text-sm">
                Email
              </p>

              <h3 className="font-semibold">
                {user.email}
              </h3>
            </div>

          </div>

          <div className="flex items-center gap-4 border rounded-xl p-4">

            <Phone className="text-green-600" />

            <div>
              <p className="text-gray-500 text-sm">
                Phone
              </p>

              <h3 className="font-semibold">
                {user.phone}
              </h3>
            </div>

          </div>

          {/* My Bookings */}

          <button
            onClick={() => navigate("/my-bookings")}
            className="w-full flex items-center justify-between border rounded-xl p-4 hover:bg-green-50 transition"
          >

            <div className="flex items-center gap-3">

              <CalendarDays className="text-green-600" />

              <span className="font-medium">
                My Bookings
              </span>

            </div>

            ➜

          </button>

          {/* Edit Profile - Disabled */}

          <button
            disabled
            className="w-full flex items-center justify-between border rounded-xl p-4 bg-gray-50 text-gray-400 cursor-not-allowed"
          >

            <div className="flex items-center gap-3">

              <Pencil />

              <div className="text-left">

                <span className="font-medium block">
                  Edit Profile
                </span>

                <span className="text-xs">
                  Coming Soon
                </span>

              </div>

            </div>

            ➜

          </button>

          {/* Change Password - Disabled */}

          <button
            disabled
            className="w-full flex items-center justify-between border rounded-xl p-4 bg-gray-50 text-gray-400 cursor-not-allowed"
          >

            <div className="flex items-center gap-3">

              <KeyRound />

              <div className="text-left">

                <span className="font-medium block">
                  Change Password
                </span>

                <span className="text-xs">
                  Coming Soon
                </span>

              </div>

            </div>

            ➜

          </button>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold mt-2 transition"
          >

            <LogOut />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;