import { useContext } from "react";
import Category from "../components/category/Category";
import HeroSection from "../components/heroSection/HeroSection";
import HomePageProductCard from "../components/homePageProductCard/HomePageProductCard";
import Testimonial from "../components/testimonial/Testimonial";
import Track from "../components/track/Track";



const Homepage = () => {
  
  return (
    <main>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />

    </main>
  );
};

export default Homepage;
