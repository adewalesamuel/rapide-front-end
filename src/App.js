import './App.css';
import './style.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import MainLayout from './layouts/main';
import MobileLayout from './layouts/mobile';

function App() {
  useEffect(() => {
    window.document.head.insertBefore(
      window.document.createComment("by samueladewale"),
      window.document.head.firstChild);
    })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mobile/*' element={<MobileLayout />} />
        <Route path='*' element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
