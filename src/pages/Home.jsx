import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollStory from "../components/ScrollStory";


function Home() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <Navbar />
      <Hero />
      <ScrollStory />
    </div>
  );
}

export default Home;