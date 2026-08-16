import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #f2f3ef;
    background: #0a0b0d;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --background: #0a0b0d;
    --surface: #111318;
    --surface-raised: #16191f;
    --text: #f2f3ef;
    --muted: #9a9da6;
    --subtle: #6f737c;
    --line: rgba(255, 255, 255, 0.11);
    --line-strong: rgba(255, 255, 255, 0.2);
    --accent: #c2ccc0;
    --accent-ink: #111410;
    --container: min(1160px, calc(100vw - 48px));
    --section-space: clamp(96px, 11vw, 148px);
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
      radial-gradient(circle at 80% 0%, rgba(194, 204, 192, 0.055), transparent 31rem),
      var(--background);
  }

  ::selection {
    color: var(--accent-ink);
    background: var(--accent);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a { -webkit-tap-highlight-color: transparent; }
  button, input, textarea, select { font: inherit; }
  button { cursor: pointer; }
  img { display: block; max-width: 100%; }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  @media (max-width: 800px) {
    :root {
      --container: min(100% - 32px, 700px);
      --section-space: 96px;
    }
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
