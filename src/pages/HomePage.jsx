import MainCategoriesRow from "../components/MainCategoriesRow";
import Homecarouselpage from "../components/HomeCarouselPage";
import ProductSection from "../components/ProductSection";
import FeedbackPreview from "../components/FeedbackPreview"; 
import WoodcraftCategories from "../Components/WoodcraftCategories";
import Cart from "./CartPage";

const Workshop = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Homecarouselpage />
      <MainCategoriesRow />
      <ProductSection />
      <WoodcraftCategories/>
      <FeedbackPreview />
       
    </div>
  );
};

export default Workshop;