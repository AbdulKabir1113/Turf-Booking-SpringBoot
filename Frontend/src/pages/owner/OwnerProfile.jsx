import { useEffect, useState } from "react";
import { User, Mail, Phone, Calendar, Shield } from "lucide-react";
import { getOwnerProfile } from "../../services/ownerService";

const OwnerProfile = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [owner, setOwner] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    const data = await getOwnerProfile(user.userId);

    setOwner(data);

    setLoading(false);

  };

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen text-2xl">

        Loading...

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}

        <div className="bg-green-600 text-white p-8 text-center">

          <div className="w-28 h-28 bg-white rounded-full mx-auto flex items-center justify-center">

            <User
              size={60}
              className="text-green-600"
            />

          </div>

          <h1 className="text-3xl font-bold mt-4">

            {owner.fullName}

          </h1>

          <p className="mt-2">

            Turf Owner

          </p>

        </div>

        {/* Profile Details */}

        <div className="grid md:grid-cols-2 gap-8 p-8">

          <div className="flex items-center gap-4">

            <Mail className="text-green-600" />

            <div>

              <p className="text-gray-500">

                Email

              </p>

              <h3 className="font-semibold">

                {owner.email}

              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Phone className="text-green-600" />

            <div>

              <p className="text-gray-500">

                Phone

              </p>

              <h3 className="font-semibold">

                {owner.phone}

              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Shield className="text-green-600" />

            <div>

              <p className="text-gray-500">

                Role

              </p>

              <h3 className="font-semibold">

                {owner.role}

              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Calendar className="text-green-600" />

            <div>

              <p className="text-gray-500">

                Joined

              </p>

              <h3 className="font-semibold">

                {new Date(owner.createdAt).toLocaleDateString()}

              </h3>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-center gap-5 pb-8">

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
          >

            Edit Profile

          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold"
          >

            Change Password

          </button>

        </div>

      </div>

    </div>

  );

};

export default OwnerProfile;