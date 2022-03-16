import { Route, Routes } from "react-router-dom";
import { Components } from "../components";
import { Views } from "../views";

import '../mobile.css';

export default function MobileLayout(props) {
    return (
        <>  
            <Components.Mobile.Header />
            <Routes>
                <Route exact path='/contact' element={<Views.Contact />} />
                <Route exact path='/presentation' element={<Views.Presentation />} />
                <Route exact path='/entreprise' element={<Views.Entreprise />} />
                <Route exact path='/services' element={<Views.Services />} />
                <Route exact path='/inscription' element={<Views.Inscription />} />
                <Route exact path='/commandes/:id' element={<Views.Commande />} />
                <Route exact path='/commandes' element={<Views.Commande />} />
                <Route exact path='/conditions-utilisation' element={<Views.Conditions  />}  />
                <Route exact path='/depanage-urgence' element={<Views.DepanageUrgence  />}  />
                <Route exact path='/' element={<Views.Mobile.Accueil />} />
            </Routes>
            <Components.Mobile.Footer />
        </> 
    )
}
