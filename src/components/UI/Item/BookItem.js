import Rating from "../Library/Rating";

const BookItem = ({ image, rate = 5, author, title, price, description, bookId, flex, button, contentCenter }) => {
    
    price = price?Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price):"";
    
    return (
        <div className={(flex ? "pr-4" : "") + "border relative w-full h-full sm:p-0"}>
            <div className={(flex ? "flex lg:h-[450px]" : "") + " [&>*]:flex-1 h-full"}>
                <div>
                    {/* book image */}
                    <img className="w-full h-full object-fill" src={image} alt="item book of the moon"></img>
                </div>
                <div className={(contentCenter ? "text-center" : "pl-5") + " my-auto"}>
                    {/* Rate */}
                    <div className={(contentCenter ? "justify-center" : "") + " flex items-center text-gray-400 my-5"}>
                        <Rating rate={rate}/>
                        ({rate} reviews)
                    </div>
                    <h3 className="text-gray-700">By: {author}</h3>
                    <h1 className="text-4xl">{title}</h1>
                    {
                        button ?
                            <button className="inline-flex text-sm md:text-lg mt-5 items-center border border-black pl-6 hover:translate-x-4 duration-500">Add to cart <ion-icon class="px-4 py-3 md:py-6 ml-10 bg-black text-white" name="arrow-forward-sharp"></ion-icon></button>
                            : <h1 className="text-4xl text-orange-500 mt-5 pb-5">{price}</h1>
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