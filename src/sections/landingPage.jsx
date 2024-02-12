import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Companies,
  Feature,
  HowItWorks,
  AboutMission,
} from "../components";
function landingPage() {
  return (
    <div className="w-full overflow-hidden bg-ellipse bg-no-repeat bg-left-top">
      <Navbar />
      {/* <div className={`padding max-w-7xl mx-auto relative z-0`}> */}
      <Hero />
      <div className="bg-slate-50 w-full pt-5">
        <Companies />
        <About />
        <AboutMission />
        <Feature />
        <HowItWorks />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default landingPage;
