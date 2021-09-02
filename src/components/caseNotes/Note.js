import { NoteContext } from "./NotesProvider"
import { useContext, useState, useEffect } from "react"

export const Note = ({selectedNote}) =>{
    const {officers, criminals} = useContext(NoteContext)
    const [foundOfficer, setFoundOfficer] = useState([])
    const [foundCriminal, setFoundCriminal] = useState([])
    const foundCriminalFunc = (arr)=>{
        const foundItem = arr.find((criminal)=> criminal.id === selectedNote.criminalId)
        return setFoundCriminal(foundItem)
    }
    const foundOfficerFunc = (arr)=>{
        const foundItem = arr.find((officer)=> officer.id === selectedNote.officerId)
        return setFoundOfficer(foundItem)
    }
    useEffect(()=>{
        foundCriminalFunc(criminals)
        foundOfficerFunc(officers)
    },[criminals])
    return (<div>
                <h4>{foundOfficer?.name}</h4>
                <ul>
                    <li>{foundCriminal?.name}</li>
                    <li>{selectedNote?.description}</li>
                    <li>{selectedNote?.date}</li>
                </ul>
    </div>)
}