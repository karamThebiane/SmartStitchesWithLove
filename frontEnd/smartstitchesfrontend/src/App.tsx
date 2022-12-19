import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/HomePage/HomePage";
import WhySmart from "./Pages/WhySmart/WhySmart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
