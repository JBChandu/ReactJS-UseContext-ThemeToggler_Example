import React,{useState} from 'react';
import './App.css';
import Card from './Components/Card';
import ThemeToggler from './Components/ThemeToggler';
import Context from './Context/Context';


function App() {

const defTheme=useState("light");

  return (
    <>
    <Context.Provider value={defTheme}>
    <ThemeToggler/>
    <Card/>
    </Context.Provider>
    </>
  );
}

export default App;



