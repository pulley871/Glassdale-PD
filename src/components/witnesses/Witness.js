import { useContext, useEffect } from "react"
import { WitnessContext } from "./WitnessProvider"

export const Witness = () =>{
    const {witnesses , FetchWitnesses} = useContext(WitnessContext)
    useEffect(()=>{
        FetchWitnesses()
    },[])
    return (<>{witnesses.map((witness)=>{
        return (<div><h3>{witness?.name}</h3><p>{witness?.statements}</p></div>)
    })}</>)
}