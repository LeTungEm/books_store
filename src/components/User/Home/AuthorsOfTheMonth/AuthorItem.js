const AuthorItem = ({ image, title, description }) => {
    return (
        <div className="flex-col justify-center w-80">
            <div className="h-80 flex-1 rounded-full bg-gray-800 overflow-hidden">
                <img className="object-fill w-full" src={image} alt="author" />
            </div>
            <div className="text-center">
                <h1 className="text-4xl my-4 font-semibold">{title}</h1>
                <h5 className="text-2xl font-light">{description}</h5>
            </div>
        </div>
    );
}
export default AuthorItem