import DynamicRenderingReviews from "./DynamicRenderingReviews/DynamicRenderingReviews";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import StaticSection from "./StaticSection/StaticSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <StaticSection />
      <DynamicRenderingReviews />
      <Footer />
    </>
  );
};
export default HomePage;
