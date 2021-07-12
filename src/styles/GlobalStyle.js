import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    ${'' /* --primary-color: #007bff;
    --secondary-color: #6c757d;
    
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
     */}
    --primary-color: #96b1ac;
    --secondary-color: #009688;
    --background-dark-color: #10121A;
    --trim-color: #B9BDC6;
    --accent-color: #1B857F;
    --background-light-color: #ffe0b2;
    --white-color: #f2f3f4;
    --font-light-color: #bdbdbd;
    --font-dark-color: #1B283D;
    --sidebar-dark-color: #b7891c;
    --card-color: #404756;
    ${'' /* --sidebar-dark-color: #f57c00; */}

}
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'Nunito', sans-serif;
    }
    
    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color)
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: 1rem;
    }

    h1{
        font-size: 3rem;
        color: var(--white-color);
        span{
            font-size: 3rem;
            color: #F9F871
        }
    }
`;

export default GlobalStyle;