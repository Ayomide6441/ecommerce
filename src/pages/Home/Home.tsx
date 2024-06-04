import Hero from "@/pages/Home/Hero";
import About from "./About";
import BestSelling from "./BestSelling";
import Cta from "./Cta";
import ProductList from "./ProductList";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <BestSelling />
      <Cta />
      <ProductList />
      <Newsletter />
    </>
  );
}

export default Home;
