import { useEffect, useState, useContext } from "react";
import { ConvictionsContext } from "./ConvictionsProvider";

export const OfficerSelection = () =>{
    const {officers, FetchOfficers, setSelectedOfficer} = useContext(ConvictionsContext)
    useEffect(()=>{
        FetchOfficers()
    },[])

    return (<>
        <label for="officersearch">Search By Arresting Officer</label>
        <select name="officersearch"onChange={(event)=>{
            setSelectedOfficer(event.target.value)
        }}>
            {officers.map((officer)=>{
                return (<option value={officer.name}>{officer?.name}</option>)
            })}
        </select>
    </>)
}