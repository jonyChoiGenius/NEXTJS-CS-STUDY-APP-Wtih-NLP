import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
    src: url('/fonts/NotoSansKR-Regular.woff2') format("woff2"),
    url('/fonts/NotoSansKR-Regular.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
    src: url('/fonts/NotoSansKR-Bold.woff2') format("woff2"),
    url('/fonts/NotoSansKR-Bold.otf') format('opentype');
    font-display: swap;
  }
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: Noto Sans KR, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  html {
    //https://dev.to/karmasakshi/make-your-pwas-look-handsome-on-ios-1o08
    background-color: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
