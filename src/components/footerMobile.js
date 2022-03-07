import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import home from '../img/home-mobile.png';
import shop from '../img/shop.png';
import support from '../img/support.png';
import user from '../img/user.png';

export function FooterMobile(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const tabs = window.document.querySelectorAll(".tab");
        const onTabClick = (event) => {
            tabs.forEach((tab => { 
                tab.classList.remove("active");
            }))
            let clickedTab = event.target.parentElement;
            clickedTab.classList.add("active");
        }

        tabs.forEach((clickedTab)=>{
            clickedTab.addEventListener('click', onTabClick);
        });

        return () => {
            tabs.forEach((clickedTab)=>{
                clickedTab.removeEventListener('click', onTabClick);
            });
        }
    })
    return (
        <div className="tab-nav-container">
            <div className="tab active purple" onClick={event => {navigate("/mobile/")}}>
                <img src={home} alt="home" />
                <p>Accueil</p>
            </div>
            <div className="tab purple" onClick={event => {window.open("https://marketplace.rapide-reparation.com/")}}>
                <img src={shop} alt="shop" />
                <p>Marketplace</p>
            </div>
            <div className="tab purple" onClick={event => {navigate("/mobile/")}}>
            <img src={support} alt="support" />
                <p>Support</p>
            </div>
            <div className="tab purple" onClick={event => {navigate("/mobile/inscription")}}>
            <img src={user} alt="user" />
                <p>Compte</p>
            </div>
        </div>
    )
}