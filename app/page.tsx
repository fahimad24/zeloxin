import CategorySection from "./components/CategorySection";
import FeatureBar from "./components/FeatureBar";
import FeaturedVehicles from "./components/FeaturedVehicles";
import Hero from "./components/hero/hero";
import OurServices from "./components/OurServices";
import TestimonialsAndBlogs from "./components/TestimonialsAndBlogs";

export default function Home() {
  return (
    <>
      <header>
        <Hero></Hero>
        <FeatureBar></FeatureBar>
      </header>
      <main>
        <CategorySection></CategorySection>
        <FeaturedVehicles></FeaturedVehicles>
        <OurServices></OurServices>
        <TestimonialsAndBlogs></TestimonialsAndBlogs>
      </main>
    </>
  );
}
