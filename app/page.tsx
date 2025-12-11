import About from "./about/page";
import FoodList from "./components/foodList";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-4 md:px-10">
        <FoodList />
        <About/>
      </div>
      <div className="px-4 md:px-10 text-center">
      <Contact/>
      </div>
      <Footer />
    </>
  );
}
