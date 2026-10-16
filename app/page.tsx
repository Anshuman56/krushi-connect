import BuyerSection from "./components/BuyerSection";
import FarmerSection from "./components/FarmerSection";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import WaitList from "./components/waitlist";

export default async function Home() {
  return (
    <>
      <WaitList />
      <FarmerSection />
      <BuyerSection />
      <HowItWorks />
      <Footer />
    </>
  );
}
