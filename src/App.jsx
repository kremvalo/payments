import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import ProductDetail from './features/product/product_detail';
import FinalStatus from './features/finalStatus/final_status';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/finalstatus" element={<FinalStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
