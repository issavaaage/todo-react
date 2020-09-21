import React from 'react'

function TaskFiled({onAddTask}) {

    const [text, setText] = React.useState('');

    const handleInputChange = (event) => {
        const value = event.currentTarget.value;
        setText(value);
    }

    const addTask = () => {
        if(text) {
            onAddTask(text);
            setText('');
        }
    }

    const handleKeyUp = event => {
        if(event.keyCode === 13) {
            addTask()
        }
    }

    return (
        <div className="todo__add-field">
            <input value={text} onChange={handleInputChange} onKeyUp={handleKeyUp} type="text" placeholder="Введите текст задачи..."/>
            <button onClick={addTask} className="todo__add-field-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    )
}

export default TaskFiled
