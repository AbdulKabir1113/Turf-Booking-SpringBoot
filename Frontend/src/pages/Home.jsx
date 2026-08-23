import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sports from "../components/Sports";
import TurfSection from "../components/TurfSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.role === "OWNER") {

      navigate("/owner/dashboard", { replace: true });

    }

  }, [navigate]);

  return (
    <>
      <Navbar />
      <Hero />
      <Sports />
      <TurfSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );

};

export default Home;