import React from 'react'
import { IconLogo, NavBarContainer, NavbarWrapper } from './Navbar.elements'
import { GiBeerBottle } from "react-icons/gi";
export const NavBar = () => {
  return (
    <>
        <NavBarContainer>
            <NavbarWrapper>
                <IconLogo>
                    <GiBeerBottle size={"2em"}/>
                 Dios Verde Beer</IconLogo>
            </NavbarWrapper>
        </NavBarContainer>

    </>
  )
}
