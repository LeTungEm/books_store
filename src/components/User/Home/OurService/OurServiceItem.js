const OurServiceItem = ({title, description, icon}) => {
    return (
        <div className="flex items-center">
            <ion-icon class="text-4xl" name={icon}></ion-icon>
            <div>
                <h1 className="text-lg">{title}</h1>
                <h4>{description}</h4>
            </div>
        </div>
    );
}

export default OurServiceItem