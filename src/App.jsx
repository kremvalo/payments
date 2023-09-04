import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import ProductDetail from './features/product/product_detail';
import CreditCardInfo from './features/creditCardInfo/credit_card_info_screen';
import Summary from './features/summary/summary';
import FinalStatus from './features/finalStatus/final_status';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/creditcardinfo" element={<CreditCardInfo />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/finalstatus" element={<FinalStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
