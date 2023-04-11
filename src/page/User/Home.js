import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import AuthorsOfTheMonth from "../../components/User/Home/AuthorsOfTheMonth/AuthorsOfTheMonth";
import Banner from "../../components/User/Home/Banner/Banner";
import BestSeller from "../../components/User/Home/BestSeller/BestSeller";
import BooksOfTheMonth from "../../components/User/Home/BooksOfTheMonth/BooksOfTheMonth"
import HappyClientSay from "../../components/User/Home/HappyClientSay/HappyClientSay";
import OurService from "../../components/User/Home/OurService/OurService";
// import changeAnimation from "../../assets/js";



const Home = () => {
    // const menu = () => {
    //     changeAnimation({ className: "menu", from: "-translate-x-full", to: "translate-x-0" });
    //     changeAnimation({ className: "menuItem", from: "w-0", to: "w-40" });
    //     changeAnimation({ className: "menuItem", from: "h-0", to: "h-40" });
    // }

    return (
        <div className="relative">
            <Header />
            <Banner />
            <BooksOfTheMonth />
            <BestSeller />
            <AuthorsOfTheMonth />
            <HappyClientSay />
            <OurService />
            <Footer />

            {/* <div onClick={menu} className={"menu z-50 -translate-x-full duration-1000  grid grid-cols-7 grid-rows-[repeat(7,1fr)] w-full h-full fixed top-0 left-0"}>
                <div className={"menuItem hover:bg-blue-300 w-0 h-0 duration-[2000ms] ease-in-out rounded-full row-start-2 col-start-1 bg-yellow-400"}>.</div>
                <div className={"menuItem hover:bg-blue-300 w-0 h-0 duration-[2000ms] ease-in-out rounded-full row-start-3 col-start-2 translate-x-1/2 -translate-y-1/2 bg-yellow-400"}>.</div>
                <div className={"menuItem hover:bg-blue-300 w-0 h-0 duration-[2000ms] ease-in-out rounded-full row-start-4 bg-yellow-400"}>Menu</div>
                <div className={"menuItem hover:bg-blue-300 w-0 h-0 duration-[2000ms] ease-in-out rounded-full row-start-4 col-start-3 bg-yellow-400"}>.</div>
                <div className={"menuItem hover:bg-blue-300 w-0 h-0 duration-[2000ms] ease-in-out rounded-full row-start-5 col-start-2 translate-x-1/2 translate-y-1/2 bg-yellow-400"}>.</div>
                <div className={"menuItem hover:bg-blue-300 w-0 h-0 duration-[2000ms] ease-in-out rounded-full row-start-6 col-start-1 bg-yellow-400"}>.</div>

            </div>
            <div onClick={menu} className="text-center text-2xl">hien</div> */}
        </div>
    );
}
export default Home

