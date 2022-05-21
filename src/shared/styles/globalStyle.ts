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

    .flip-box {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-box-back {
  background-color: #fff;
  color: #000;
  transform: rotateY(180deg);
}

`;
