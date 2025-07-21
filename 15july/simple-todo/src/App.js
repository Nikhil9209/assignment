import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
