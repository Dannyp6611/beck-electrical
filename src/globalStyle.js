import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --primary: #f7d542;
  --body-copy: #191507;
  --yellow-shade: #f9e27b;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

html {
  font-size: 62.5%;
  box-sizing: inherit;
}

@media only screen and (max-width: 768px) {
  html {
    font-size: 55%;
  }
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
  font-weight: 400;
  color: var(--body-copy);
}

.container {
  max-width: 140rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  margin-left: auto;
  margin-right: auto;
}

h1, h2 {
  font-family: 'Poppins', sans-serif;
}

`;

export default GlobalStyle;
