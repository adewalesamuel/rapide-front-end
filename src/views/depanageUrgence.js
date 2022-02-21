import {useState, useEffect} from 'react';
import { Components } from '../components';
import { Services } from '../services';

function DepanageUrgence(props) {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        
        Services.Categorie.getAll(abortController.signal)
        .then(result => setCategories(result.data))
        .catch(err => console.log(err));

        return () => {
          abortController.abort()
      }
    
    }, []);
    return (
        <div className='inscription'>
           <div className='form-container'>
               <br />
               <div style={{maxWidth: "427px", margin:"auto"}}>
                <Components.DepannageRapideForm categories={categories}/>
               </div>
               <br />
               <br />
               <br />
           </div>
        </div>
    );
}

export default DepanageUrgence;