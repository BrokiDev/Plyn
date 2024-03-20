import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="h-full w-full  bg-white/15">
      <div className="flex flex-col">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
