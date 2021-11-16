import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner/Banner";
import BrowseByType from "../BrowseByType/BrowseByType";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import ShowReview from "../ShowReview/ShowReview";
import Uses from "../Uses/Uses";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner></Banner>
      <Uses />
      <Products></Products>
      <ShowReview />
      <BrowseByType />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default Home;
