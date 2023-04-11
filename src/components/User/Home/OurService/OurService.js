import OurServiceItem from "./OurServiceItem";

const OurService = () => {
    return (
        <>
            <hr className='border-gray-400 mt-20'/>
            <div className='grid grid-cols-1 justify-center gap-10 py-8 px-14 md:grid-cols-2 md:gap-20 md:py-16 xl:grid-cols-4'>
                <OurServiceItem icon={"car-outline"} title={"Free Delivery"} description={"For all orders over $99"} />
                <OurServiceItem icon={"document-text-outline"} title={"Expert Customer Service"} description={"For a shopping experience"} />
                <OurServiceItem icon={"mail-open-outline"} title={"Amazing Value"} description={"We offer compertitive prices"} />
                <OurServiceItem icon={"card-outline"} title={"Safe Payment"} description={"100% secure payment"} />
            </div>
            <hr className='border-black'/>
        </>
    );
}

export default OurService