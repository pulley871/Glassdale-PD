import React, {useState, createContext} from "react"
import { useHistory } from "react-router-dom"

export const NoteContext = createContext()

export const NoteProvider = (props) =>{
    const [notes, setNotes] = useState([])
    const [officers, setOfficers] = useState([])
    const [criminals, setCriminals] = useState([])
    const [noteToPost, setNoteToPost] = useState({})
    const history = useHistory()
    const FetchNotes = () =>{
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then((data) => {
                setNotes(data)
            })
    }
    const FetchOfficers = () =>{
        return fetch("https://criminals.glassdale.us/officers")
                .then(response => response.json())
                .then(data => setOfficers(data))
    }
    const FetchCriminalsWithCrime = () =>{
        return fetch(`https://criminals.glassdale.us/criminals?_expand=conviction`)
                .then(response => response.json())
                .then(data => setCriminals(data))
    }
    const PostNote = ()=>{
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteToPost)
        }
        
        return fetch("http://localhost:8088/notes", fetchOption)
            .then(history.push("/notes"))
            .then(FetchNotes())
    }
    return (<NoteContext.Provider value={{
        notes, officers, criminals, FetchNotes, FetchOfficers, FetchCriminalsWithCrime, setNoteToPost, noteToPost, PostNote
    }}>
        {props.children}
    </NoteContext.Provider>)   
}