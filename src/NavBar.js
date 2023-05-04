import React from "react";
import { NavbarContainer, LeftContainer, RightContainer, NavbarLinkContainer, NavbarInnerContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended } from './Navbar.style';
import LogoImg from "./images/logo.jpg"
import { useState } from 'react';

function Navbar ()  {
    const [extendNavBar, setExtendNavBar] = useState(false);
    
 return (
<NavbarContainer extendNavBar={extendNavBar}>
<NavbarInnerContainer>
<LeftContainer> 
    <NavbarLinkContainer>
        <NavbarLink to ="/">Home</NavbarLink>
        <NavbarLink to ="/about">AboutUs</NavbarLink>
        <NavbarLink to ="/contact">ContactUs</NavbarLink>
        <NavbarLink to ="/more">More</NavbarLink>
        <OpenLinksButton
            onClick={() => {
                setExtendNavBar((curr) => !curr);
            }}
                >
                    {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </OpenLinksButton>
            
    </NavbarLinkContainer>                                      
</LeftContainer>
<RightContainer>
          <Logo src={LogoImg}></Logo>
</RightContainer>
</NavbarInnerContainer>
{extendNavBar && (
<NavbarExtendedContainer>
        <NavbarLinkExtended to ="/">Home</NavbarLinkExtended>
        <NavbarLinkExtended to ="/about">AboutUs</NavbarLinkExtended>
        <NavbarLinkExtended to ="/contact">ContactUs</NavbarLinkExtended>
        <NavbarLinkExtended to ="/more">More</NavbarLinkExtended>
</NavbarExtendedContainer>
)}
</NavbarContainer>
);
}
export default Navbar