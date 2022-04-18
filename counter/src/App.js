import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'


function App() {


  const LOCAL_STORAGE_KEY = "counter"

  let [counter, setCounter] = useState(0)
  let [theme, setTheme] = useState('red')

  useEffect(() => {
    const loadedCounter = Number(localStorage.getItem(LOCAL_STORAGE_KEY))
    
    const odd = Math.abs(loadedCounter) % 2 === 1
    const color = odd ? 'blue' : 'red'

    if(loadedCounter != 0){
      setTheme(color)
    }
    
    console.log(loadedCounter + " is " + odd)

    if(loadedCounter) setCounter(loadedCounter)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, counter)
  }, [counter])

  function increment() {
    setCounter(oldState => {
      const newVal = oldState + 1
      updateBackground(newVal)
      return newVal
    })
  }
  function decrement() {
    setCounter(oldState => {
      const newVal = oldState - 1
      updateBackground(newVal)
      return newVal
    })
  }

  function updateBackground(currCounter){
    setTheme(oldState => {
      const odd = Math.abs(currCounter) % 2 === 1
      
      return odd ? 'blue' : 'red'
    })
  }

  return (
    <React.StrictMode>
      <div className="App" style={{backgroundColor: theme}}>
        <button onClick={increment}>+</button>
        <h2 className="Counter">{counter}</h2>
        <button onClick={decrement}>-</button>
      </div>
    </React.StrictMode>
  );
}

export default App;
