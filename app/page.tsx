import CategorySection from "./components/CategorySection";
import FeatureBar from "./components/FeatureBar";
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
      </main>
    </>
  );
}
