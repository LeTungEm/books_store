import BookItem from "../../../UI/Item/BookItem";
import HarryBook from "../../../../assets/images/books/HarryBook.jpg"
import heroAtTheFall from "../../../../assets/images/books/heroAtTheFall.jpg"
import DaughterOfTheSerpentine from "../../../../assets/images/books/DaughterOfTheSerpentine.jpg"
import TheHobbit from "../../../../assets/images/books/TheHobbit.jpg"
import DaughterOfMan from "../../../../assets/images/books/DaughterOfMan.jpg"
import DaughterOfTheDeep from "../../../../assets/images/books/DaughterOfTheDeep.jpg"
import DaughterOfTheGods from "../../../../assets/images/books/DaughterOfTheGods.jpg"

const BestSeller = () => {
    return (
        <>
            <h1 className="text-3xl text-center font-medium my-20 lg:text-5xl 2xl:text-7xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Best Sellers <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon></h1>
            <div className="grid grid-cols-2 gap-2 px-2 md:px-4 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:grid-rows-2">
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={DaughterOfMan} /></div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={heroAtTheFall} /></div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={HarryBook} /></div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={DaughterOfTheSerpentine} /></div>
                <div className="md:col-start-3 col-span-2 md:row-start-1 md:row-span-2">
                    <BookItem
                        price={"200000"}
                        contentCenter
                        description={"asd asd asda dasd asdas das asd asd asda da4d asd asdas das asd asd asda dasd asd asdas das asd asd asda dasd asd asdas das asd asd asda dasd asd asdas das "}
                        author={"kim charles"}
                        title={"Book of moon moon"}
                        rate={4.5}
                        image={DaughterOfTheGods} />
                </div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={TheHobbit} /></div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={HarryBook} /></div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={heroAtTheFall} /></div>
                <div><BookItem price={"200000"} contentCenter author={"kim charles"} title={"Book of moon moon"} rate={4} image={DaughterOfTheDeep} /></div>
            </div>
        </>
    );
}

export default BestSeller