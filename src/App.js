import React  from 'react'
import './App.css';
import NotesList from "./Nodes/NotesList";
import Context from "./context";

function App() {
    const [notes, setNotes] = React.useState([
        {id:1, completed:false, title:'Зробити дз з курсів'},
        {id:2, completed:false, title:'Повчити англ мову'},
        {id:3, completed:false, title:'Піти в магазин'}
    ]);

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

    return (
        <Context.Provider value={{removeNote}}>
            <div className='wrapper'>
                <h1 className='wrapper-title'>Notes</h1>
                {notes.length ? <NotesList notes={notes} onToggle={toggleNote}/> : <p>No notes!</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
