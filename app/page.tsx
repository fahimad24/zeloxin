import CategorySection from "./components/CategorySection";
import FeatureBar from "./components/FeatureBar";
import FeaturedVehicles from "./components/FeaturedVehicles";
import Hero from "./components/hero/hero";

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
      </main>
    </>
  );
}
