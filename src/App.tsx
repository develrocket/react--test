import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import "./assets/scss/app.scss";

import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
