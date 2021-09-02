import { useEffect, useState, useContext } from "react";
import { ConvictionsContext } from "./ConvictionsProvider";

export const ConvictionsSelection = () =>{
    const {crimes, FetchCrimes, setSelectedCrime} = useContext(ConvictionsContext)
    useEffect(()=>{
        FetchCrimes()
    },[])

    return (<>
    <label for="crimesearch">Search By Crime</label>
        <select name="crimesearch"onChange={(event)=>{
            setSelectedCrime(event.target.value)
        }}>
            {crimes.map((crime)=>{
                return (<option value={crime.name}>{crime?.name}</option>)
            })}
        </select>
    </>)
}