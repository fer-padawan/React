import styled from "styled-components";

export const NavBarContainer = styled.div`
width: 100%;
height: 80%;
position: sticky;
top: 0;
z-index: 99;
background-color: #23394d;
`;

export const NavbarWrapper = styled.div`
margin: auto;
padding: 20px;
width: 100%;
max-width: 1300px;
height: 100%;
align-item: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-item: center;
font-family: "Oswald";
font-size: 1.2rem;
color: #ebc08b;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;

@media screen and (max-width: 960px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s ease;
}
`;

export const MenuItem = styled.li`
height: 100%

@media screen and (max-width: 960px) {
width: 100%;
height:70px;
display: flex;
justify-content: ce;
align-items: center;
}
`;

export const MenuItemLink = styled.a`
display: flex;
justify-content: center;
align-item: center;
height: 100%;
padding: 0.5rem 2.5rem;
color: #64b2ff;
font-family: "Oswald";
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover{
    color: #fff;
    background-color: #ebc08b;
    transition: 0.5s all ease;
}

@media screen and (max-width: 960px) {
    width: 100%
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: flex;
    align-items: center;

    svg{
        fill: #e87924;
        margin-right: 0.5rem;
    }
}
`;
