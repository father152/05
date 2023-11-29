import React from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Counter from './Components/Counter';
import Discovery from './Components/Content/LeftSide/Discovery'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Discovery />  
    <Header />
      <Content />
    </div>
  );
}

export default App;
