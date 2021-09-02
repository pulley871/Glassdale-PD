import { useContext, useEffect } from "react"
import { NoteContext } from "./NotesProvider"
export const NoteForm = ()=>{
    const {officers, criminals, noteToPost, setNoteToPost, FetchOfficers, FetchCriminalsWithCrime, PostNote} = useContext(NoteContext)
    useEffect(()=>{
        FetchOfficers()
        FetchCriminalsWithCrime()
    },[])
    
    return(<><h1>New Case Note</h1>
        <fieldset>
            <div>
                <label for="officersearch">Select Officer </label>
                <select name="officersearch"onChange={(event)=>{
                let copy = {...noteToPost}
                copy.officerId = parseInt(event.target.value)
                setNoteToPost(copy)
                }}>
                    {officers.map((officer)=>{
                        return (<option value={officer.id}>{officer?.name}</option>)
                    })}
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label for="criminalsearch">Select Convict </label>
                <select name="criminalsearch"onChange={(event)=>{
                let copy = {...noteToPost}
                copy.criminalId = parseInt(event.target.value)
                setNoteToPost(copy)
                }}>
                    {criminals.map((criminal)=>{
                        return (<option value={criminal.id}>{criminal?.name}</option>)
                    })}
                </select>
            </div>
        </fieldset>
        <fieldset>
            <label for="dateselection">Select Date </label>
            <input type="date" name="dateselection" onChange={(event)=>{
                let copy = {...noteToPost}
                copy.date = event.target.value
                setNoteToPost(copy)
            }}></input>
        </fieldset>
        <fieldset>
            <label for="notedescription">Note Details</label><br></br>
            <textarea name="notedescription"  rows="4" cols="50"onChange={(event)=>{
                let copy = {...noteToPost}
                copy.description = event.target.value
                setNoteToPost(copy)
            }}></textarea>
        </fieldset>
        <button onClick={()=> PostNote()}>Submit Case Note</button>
    </>)
}