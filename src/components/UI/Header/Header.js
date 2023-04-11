import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [menuStatus, setMenuStatus] = useState(false);
    const [bgMenu, setBgMenu] = useState(false);
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            setBgMenu(true);
        } else {
            setBgMenu(false);
        }

    });

    return (
        <nav className={"sticky top-0 left-0 right-0 z-50"}>
            {/* First menu */}
            <div className="lg:flex justify-between px-10 md:px-20 py-5 bg-black text-white text-lg">
                <div className="flex justify-center gap-5 lg:gap-10 text-xs md:text-base xl:text-lg hover:[&>*]:text-orange-700 [&>*]:duration-500">
                    <Link>Membership</Link>
                    <Link>Coupon & Deals</Link>
                    <Link>Best Seller</Link>
                </div>
                <div className="flex justify-center gap-5 lg:gap-10 items-center text-xs md:[&>*]:text-base xl:[&>*]:text-lg [&>*]:flex [&>*]:items-center hover:[&>*]:text-orange-700 [&>*]:duration-500">
                    <Link><ion-icon class="pr-2 text-inherit" name="person-outline"></ion-icon>My Account</Link>
                    <Link><ion-icon class="pr-2 text-inherit" name="heart-outline"></ion-icon>Wishlist</Link>
                </div>
            </div>
            {/* Main menu */}
            <div className={(bgMenu ? "bg-gray-100" : "bg-white") + " relative gap-20 py-5 px-10 lg:px-20 xl:grid xl:grid-cols-4"}>
                <div className="flex justify-between xl:justify-start">
                    <div className="text-center">
                        <ion-icon class="text-lg md:text-2xl xl:text-3xl" name="book-sharp"></ion-icon>
                        <h1 className="text-[10px] md:text-[16px] lg:text-xl font-bold uppercase">book <span className="text-orange-700">forest</span></h1>
                        <h3 className="text-[8px] md:text-[14px] lg:text-lg">Study blog</h3>
                    </div>
                    <ion-icon onClick={() => setMenuStatus(menuStatus ? false : true)} class="text-4xl block xl:hidden" name="menu-outline"></ion-icon>
                </div>
                <div className={(menuStatus ? "" : "-translate-y-[100%] opacity-0") + " absolute top-full -z-10 left-0 right-0 pb-5 bg-inherit duration-700 transition-transform lg:px-20 xl:opacity-100 xl:z-[51] xl:translate-y-0 xl:bg-none xl:top-0 xl:relative px-5 font-medium lg:text-lg xl:col-span-2 xl:pb-0 xl:mt-0"}>
                    <div className="flex shadow-sm items-center bg-white border rounded-sm">
                        <input className="w-full h-6 text-[18px] outline-0 px-5 font-normal" placeholder="searching...." type="search"></input>
                        <ion-icon class="text-3xl pr-5 py-1" name="search-sharp"></ion-icon>
                    </div>
                    <div className="justify-around gap-20 mt-5 xl:flex [&>*]:font-bold [&>*]:block hover:[&>*]:text-orange-700 [&>*]:duration-500">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/shop"}>Shop</Link>
                        <Link to={"/blogs"}>Blogs</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                </div>
                <div className={(menuStatus ? "flex" : "hidden") + " xl:flex justify-around mt-3"}>
                    <div className="pr-5 md:pr-20 flex align-middle text-lg"><ion-icon class="lg:text-3xl my-auto md:my-0 mr-2 cursor-pointer" name="map-sharp"></ion-icon>Bookshop Finder</div>
                    <ion-icon class="text-lg lg:text-3xl cursor-pointer" name="cart-outline"></ion-icon>
                </div>
            </div>
        </nav>
    );
}

export default Header