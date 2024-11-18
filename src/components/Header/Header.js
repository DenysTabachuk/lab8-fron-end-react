import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        const newValue = !isMenuOpen;
        setIsMenuOpen(newValue);
    };

    return (
        <header>
            <div>
                <h1>Locksmith</h1>
            </div>

            <img id="icon-menu" src="/icons/icon-menu.png" alt="" onClick={toggleMenu} />

           
            <navbar className={ isMenuOpen ? "open" : "closed"}>
                <ul>
                    <li><a href="#"><b>HOME</b></a></li>
                    <li><a href="#"><b>ABOUT</b></a></li>
                    <li><a href="#"><b>SERVICES</b></a></li>
                    <li><a href="#"><b>SHOP</b></a></li>
                    <li><a href="#"><b>PAGES</b></a></li>
                    <li><a href="#"><b>NEWS</b></a></li>
                    <li><a href="#"><b>CONTACT</b></a></li>
                    <div id = "phone-number"><b>1234 5678 90</b></div>
                </ul>
                 
         
            </navbar>
      
        </header>
    );
}
