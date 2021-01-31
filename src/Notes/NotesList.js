import React from 'react'
import PropTypes from 'prop-types'
import NotesItem from "./NotesItem";

function NotesList(props) {
    let {notes, onToggle} = props;
    return(
      <ul className='nodes-list'>
          {
              notes.map((note,index) => <NotesItem item={note} key={note.id} index={index} onChange={onToggle}/>)
          }
      </ul>
    );
}

NotesList.propTypes = {
    notes:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default NotesList
