import OurServiceItem from "./OurServiceItem";

const OurService = () => {
    return (
        <>
            <hr className='border-gray-400 mt-2'/>
            <div className='flex justify-bettween gap-10 mx-24'>
                <OurServiceItem icon={"car-outline"} title={"Me and my talent"} description={"We take care of you with our hearts"} />
                <OurServiceItem icon={"document-text-outline"} title={"Me and my talent"} description={"We take care of you with our hearts"} />
                <OurServiceItem icon={"mail-open-outline"} title={"Me and my talent"} description={"We take care of you with our hearts"} />
                <OurServiceItem icon={"card-outline"} title={"Me and my talent"} description={"We take care of you with our hearts"} />
            </div>
            <hr className='border-black'/>
        </>
    );
}

export default OurService