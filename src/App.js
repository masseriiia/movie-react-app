import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
        <div className="container">
            <Header/>
            <Home/>
        </div>
    </div>
  );
}

export default App;
