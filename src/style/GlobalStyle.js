import { createGlobalStyle, styled } from 'styled-components';
import '@csstools/normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => props.theme.colors.$primiryTextColor};
  background-color: ${props => props.theme.colors.$primiryBgColor};
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const StyledMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`;

export const StyledSection = styled.section`
  width: 100%;
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px 20px 0;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0 24px;
  }
`;
