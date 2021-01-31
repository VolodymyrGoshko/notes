import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddNotes({onCreate}) {
    const [value,setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <input
                className='input-form'
                value={value}
                onChange={event => setValue(event.target.value)}
                placeholder='Enter your note'
            />
            <button className='btn-form' type='submit'>Add Note</button>
        </form>
    )
}

AddNotes.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddNotes
