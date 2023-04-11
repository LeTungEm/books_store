const OurServiceItem = ({title, description, icon}) => {
    return (
        <div className="flex items-center gap-5">
            <ion-icon class="text-3xl md:text-5xl" name={icon}></ion-icon>
            <div>
                <h1 className="text-base md:text-xl">{title}</h1>
                <h4 className="text-xs md:text-base text-gray-500">{description}</h4>
            </div>
        </div>
    );
}

export default OurServiceItem