import MainCategoriesRow from "../components/MainCategoriesRow";
import Homecarouselpage from "../components/HomeCarouselPage";
import BestSellingGifts from "../components/BestSellingGifts";
import FeedbackPreview from "../components/FeedbackPreview"; 
import Cart from "../pages/Cart";

const Workshop = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Homecarouselpage />
      <MainCategoriesRow />
      <BestSellingGifts />
      <FeedbackPreview />
    </div>
  );
};

export default Workshop;