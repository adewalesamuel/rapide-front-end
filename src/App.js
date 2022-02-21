import './App.css';
import './style.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Views } from './views';
import { Components } from './components'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.document.head.insertBefore(
      document.createComment("by samueladewale"),
      document.head.firstChild);
  })
  return (
    <BrowserRouter>
      <Components.Header />
      <Routes>
        <Route exact path='/' element={<Views.Accueil />} />
        <Route exact path='/contact' element={<Views.Contact />} />
        <Route exact path='/presentation' element={<Views.Presentation />} />
        <Route exact path='/entreprise' element={<Views.Entreprise />} />
        <Route exact path='/services' element={<Views.Services />} />
        <Route exact path='/inscription' element={<Views.Inscription />} />
        <Route exact path='/commandes/:id' element={<Views.Commande />} />
        <Route exact path='/commandes' element={<Views.Commande />} />
        <Route exact path='/conditions-utilisation' element={<Views.Conditions  />}  />
        <Route exact path='/depanage-urgence' element={<Views.DepanageUrgence  />}  />
      </Routes>
      <Components.Footer />
    </BrowserRouter>
  );
}

export default App;
