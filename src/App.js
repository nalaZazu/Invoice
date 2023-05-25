import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Receipt from "./components/Receipt/Receipt";
import Example from "./components/Paste";
import { Provider } from "react-redux";
import Info from "./Info";
import { store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
function App() {
  return (
    <div className="App  flex flex-nowrap flex-col justify-center">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/receipt/:id" element={<Receipt />} />
              <Route path="/example" element={<Example />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
