import React from 'react'

function ListItem({text, completed, index, onToggleCompleted, onRemoveTask}) {

    const toggleCompleted = () => {
        onToggleCompleted(index);
    };

    const removeTask = () => {
        if(global.confirm("Действительно удалить заметку?")) {
            onRemoveTask(index);
        }
    };

    return (
        <div className={`todo__list-item ${completed ? 'todo__list-item--completed' : ''}`}>
            <div onClick={toggleCompleted} className="todo__list-item-check">
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <p>{text}</p>
            <div onClick={removeTask} className="todo__list-item-remove">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default ListItem

