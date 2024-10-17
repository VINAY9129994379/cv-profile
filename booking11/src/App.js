import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import List from './Pages/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hotels" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
