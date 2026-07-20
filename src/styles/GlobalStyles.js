import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #151515;
    background: #f3f0e8;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --ink: #151515;
    --paper: #f3f0e8;
    --white: #fffdf8;
    --muted: #68675f;
    --line: rgba(21, 21, 21, 0.17);
    --blue: #2455ff;
    --lime: #c8ff4d;
    --coral: #ff6846;
    --lavender: #c7b7ff;
    --container: min(1220px, calc(100vw - 56px));
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 95% 4%, rgba(36, 85, 255, 0.09), transparent 24rem),
      var(--paper);
  }

  body::selection {
    color: white;
    background: var(--blue);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a { -webkit-tap-highlight-color: transparent; }
  img { display: block; max-width: 100%; }

  @media (max-width: 800px) {
    :root { --container: min(100% - 32px, 700px); }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
