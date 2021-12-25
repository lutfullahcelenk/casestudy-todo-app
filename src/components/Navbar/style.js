import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: #5d0cff;
    margin-bottom: 5rem;
    
`

export const StyledLink = styled(Link)`
    margin-left: 3rem;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: #00bd94;
    padding: 0.5rem;
    border-radius: 10px;

    &:hover {
        font-size: 2rem;
        text-decoration: underline;
        background-color: orange;
    }
`