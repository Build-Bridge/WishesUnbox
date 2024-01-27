import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function LandingPage() {
  return (
    <div className="flex items-center flex-col w-full relative min-h-screen pt-20 bg-gray-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
