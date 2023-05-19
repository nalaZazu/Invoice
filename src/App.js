import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Receipt from "./components/Receipt/Receipt";
import Example from "./components/Paste";
function App() {
  return (
    <div className="App  flex flex-nowrap flex-col justify-center">
      <BrowserRouter>
        
        <Sidebar />
        <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/example" element={<Example />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
