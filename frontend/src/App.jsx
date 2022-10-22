import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  if (count) {
    console.log('hello');
  }
  console.log('hello');
  return <h1>Hello React</h1>;
}
console.log('hello');

export default App;
