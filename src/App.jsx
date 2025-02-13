import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Proposal from './Pages/proposal';
import ConfirmReject from './Pages/confirmReject';
import Confirm from './Pages/confirm';
import Accepted from './Pages/accepted';

function App() {
  return (
    <BrowserRouter basename="/valentine">
      <Routes>
        <Route path="/" element={<Proposal />} />
        <Route path="/proposal/confirmReject" element={<ConfirmReject />} />
        <Route path="/proposal/confirm" element={<Confirm />} />
        <Route path="/proposal/accepted" element={<Accepted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;