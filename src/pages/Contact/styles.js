import styled from "styled-components";

export const StyledContact = styled.div `
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`

export const StyledAnchor = styled.a`
    text-decoration: none;
    font-size: 2rem;
    margin-top: 5rem;
    &:hover{
        font-size: 2rem;
        background-color: orange;
        text-decoration: underline;
        padding: 1rem;
        border-radius: 10px;
    }
`