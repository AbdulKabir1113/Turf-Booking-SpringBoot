import { useLocation, Navigate } from "react-router-dom";

import TurfHeader from "../components/turfDetails/TurfHeader";
import TurfGallery from "../components/turfDetails/TurfGallery";
import TurfInfo from "../components/turfDetails/TurfInfo";
import Amenities from "../components/turfDetails/Amenities";
import AboutTurf from "../components/turfDetails/AboutTurf";
import PriceCard from "../components/turfDetails/PriceCard";

const TurfDetails = () => {

    const { state } = useLocation();

    const turf = state?.turf;

    if (!turf) {

        return <Navigate to="/" replace />;

    }

    return (

        <>

            <TurfHeader turf={turf} />

            <TurfGallery turf={turf} />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2">

                        <TurfInfo turf={turf} />

                        <Amenities turf={turf} />

                        <AboutTurf turf={turf} />

                    </div>

                    <div>

                        <PriceCard turf={turf} />

                    </div>

                </div>

            </div>

        </>

    );

};

export default TurfDetails;