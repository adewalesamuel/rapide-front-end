import './App.css';
import './style.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Views } from './views';
import { Components } from './components'


function App() {
  return (
    <BrowserRouter>
      <Components.Header />
      <Routes>
        <Route exact path='/' element={<Views.Acceuil />} />
        <Route exact path='/contact' element={<Views.Contact />} />
        <Route exact path='/presentation' element={<Views.Presentation />} />
        <Route exact path='/entreprise' element={<Views.Entreprise />} />
        <Route exact path='/services' element={<Views.Services />} />
        <Route exact path='/inscription' element={<Views.Inscription />} />
        <Route exact path='/commandes/:id' element={<Views.Commande />} />
        <Route exact path='/commandes' element={<Views.Commande />} />
      </Routes>
      <Components.Footer />
    </BrowserRouter>
  );
}

export default App;
