import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../context/Context";

const Published = () => {

    const [published, setPublished] = useState(false);
    const { shopContext } = useContext(Context);
    const { choicedPublish, setChoice } = shopContext;
    const changeChoice = (e) => {
        if (!choicedPublish.includes(e.target.value.toString()) && e.target.checked) {
            setChoice(pre => [...pre, e.target.value])
        } else {
            setChoice(pre => pre.filter(choice => {
                if (choice === e.target.value.toString())
                    return 0;
                return choice;
            }
            ))
        }
    }
    console.log("arr: ", choicedPublish);
    useEffect(() => {
        return () => setChoice([]);
    },[])

    return (
        <>
            <ion-icon onClick={() => setPublished(!published)} class="md:hidden text-2xl" name="list-outline"></ion-icon>
            <div className={(published ? "bg-white translate-y-0 opacity-100" : " translate-y-full") + " opacity-0 z-20 fixed left-0 w-full h-[100vh] duration-500 transition-transform flex-none md:opacity-100 md:translate-y-0 md:relative md:w-auto md:block"}>
                <ul className="md:w-52 text-center py-5 h-full overflow-scroll scrollbar-hide hover:[&>*]:text-orange-700 border-2">
                    <li onClick={() => setPublished(!published)} className="bg-orange-300 md:hidden">filter</li>
                    <li><input onChange={changeChoice} value={"fantasy"} type="checkbox" /> fantasy</li>
                    <li><input onChange={changeChoice} value={"travel"} type="checkbox" /> travel</li>
                    <li><input onChange={changeChoice} value={"ficture"} type="checkbox" /> ficture</li>
                    <li><input onChange={changeChoice} value={"4"} type="checkbox" /> 4</li>
                    <li><input onChange={changeChoice} value={"5"} type="checkbox" /> 5</li>
                </ul>
            </div>
        </>
    );
}

export default Published