import React, { useState, createContext } from "react"

export const ConvictionsContext = createContext()

export const ConvictionsProvider = (props) =>{
    const [criminals, setCriminals] = useState([])
    const [crimes, setCrimes] = useState([])
    const [selectedCrime, setSelectedCrime] = useState([])
    const [selectedOfficer, setSelectedOfficer] = useState([])
    const [officers, setOfficers] = useState([])
    const {alibi, setalibi} = useState({})
     const FetchCriminalsByCrime = () =>{
        return fetch(`https://criminals.glassdale.us/criminals?conviction=${selectedCrime}`)
                .then(response => response.json())
                .then(data => setCriminals(data))
    }
    const FetchCriminalsByOfficer = () =>{
        return fetch(`https://criminals.glassdale.us/criminals?arrestingOfficer=${selectedOfficer}`)
                .then(response => response.json())
                .then(data => setCriminals(data))
    }
    const FetchCrimes = () => {
        return fetch("https://criminals.glassdale.us/crimes")
            .then(res => res.json())
            .then((data) => {
                setCrimes(data)
            })
    }
    const FetchOfficers = () =>{
        return fetch("https://criminals.glassdale.us/officers")
                .then(response => response.json())
                .then(data => setOfficers(data))
    }   
    return (<ConvictionsContext.Provider value={{
        alibi, setalibi,criminals, FetchCriminalsByCrime, FetchCriminalsByOfficer, crimes, FetchCrimes, setSelectedCrime,setSelectedOfficer, selectedCrime,selectedOfficer, FetchOfficers, officers
    }}>
        {props.children}
    </ConvictionsContext.Provider>)
}