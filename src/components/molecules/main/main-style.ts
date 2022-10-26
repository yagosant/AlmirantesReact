import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    body, html, #root {
        height: 100%;
        font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    };
`;


export const Main = styled.main`
    display: flex;
    justify-content: center;
    height: calc(100% - 76px);
    padding: 181px 140px 182px 108px;
    gap: 225.26px;
    background-color: ${({theme})=> theme.colors.primary4};
`;