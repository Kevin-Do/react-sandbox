import { useState } from "react";
import { Table } from "./features/spreadsheet/Table";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 shadow-md">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/"
              className="font-semibold text-lg text-gray-200 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/spreadsheet"
              className="font-semibold text-lg text-gray-200 hover:text-white transition-colors duration-200"
            >
              Spreadsheet
            </Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/spreadsheet" element={<Table />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
