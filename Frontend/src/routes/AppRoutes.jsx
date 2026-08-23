import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedUserRoute from "./ProtectedUserRoute";
import ProtectedOwnerRoute from "./ProtectedOwnerRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TurfDetails from "../pages/TurfDetails";
import Booking from "../pages/Booking";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile";
import MyBookings from "../pages/MyBookings";
import NotFound from "../pages/NotFound";
import BookingSuccess from "../pages/BookingSuccess";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";

import OwnerDashboard from "../pages/owner/OwnerDashboard";
import OwnerTurfs from "../pages/owner/OwnerTurfs";
import AddTurf from "../pages/owner/AddTurf";
import EditTurf from "../pages/owner/EditTurf";
import OwnerBookings from "../pages/owner/OwnerBookings";
import OwnerProfile from "../pages/owner/OwnerProfile";
import Turfs from "../pages/Turfs";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* User Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/turfs" element={<Turfs />} />
       
        {/* Protected User Routes */}

        <Route path="/turf/:id" element={<ProtectedUserRoute><TurfDetails /></ProtectedUserRoute>} />

          <Route path="/booking" element={<ProtectedUserRoute><Booking /></ProtectedUserRoute>} />

          <Route path="/payment" element={<ProtectedUserRoute><Payment /></ProtectedUserRoute>} />

          <Route path="/profile" element={<ProtectedUserRoute><Profile /></ProtectedUserRoute>} />

          <Route path="/edit-profile" element={<ProtectedUserRoute><EditProfile /></ProtectedUserRoute>} />

          <Route path="/change-password" element={<ProtectedUserRoute><ChangePassword /></ProtectedUserRoute>} />

          <Route path="/my-bookings" element={<ProtectedUserRoute><MyBookings /></ProtectedUserRoute>} />

          <Route path="/booking-success" element={<ProtectedUserRoute><BookingSuccess /></ProtectedUserRoute>} />

        {/* Owner Routes */}

            <Route path="/owner/dashboard" element={<ProtectedOwnerRoute><OwnerDashboard /></ProtectedOwnerRoute>} />

            <Route path="/owner/turfs" element={<ProtectedOwnerRoute><OwnerTurfs /></ProtectedOwnerRoute>} />

            <Route path="/owner/add-turf" element={<ProtectedOwnerRoute><AddTurf /></ProtectedOwnerRoute>} />
            
            <Route path="/owner/edit-turf/:id" element={<ProtectedOwnerRoute><EditTurf /></ProtectedOwnerRoute>} />

            <Route path="/owner/bookings" element={<ProtectedOwnerRoute><OwnerBookings /></ProtectedOwnerRoute>} />

            <Route path="/owner/profile" element={<ProtectedOwnerRoute><OwnerProfile /></ProtectedOwnerRoute>} />            

        {/* 404 */}

        <Route path="*" element={<NotFound />} />

        

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;