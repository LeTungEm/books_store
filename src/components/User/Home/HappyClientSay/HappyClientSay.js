import ClientSayItem from "./ClientSayItem";

const HappyClientSay = () => {
    return (
        <>
            <h1 className="text-3xl text-center font-medium my-20 lg:text-5xl 2xl:text-7xl"><ion-icon class="text-orange-500 -translate-y-5" name="sparkles"></ion-icon> Happy Client Say ! <ion-icon class="text-orange-500 translate-y-8" name="sparkles"></ion-icon></h1>
            <div className="grid grid-cols-3 gap-10 md:px-10 2xl:px-24">
                <ClientSayItem rate={4.6} author={"Harry Potter"} dateTime={"5 years ago"} title={"Book is so interesting"} description={"Làm thế nào để chúng ta làm chlý sự kiện vào các sự kiện này và event.preventDefault() trong đó, thì cuộn sẽ không bắt đầu.ngăn việc ra cuộn, ví dụ sự kiện keydown ch"}/>
                <ClientSayItem rate={3.6} author={"Harry Potter"} dateTime={"5 years ago"} title={"Book is so interesting"} description={"Làm thế nào để chún trình nghe onscroll, vì nó kích hoạt sau ta có thể ngăn việc ra cuộn, ví dụ sự kiện keydown cho pageUp và pageDown. Nếu chúng ta thêm một trình xử lý sự kiện vào các sự kiện này và event.preventDefault() trong đó, thì cuộn sẽ không bắt đầu."}/>
                <ClientSayItem rate={5} author={"Harry Potter"} dateTime={"5 years ago"} title={"Book is so interesting"} description={"Làm thế cho một cái gì đó không thể kiểm soát được? Chúng ta không thể ngtrình nghe onscroll, vì nó kích hoạt sau ta có thể o pageUp và pageDown. Nếu chúng ta thêm một trình xử lý sự kiện vào các sự kiện này và event.preventDefault() trong đó, thì cuộn sẽ không bắt đầu."}/>
            </div>
        </>
    );
}
export default HappyClientSay