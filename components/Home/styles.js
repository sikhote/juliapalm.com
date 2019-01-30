import css from 'styled-jsx/css';
import {
  bps,
  spacing,
  fontWeights,
  fontFamilies,
  lineHeights,
  fontSizes,
} from '../../lib/styling';

export default css`
  .contact :global(ul) {
    display: grid;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    padding: ${spacing.page / 2}px ${spacing.page}px;
    background: black;
  }
  .contact :global(ul li),
  .contact :global(ul li a) {
    color: rgba(255, 255, 255, 0.9);
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes.a2}px;
    font-family: ${fontFamilies.headers};
    text-transform: uppercase;
    line-height: ${lineHeights.close}em;
    text-decoration: none;
  }
  .contact :global(ul li:before) {
    color: rgba(255, 255, 255, 0.5);
    font-weight: ${fontWeights.normal};
    font-family: ${fontFamilies.headers};
    font-size: ${fontSizes.a2}px;
  }
  .contact :global(ul li:first-child) {
    padding-left: 0;
    text-indent: 0;
  }
  .contact :global(ul li:first-child:before) {
    display: none;
  }
  h1 {
    padding: ${spacing.page}px;
    padding-top: ${spacing.page * 2}px;
  }
  .intro {
    column-width: 400px;
    column-gap: ${spacing.a7}px;
    column-fill: balance;
    padding: 0 ${spacing.page * 4}px ${spacing.page}px ${spacing.page * 4}px;
  }
  .research {
    background: linear-gradient(10deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2)),
      url('/static/img/backgrounds/crossword.png');
    padding: ${spacing.page}px;
  }
  .research :global(h2) {
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
  }
  .research :global(ul) {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }
  .research :global(ul li) {
    padding-left: 0;
    text-indent: 0;
    padding: ${spacing.a4}px;
    background: white;
    display: inline-block;
    border-radius: 8px;
    margin: 15px 15px 0 0;
    font-size: ${fontSizes.a2}px;
  }
  .research :global(ul li:before) {
    display: none;
  }
  .social {
    padding: ${spacing.page}px;
  }
  .social :global(ul) {
    display: grid;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
  }
  .social :global(ul li a) {
    font-weight: ${fontWeights.normal};
    line-height: ${lineHeights.close}em;
  }
  .social :global(ul li:before) {
    color: rgba(0, 0, 0, 0.5);
    font-weight: ${fontWeights.normal};
    font-family: ${fontFamilies.headers};
    font-size: ${fontSizes.a2}px;
  }
  .social :global(ul li:first-child) {
    padding-left: 0;
    text-indent: 0;
  }
  .social :global(ul li:first-child:before) {
    display: none;
  }

  @media (max-width: ${bps.a2}px) {
    .contact :global(ul) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      text-align: center;
    }
    .contact :global(ul li) {
      padding-left: 0;
      text-indent: 0;
    }
    .contact :global(ul li:before) {
      display: none;
    }
    h1 {
      padding: ${spacing.pageA2}px;
    }
    .intro {
      padding: 0 ${spacing.pageA2}px 0 ${spacing.pageA2 * 3}px;
    }
  }
`;
