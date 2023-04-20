import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <header>Sarah's Todo List</header>
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" onChange={handleInput} />
	<button type="submit" className="todo-button">Add</button>
      </form>
    </div>
  );
}

export default App;
