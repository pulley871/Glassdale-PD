import {  useEffect, useContext } from "react"
import { Note } from "./Note"
import { NoteContext } from "./NotesProvider"
import { useHistory } from "react-router"
export const NoteList = () =>{
    const {notes, FetchNotes, FetchOfficers, FetchCriminalsWithCrime}= useContext(NoteContext)
    useEffect(()=>{
        FetchNotes()
        .then(FetchOfficers())
        .then(FetchCriminalsWithCrime())
        
        
    },[])
    const history = useHistory()
    return(<>
    <button onClick={()=>history.push("/notes/casenoteform")}>Add Case Note</button>
    {notes.map((note)=>{
        return (<>{<Note selectedNote= {note}/>}</>)
    })}</>)
}