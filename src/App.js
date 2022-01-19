import React from "react";
import './App.css';
import List from "./components/list/List";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import Search from "./components/search/Search";

function App() {
  return (
      <div className="container">
          <div className="d-flex justify-content-between">
        <h2 className="pt-4 pb-1 text">Книга контактов</h2>
          <Search/>
          </div>
          <hr/>
          <div>
          <List/>
          </div>
          <ToastContainer />
      </div>
  );
}

export default App;
