import AuthorItem from "./AuthorItem";
import image from "../../../../assets/images/authors/2.jpg"
import image2 from "../../../../assets/images/authors/1.jpg"

const AuthorsOfTheMonth = () => {
    return (
        <>
            <h1 className="text-3xl text-center font-medium mt-32 lg:text-5xl 2xl:text-7xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Authors Of The Month <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon></h1>
            <h5 className="pt-5 text-2xl text-center text-gray-600">asdnsndsdjj adnkasd asdasds asdsads </h5>
            <div className="flex flex-wrap justify-center gap-5 lg:gap-16 mt-20">
                <AuthorItem image={image} title={"author"} description={"asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"} />
                <AuthorItem image={image2} title={"author"} description={"asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"} />
                <AuthorItem image={image} title={"author"} description={"asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"} />
                <AuthorItem image={image2} title={"author"} description={"asndjsd asdjsad asdsd asdjsad asdsd asdjsad asdsd asdjsad asdsd"} />
            </div>
        </>
    );
}
export default AuthorsOfTheMonth