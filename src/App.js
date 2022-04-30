import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'   
import AddTask from './components/AddTask';


function App() {
  const [showaddtask, setshowaddtask] = useState(false)
  const [tasks, settasks] = useState([
    {
        id: 1 ,
        text:'Doctors Appointment',
        day: 'feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text:'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]);

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() 
  * 10000) + 1
  const newTask = {id,...task}
  settasks([...tasks,newTask])
};

// Delete Task
const deleteTask = (id) => {
  settasks(tasks.filter((task) => 
    task.id !== id))
};

//toggle reminder
const toggleReminder = (id) => {
 settasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder} : task 
  )
 )
};

  return (
    <div className="container">
      <Header onAdd={() => setshowaddtask(!showaddtask)}
      showAdd={showaddtask} />
      {showaddtask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/> ) 
      : 
      (' No Tasks to Show')} 
      
    </div>
  )
}

export default App;
