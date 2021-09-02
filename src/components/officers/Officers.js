import { useEffect, useState } from "react";
import { FetchOfficers } from "../dataprovider/Provider";

export const Officers = ()=>{
    const [officers, setOfficers] = useState([])

    useEffect(()=>{
        FetchOfficers()
        .then(data => setOfficers(data))
    }, [])

    return (<>
    {console.table(officers)}
        {officers.map(officer =>{
            return(<p>{officer.name}</p>)
        })}
    </>)
}