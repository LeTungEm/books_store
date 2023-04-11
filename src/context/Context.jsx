import { useState, createContext } from "react";

const Context = createContext();

function Provider({children}){

    const [search, setSearch] = useState(0);

    const homeContext = {
        search,
        setSearch
    }

    const [choicedPublish, setChoice] = useState([]);

    const shopContext = {
        choicedPublish,
        setChoice
    }

    return (
        <Context.Provider value={{homeContext, shopContext}}>
            {children}
        </Context.Provider>
    );
}

export {Context, Provider}