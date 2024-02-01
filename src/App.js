import "./App.css";

import HomePage from "./pages/HomePage";
import Registration from "./components/Registration";
import FashionOption from "./components/FashionOption";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<HomePage/>} path="/home"/>
        
      </Routes>
      
      <Registration />
      {/* <FashionOption/> */}
    </BrowserRouter>
  );
}

export default App;
