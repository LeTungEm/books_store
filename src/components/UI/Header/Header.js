import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [menuStatus, setMenuStatus] = useState(false);
    const [bgMenu, setBgMenu] = useState(false);
    window.addEventListener('scroll', function () {
        if(window.pageYOffset > 0){
            setBgMenu(true);
        }else{
            setBgMenu(false);
        }

    });

    return (
        <nav className={(bgMenu?"bg-gray-200":"") + " sticky top-0 left-0 right-0 z-50"}>
            {/* First menu */}
            <div className="lg:flex justify-between px-10 md:px-20 py-5 bg-black text-white text-lg">
                <div className="flex justify-center gap-5 lg:gap-10 text-xs md:text-base xl:text-lg  [&>*]:duration-500">
                    <Link className="hover:text-orange-700">Membership</Link>
                    <Link className="hover:text-orange-700">Coupon & Deals</Link>
                    <Link className="hover:text-orange-700">Best Seller</Link>
                </div>
                <div className="flex justify-center gap-5 lg:gap-10 items-center text-xs md:[&>*]:text-base xl:[&>*]:text-lg [&>*]:duration-500">
                    <Link className="flex items-center hover:text-orange-700"><ion-icon class="pr-2 text-inherit" name="person-outline"></ion-icon>My Account</Link>
                    <Link className="flex items-center hover:text-orange-700"><ion-icon class="pr-2 text-inherit" name="heart-outline"></ion-icon>Wishlist</Link>
                </div>
            </div>
            {/* Main menu */}
            <div className="xl:grid xl:grid-cols-4 gap-20 px-10 lg:px-20 py-5">
                <div className="flex justify-between xl:justify-start">
                    <div className="text-center">
                        <ion-icon class="text-lg md:text-2xl xl:text-3xl" name="book-sharp"></ion-icon>
                        <h1 className="text-[10px] md:text-[16px] lg:text-xl font-medium uppercase">book forest</h1>
                        <h3 className="text-[8px] md:text-[14px] lg:text-lg">Study blog</h3>
                    </div>
                    <ion-icon onClick={() => setMenuStatus(menuStatus ? false : true)} class="text-4xl block xl:hidden" name="menu-outline"></ion-icon>
                </div>
                <div className={(menuStatus ? "" : "hidden") + " xl:block lg:col-span-2 font-medium text-xl"}>
                    <div className="flex items-center bg-white border">
                        <input className="w-full h-6 text-[18px] outline-0 px-5 font-normal" type="search"></input>
                        <ion-icon class="text-3xl pr-5" name="search-sharp"></ion-icon>
                    </div>
                    <div className="justify-around gap-20 mt-5 xl:flex [&>*]:block [&>*]:duration-500">
                        <Link className="hover:text-orange-700">Home</Link>
                        <Link className="hover:text-orange-700">Shop</Link>
                        <Link className="hover:text-orange-700">Blogs</Link>
                        <Link className="hover:text-orange-700">Contact</Link>
                    </div>
                </div>
                <div className={(menuStatus ? "flex" : "hidden") + " xl:flex justify-around mt-3"}>
                    <div className="pr-5 md:pr-20 flex align-middle text-lg"><ion-icon class="text-3xl mr-2" name="map-sharp"></ion-icon>Bookshop Finder</div>
                    <ion-icon class="text-3xl" name="cart-outline"></ion-icon>
                </div>
            </div>
        </nav>
    );
}

export default Header