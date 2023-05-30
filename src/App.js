import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  
  //helper functions 
  function addItem (){
    if(!newItem){
      alert("Please enter a task")
      return;
    }

    const item = { 
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  function toggleDone(id) {
    setItems((oldList) =>
      oldList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done, // Toggle the "done" property
          };
        }
        return item;
      })
    );
  }
  

  return (

    <div className='container'>
      <div className='content'>
        {/* header */}
        <h1> To Do List </h1>

        {/* input text and input button*/}

        <input type="text" placeholder="Enter your task" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button onClick={()=> addItem()}>Add</button>
        
        {/* display to do list */}
        <ul>
  {items.map((item) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggleDone(item.id)}
        />
        <span className={item.done ? "done" : ""}>{item.value}</span>
        <button onClick={() => deleteItem(item.id)}>❌</button>
      </li>
    );
  })}
</ul>
        </div>
    </div>
  );
}

export default App;
