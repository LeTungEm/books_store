import Header from "../../components/UI/Header/Header";
import AuthorsOfTheMonth from "../../components/User/Home/AuthorsOfTheMonth/AuthorsOfTheMonth";
import Banner from "../../components/User/Home/Banner/Banner";
import BestSeller from "../../components/User/Home/BestSeller/BestSeller";
import BooksOfTheMonth from "../../components/User/Home/BooksOfTheMonth/BooksOfTheMonth"
import HappyClientSay from "../../components/User/Home/HappyClientSay/HappyClientSay";
import OurService from "../../components/User/Home/OurService/OurService";

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <BooksOfTheMonth/>
            <BestSeller/>
            <AuthorsOfTheMonth/>
            <HappyClientSay/>
            <OurService/>
        </>
    );
}
export default Home