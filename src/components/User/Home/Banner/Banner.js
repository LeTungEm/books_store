import logo from '../../../../assets/images/logo/logo.jpg'
import banner from '../../../../assets/images/banner/banner2.jpg'


const Banner = () => {
    return (
        <>
            <div style={{ "backgroundImage": `url(${banner})` }} className="bg-no-repeat bg-cover bg-center border-t border-black h-[200px] lg:h-[500px]">
                {/* <div className="w-1/2 bg-top font-normal mx-auto justify-center items-center mt-16 text-2xl md:text-3xl lg:text-6xl">
                    <div>What Book Are <br /> You Looking For?</div>
                    <div className="mt-5">Save up 50% OFF</div>
                    <button className="inline-flex text-lg lg:text-3xl mt-4 items-center bg-gray-300 pl-6 hover:font-bold group hover:translate-x-4 duration-500">Shop Now <ion-icon class="px-4 py-4 ml-5 lg:ml-20 bg-black text-white group-hover:text-4xl duration-1000" name="arrow-forward-sharp"></ion-icon></button>
                </div> */}
                {/* <div className="flex justify-center pt-4">
                    <img className='object-contain xl:object-cover w-auto h-full' src={banner} alt='banner' />
                </div> */}
            </div>
            <hr className='border-black border-2'/>
            <div className='grid grid-cols-5 gap-3 py-2 md:gap-5 md:px-20 md:py-4 xl:gap-x-20 xl:px-56 mt-2'>
                <img className='object-contain h-16 lg:h-32' src={logo} alt='' />
                <img className='object-contain h-16 lg:h-32' src={logo} alt='' />
                <img className='object-contain h-16 lg:h-32' src={logo} alt='' />
                <img className='object-contain h-16 lg:h-32' src={logo} alt='' />
                <img className='object-contain h-16 lg:h-32' src={logo} alt='' />
            </div>
            <hr className='border-black' />

        </>
    );
}

export default Banner