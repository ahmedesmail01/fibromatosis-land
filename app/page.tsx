import Complications from "./components/Complications";
import DrAhmed from "./components/DrAhmed";
import Footer from "./components/Footer";
import Gain from "./components/Gain";
import Gifts from "./components/Gifts";
import Help from "./components/Help";
import Hero from "./components/Hero";
import SecTwo from "./components/SecTwo";
import Subscribe from "./components/Subscribe";
import Suffer from "./components/Suffer";
import Technology from "./components/Technology";
import Testmonials from "./components/Testmonials";
import WhySec from "./components/WhySec";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden bg-[#f4edeb] justify-center items-center">
      <Hero />
      <SecTwo />
      <WhySec />
      <Suffer />
      <Complications />
      <Technology />
      <DrAhmed />
      <Gain />
      <Help />
      <Gifts />
      <Testmonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
