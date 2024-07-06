import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./RecommendedVideo";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (

    
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<><div className="app-page"><Sidebar/> <RecommendedVideo/></div></>}/>
        <Route path="/search/:searchTerm" element={<><div className="app-page"><Sidebar/> <SearchPage/></div></>}/>
      </Routes>
      </Router>
      
    </div>  
     
  );
}

export default App;
