import React, {useContext,useState} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

function NotesItem(props) {
    let {item, index, onChange} = props;
    const {removeNote} = useContext(Context)
    const classes = []
    const [counter,setCounter] = useState(0);

    if (item.completed) {
        classes.push('done')
    }

    function increment() {
        setCounter(counter + 1);
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
            <span className='likes'>
                <button id='btn-like' onClick={increment}>
                    <i className="far fa-heart"></i>
                </button>
                <span className='counter'>{counter}</span>
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
