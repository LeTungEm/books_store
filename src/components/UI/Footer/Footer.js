import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-5 flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 mr-6">
                    {/* <Link href="/" className="text-xl font-bold text-gray-800">
                        Bookstore
                    </Link> */}
                    <Link className="text-lg md:text-2xl lg:text-4xl font-bold uppercase">book <span className="text-orange-700">forest</span></Link>
                </div>
                <div className="flex items-center justify-end">
                    <Link
                        href="/"
                        className="inline-block text-gray-600 hover:text-gray-800 mr-4"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/"
                        className="inline-block text-gray-600 hover:text-gray-800 mr-4"
                    >
                        Contact Us
                    </Link>
                    <Link href="/" className="inline-block text-gray-600 hover:text-gray-800">
                        FAQs
                    </Link>
                </div>
            </div>
            <div className="container mx-auto mt-8 flex justify-center">
                <Link href="/" className="text-gray-600 hover:text-gray-800 mr-4">
                    <ion-icon class="text-2xl" name="logo-facebook"></ion-icon>
                </Link>
                <Link href="/" className="text-gray-600 hover:text-gray-800 mr-4">
                    <ion-icon class="text-2xl" name="logo-instagram"></ion-icon>
                </Link>
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                    <ion-icon class="text-2xl" name="logo-twitter"></ion-icon>
                </Link>
            </div>
        </footer>
    );
}

export default Footer