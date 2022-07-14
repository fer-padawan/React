import { style } from "@mui/system";
import styled from "styled-components";

export const NavBarContainer = styled.div`
width: 100%;
height: 80%;
position: sticky;
top: 0;
z-index: 99;
background-color: #222;
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
`