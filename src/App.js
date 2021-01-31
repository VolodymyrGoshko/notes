import React  from 'react'
import './App.css';
import NotesList from "./Notes/NotesList";
import Context from "./context";
import AddNotes from "./Notes/AddNotes";

function App() {
    const [notes, setNotes] = React.useState([]);

    function toggleNote(id) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                note.completed = !note.completed
            }
            return note
        }))
    }

    function removeNote(id) {
        setNotes(notes.filter(note => note.id !== id))
    }

    function addNote(title) {
        setNotes(notes.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeNote}}>
            <div className='wrapper'>
                <h1 className='wrapper-title'>Notes</h1>
                <AddNotes onCreate={addNote}/>
                {notes.length ? <NotesList notes={notes} onToggle={toggleNote}/> : <p className='p'>No notes!</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
