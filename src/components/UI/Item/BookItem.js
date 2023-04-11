import Rating from "../Library/Rating";

const BookItem = ({ image, rate = 5, author, title, price, description, bookId, flex, button, contentCenter }) => {

    price = price ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price) : "";

    return (
        <div className={(flex ? "pr-4" : "") + "border relative w-full h-full sm:p-0 rounded-sm hover:shadow-2xl hover:-translate-y-2 duration-500"}>
            <div className={(flex ? "flex " : "") + " [&>*]:flex-1 h-full"}>
                <div>
                    {/* book image */}
                    <img className="w-full h-full object-fill rounded-sm" src={image} alt="item book of the moon"></img>
                </div>
                <div className={(contentCenter ? "text-center" : "pl-5") + " my-auto"}>
                    {/* Rate */}
                    <div className={(contentCenter ? "justify-center" : "") + " flex flex-wrap items-center text-gray-400 my-5"}>
                        <Rating rate={rate} />
                        ({rate} reviews)
                    </div>
                    <h3 className="text-gray-700">By: {author}</h3>
                    <h1 className={(flex?"text-2xl":"text-lg")+" lg:text-2xl font-semibold px-1"}>{title}</h1>
                    {

                        button ?
                            <button className="group rounded-sm inline-flex items-center mt-5 pl-6 border-2 bg-white text-black ease-in-out text-xs md:text-lg duration-300 hover:translate-x-4">Add to cart <ion-icon class="ml-10 px-5 py-5 bg-black text-white group-hover:text-xl ease-in-out duration-500" name="arrow-forward-sharp"></ion-icon></button>
                            : <h1 className="text-xl text-orange-500 mt-5 pb-5">{price}</h1>
                    }
                    {
                        description ? <h5 className="py-5 px-4 text-2xl text-gray-400 md:absolute md:bottom-0">{description}</h5> : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default BookItem