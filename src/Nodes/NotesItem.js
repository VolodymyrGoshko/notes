import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

function NotesItem(props) {
    let {item, index, onChange} = props;
    const {removeNote} = useContext(Context)
    const classes = []

    if (item.completed) {
        classes.push('done')
    }

    return (
        <li className='li'>
            <span className={classes.join(' ')}>
                <input
                    className='input'
                    type='checkbox'
                    checked={item.completed}
                    onChange={() =>
                        onChange(item.id)
                    }/>
                <strong>{index + 1}</strong>
                &nbsp;
                {item.title}
            </span>
            <button className='btn' onClick={removeNote.bind(null, item.id)}>&times;</button>
        </li>
    )
}

NotesItem.propTypes = {
    item:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}

export default NotesItem
