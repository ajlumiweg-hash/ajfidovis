import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollStory from "../components/ScrollStory";
import About from "../components/About";

function Home() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <Navbar />
      <Hero />
      <ScrollStory />
      <About />
    </div>
  );
}

export default Home;