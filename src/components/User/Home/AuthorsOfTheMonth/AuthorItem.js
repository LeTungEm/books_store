const AuthorItem = ({ image, title, description }) => {
    return (
        <div className="flex-col justify-center md:w-72">
            <div className="h-52 w-52 mx-auto flex-1 rounded-full bg-gray-800 overflow-hidden md:w-full md:h-72">
                <img className="object-fill w-full" src={image} alt="author" />
            </div>
            <div className="text-center">
                <h1 className="text-lg my-4 font-semibold md:text-2xl xl:text-4xl">{title}</h1>
                <h5 className="text-base font-light md:text-xl xl:text-2xl">{description}</h5>
            </div>
        </div>
    );
}
export default AuthorItem