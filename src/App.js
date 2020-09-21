import React from 'react';

import {ListItem, TaskField} from './components';

function App() {

  const [tasks, setTasks] = React.useState([
    {
      text: "Изучить ReactJS",
      completed: true
    },
    {
      text: "Разработать TODO на ReactJS",
      completed: false
    }
  ])

  const onToggleCompleted = (index)=> {
    setTasks(prevTasks => {
      return prevTasks.map((task, curId) => {
        if (index === curId) {
          return {
            ...task,
            completed: !task.completed
          };
        };
        return task;
      });
    })
  };

  const onRemoveTask = (index) => {
    setTasks(prevTasks => {
      return prevTasks.filter((_, curId) => {
        if (index !== curId) {
          return true;
        }
        return false;
      })
    });
  };

  const onAddTask = (text) => {
    setTasks(prevTasks => {
      return [
        ...prevTasks,
        {
          text,
          completed: false
        }
      ]
    })
  }

  return (
    <div className="todo">
        <div className="todo__header">
            <h4>Список задач</h4>
        </div>
        <TaskField onAddTask={onAddTask} />
        <div className="todo__list">
            {
              tasks.map((task, index) => (
                <ListItem 
                    key={index}
                    index={index}
                    text={task.text} 
                    completed={task.completed} 
                    onToggleCompleted={onToggleCompleted}
                    onRemoveTask={onRemoveTask}
                />
              ))
            }
        </div>
    </div>
  );
}

export default App;
