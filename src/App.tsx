import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/general/Header";
import Home from "./pages/Home";
import A11y from "./pages/A11y";
import About from "./pages/About";
import Agile from "./pages/Agile";
import MobRules from "./pages/agile/MobRules";
import { LessonsLearned } from "./pages/agile/LessonsLearned";
import Football from "./pages/Football";
import ReactPage from "./pages/React";

function App() {
  return (
    <BrowserRouter>
      <Header site="burtware.com" />
      <div className="container mt-4">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a11y" element={<A11y />} />
            <Route path="/about" element={<About />} />
            <Route path="/agile" element={<Agile />} />
            <Route path="/mobrules" element={<MobRules />} />
            <Route path="/lessonslearned" element={<LessonsLearned />} />
            <Route path="/football" element={<Football />} />
            <Route path="/react" element={<ReactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
