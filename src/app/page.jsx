import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Search from "./sections/Search";
import ProductPage from "./sections/ProductPage";
const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Search />
      <ProductPage />
      <Footer />
    </main>
  );
};

export default Home;
