import { useEffect, useState, useContext } from "react";
import ModalExample from "./alibis/Alibis";
import { ConvictionsContext } from "./ConvictionsProvider";
import { ConvictionsSelection } from "./ConvictionsSelect";
import { OfficerSelection } from "./OfficersSelect";



export const Criminals = ()=>{
    const {criminals, FetchCriminalsByCrime,FetchCriminalsByOfficer, selectedCrime, selectedOfficer} = useContext(ConvictionsContext)
    
    useEffect(()=>{
        FetchCriminalsByCrime()
        console.log("conviction changed")
    },[selectedCrime ])
    useEffect(()=>{
        FetchCriminalsByOfficer()
        console.log("conviction changed")
    },[selectedOfficer])
    
    const dateConverter = (date) =>{
        return new Date(date).toLocaleDateString('en-US')
    }
    return (<>{console.log(criminals)}
        <ConvictionsSelection /><br></br>
        <OfficerSelection />
        {criminals.map((criminal) => {
            return (<div>
                <ul>{criminal?.name}
                    <li>Age: {criminal.age}</li>
                    <li>Conviction: {criminal.conviction}</li>
                    <li>Incarceration Date : {dateConverter(criminal.incarceration.start)}</li>
                </ul>
                <ModalExample criminals={criminal}/>
            </div>)
        })}
    </>)
}