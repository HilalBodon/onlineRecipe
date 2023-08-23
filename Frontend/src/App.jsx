import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import MainPage from "./components/MainPage";
import "./App.css";


function App() {


  return (
    <div className="App h-full monster ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MainPage" element={<MainPage />} />

      </Routes>
      </div>
  );
}

export default App;
