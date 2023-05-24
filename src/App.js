import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Receipt from "./components/Receipt/Receipt";
import Example from "./components/Paste";

import { Provider } from 'react-redux'
import Info from "./Info";
import { store } from "./state/store";
import Invoicelist from "./components/Receipt/ReceiptList";

function App() {
  return (
    <div className="App  flex flex-nowrap flex-col justify-center">
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/receipt/:id" element={<Receipt />} />
          <Route path="/example" element={<Example />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
    
  );
}

export default App;
