import React from 'react'
import { IconLogo, Menu, MenuItem, MenuItemLink, MobileIcon, NavBarContainer, NavbarWrapper } from './Navbar.elements'
import { GiBeerBottle } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons';

export const NavBar = () => {
  return (
    <>
        <NavBarContainer>
            <NavbarWrapper>
            <IconContext.Provider value={{ style: {fontSize: "1.5em"}}}>

                <IconLogo>
                    <GiBeerBottle />
                 Dios Verde Beer</IconLogo>

                 <MobileIcon>
                    <FaBars />
                 </MobileIcon>
                 <Menu>
                        <MenuItem>
                            <MenuItemLink>
                                INICIO
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                                CHELAS
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                                SOBRE MI
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                                SHOP
                            </MenuItemLink>
                        </MenuItem>
                 </Menu>
            </IconContext.Provider>
            </NavbarWrapper>
        </NavBarContainer>

    </>
  )
}
