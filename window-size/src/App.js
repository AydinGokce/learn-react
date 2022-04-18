import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {


  const [windowWidth, setWindowWidth] = useState([])

  function handleResize(){
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

  }, [])


  return (
    <div className="App">
      {windowWidth}
    </div>
  );
}

export default App;
