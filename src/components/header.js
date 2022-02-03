import { TopBar } from "./topbar";
import { NavBar } from "./navbar";
import {useEffect} from "react";
import { useLocation } from 'react-router-dom';

export function Header({history}) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
            <TopBar />
            <NavBar />
        </>
    )
}
