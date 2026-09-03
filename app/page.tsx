import Header from "@/components/Header/header";
import Hero from "@/components/Hero/hero";
import About from "@/components/About/about";
import Ecosystem from "@/components/Ecosystem/ecosystem";
import Channels from "@/components/Channels/channels";
import Footer from "@/components/Footer/footer";
import { Team } from "@/components/Team/team";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Ecosystem />
      <Channels />
      <Team />
      <Footer />
    </div>
  );
}
