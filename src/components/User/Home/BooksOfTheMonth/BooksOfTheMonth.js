import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import book from "../../../../assets/images/books/HarryBook.jpg"
import BookItem from "../../../UI/Item/BookItem";

const BooksOfTheMonth = () => {
    return (
        <>
            <div className="flex justify-between py-14 lg:px-32">
                <h1 className="text-2xl font-medium sm:text-3xl lg:text-5xl 2xl:text-6xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Books Of The Month</h1>
                <div className="group inline-flex items-center px-6 bg-black text-white hover:text-black hover:bg-white hover:border-2 ease-in-out duration-300">SEE ALL <ion-icon class="mx-2 group-hover:translate-x-4 group-hover:text-2xl ease-in-out duration-500" name="arrow-forward-sharp"></ion-icon></div>
            </div>
            <div className="relative">
                <Swiper
                    spaceBetween={40}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        1000: {
                            slidesPerView: 2,
                        },
                        1500: {
                            slidesPerView: 3
                        }
                    }}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>
                    <SwiperSlide><BookItem key={"sdfdsfsdf"} flex button author={"kim charles"} title={"Book of moon moon"} rate={3.5} image={book} /></SwiperSlide>

                </Swiper>
                <div className="absolute w-full h-1/2 bg-yellow-50 bottom-0">&nbsp;</div>
            </div>
        </>
    );
}

export default BooksOfTheMonth