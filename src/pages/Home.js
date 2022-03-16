import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="yopo resort"
          subtitle="Amazing deluxe rooms as low as $150"
        >
          <Link
            to="/rooms"
            className="btn-success"
            style={{ borderRadius: "50%" }}
          >
            resort rooms
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Services />
    </>
  );
};

export default home;
