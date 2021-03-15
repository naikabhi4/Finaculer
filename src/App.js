import React from "react";
import './App.css';
import Barchart from "./Barchart";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import RightCard from "./RightCard";


function App() {
  return (
    <div className="App">
      
      <Sidebar/>
      <Barchart/>
      <RightCard/>
      </div>
     
  );
}

export default App;
