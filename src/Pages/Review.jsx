import { useParams } from "react-router-dom";
import Footer from "../Components/page-essentials/Footer";
import ReviewForm from "../Components/ReviewForm";
import MainNavbar from "../Components/navBar/mainNavbar";

const Review = () => {
    const { auctionId } = useParams();

    return (
        <div className='bg-bidcraft-grey-2 overflow-x-hidden'>
            <MainNavbar />
            <ReviewForm auctionId={auctionId} />
            <Footer />
        </div>
    );
};

export default Review;
