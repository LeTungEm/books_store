import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import ListBooks from "../../components/User/Shop/ListBooks/ListBooks";
import Published from "../../components/User/Shop/Published/Published";

const Shop = () => {
    return (
        <>
            <Header/>
            <div className="relative flex px-5 mb-5 lg:px-10">
                <Published/>
                <ListBooks/>
            </div>
            <Footer/>
        </>
    );
}

export default Shop