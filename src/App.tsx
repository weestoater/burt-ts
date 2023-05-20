import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import Home from "./pages/Home";
import A11y from './pages/A11y';
import About from './pages/About';
import Agile from './pages/Agile';
import Biking from './pages/Biking';
import Football from './pages/Football';
import ReactPage from './pages/React';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a11y" element={<A11y />} />
          <Route path="/about" element={<About />} />
          <Route path="/agile" element={<Agile />} />
          <Route path="/biking" element={<Biking />} />
          <Route path="/football" element={<Football />} />
          <Route path="/react" element={<ReactPage />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
