import { useState, createContext  } from "react";

export const WitnessContext = createContext()

export const WitnessProvider = (props) =>{
    const [witnesses, setWitness] = useState([])
    const FetchWitnesses = ()=>{

        return fetch("https://criminals.glassdale.us/witnesses")
            .then(res => res.json())
            .then((data) => {
                setWitness(data)
            })
    }
    return (<WitnessContext.Provider value={{
        witnesses, FetchWitnesses
    }}>
        {props.children}
    </WitnessContext.Provider>)
}