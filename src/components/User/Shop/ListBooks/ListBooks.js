import BookItem from "../../../UI/Item/BookItem";
import HarryBook from "../../../../assets/images/books/HarryBook.jpg"
import heroAtTheFall from "../../../../assets/images/books/heroAtTheFall.jpg"
import DaughterOfTheSerpentine from "../../../../assets/images/books/DaughterOfTheSerpentine.jpg"
import DaughterOfMan from "../../../../assets/images/books/DaughterOfMan.jpg"
import { useContext } from "react";
import { Context } from "../../../../context/Context";

const ListBooks = () => {
    const { shopContext } = useContext(Context);
    const { choicedPublish } = shopContext;

    let filterBook = listBook;

    if (choicedPublish.length) {
        filterBook = listBook.filter(book => {
            if (choicedPublish.includes(book.type.toString())) {
                return book;
            }
            return 0;
        });
    }
    return (
        <div className="md:h-[100vh] flex-1 md:overflow-y-auto grid grid-cols-2 gap-5 scrollbar-hide ml-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
                filterBook.map(({ price, author, title, rate, image }) =>
                    <BookItem key={title} price={price} contentCenter author={author} title={title} rate={rate} image={image} />
                )
            }
        </div>
    );
}
export default ListBooks

export let listBook = [
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon1",
        rate: 4,
        image: DaughterOfMan,
        type: "fantasy"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon2",
        rate: 4,
        image: heroAtTheFall,
        type: "fantasy"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon3",
        rate: 4,
        image: HarryBook,
        type: "travel"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon4",
        rate: 4,
        image: DaughterOfTheSerpentine,
        type: "ficture"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon5",
        rate: 4,
        image: DaughterOfMan,
        type: "fantasy"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon6",
        rate: 4,
        image: heroAtTheFall,
        type: "fantasy"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon7",
        rate: 4,
        image: HarryBook,
        type: "travel"
    },
    {
        price: "200000",
        author: "kim charles",
        title: "Book of moon moon8",
        rate: 4,
        image: DaughterOfTheSerpentine,
        type: "ficture"
    },
]