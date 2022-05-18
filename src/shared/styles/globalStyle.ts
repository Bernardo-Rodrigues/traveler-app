import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
        margin:0;
        padding:0;
		box-sizing:border-box;
		font-family: 'Poppins', sans-serif !important;
	}
    a{
		text-decoration: none;
	}
    button{
        cursor: pointer;
    }
    ol, ul {
	    list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
