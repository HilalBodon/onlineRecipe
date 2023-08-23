import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

import "./App.css";


function App() {


  return (
    <div className="App h-full monster ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </div>
  );
}

export default App;
