import { Route } from "react-router";
import { ConvictionsProvider } from "./criminals/ConvictionsProvider";
import { Criminals } from "./criminals/Criminals";
import { Officers } from "./officers/Officers";
import { NoteList } from "./caseNotes/NoteList";
import { NoteForm } from "./caseNotes/NoteForm";
import { NoteProvider } from "./caseNotes/NotesProvider";
import { WitnessProvider } from "./witnesses/WitnessProvider";
import { Witness } from "./witnesses/Witness";
export const ApplicationViews = ()=>{
    return (
        <>
        <ConvictionsProvider>

            <Route exact path = "/convictions">
                //add in the convictions component
            </Route>

            <Route exact path = "/criminals">
                <Criminals />
            </Route>
        </ConvictionsProvider>
        <NoteProvider>
            <Route exact path = "/notes">
                <NoteList />
            </Route>
            
            <Route path = "/notes/casenoteform">
                <NoteForm />
            </Route>
        </NoteProvider>
            <Route exact path = "/officers">
                <Officers />
            </Route>
        <WitnessProvider>
            <Route exact path = "/witnesses">
                <Witness />
            </Route>
        </WitnessProvider>
        </>
    )
}