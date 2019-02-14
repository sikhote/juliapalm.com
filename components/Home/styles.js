import css from 'styled-jsx/css';
import { transparentize, darken } from 'polished';
import {
  bps,
  spacing,
  fontWeights,
  fontFamilies,
  lineHeights,
  fontSizes,
  borderRadii,
  colors,
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
    background: ${colors.contactBg};
  }
  .contact :global(ul li),
  .contact :global(ul li a) {
    color: ${colors.contactText};
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes.a2}px;
    font-family: ${fontFamilies.headers};
    text-transform: uppercase;
    line-height: ${lineHeights.close}em;
    text-decoration: none;
  }
  .contact :global(ul li:before) {
    color: ${colors.contactDots};
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
    background: ${colors.introBg};
    color: ${colors.introH1};
  }
  .intro {
    column-width: 400px;
    column-gap: ${spacing.a7}px;
    column-fill: balance;
    padding: 0 ${spacing.page * 4}px ${spacing.page}px ${spacing.page * 4}px;
    background: ${colors.introBg};
  }
  .intro :global(*) {
    color: ${colors.introText};
  }
  .intro :global(a) {
    color: ${colors.links};
  }
  .research {
    background: ${colors.researchBg};
    padding: ${spacing.page}px;
  }
  .research :global(h2) {
    text-align: center;
    color: ${colors.researchH2};
  }
  .research :global(ul) {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding-top: ${spacing.a3}px;
  }
  .research :global(ul li) {
    padding-left: 0;
    text-indent: 0;
    padding: ${spacing.a4}px;
    background: ${colors.researchBox};
    display: inline-block;
    border-radius: ${borderRadii.a1}px;
    margin: ${spacing.a5}px ${spacing.a5}px 0 0;
    font-size: ${fontSizes.a2}px;
    color: ${colors.researchText};
  }
  .research :global(ul li:before) {
    display: none;
  }
  .social {
    padding: ${spacing.page}px;
    background: ${colors.socialBg};
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
    color: ${colors.socialLink};
  }
  .social :global(ul li:before) {
    color: rgba(0, 0, 0, 0.5);
    font-weight: ${fontWeights.normal};
    font-family: ${fontFamilies.headers};
    font-size: ${fontSizes.a2}px;
    color: ${colors.socialDots};
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
      grid-gap: ${spacing.a2}px;
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
      padding: ${spacing.pageA2}px;
      padding-top: 0;
    }
    .research {
      padding: ${spacing.pageA2}px;
    }
    .research :global(ul li) {
      padding: ${spacing.a2}px ${spacing.a4}px;
      margin: ${spacing.a4}px ${spacing.a3}px 0 0;
    }
    .social {
      padding: ${spacing.pageA2}px;
    }
    .social :global(ul li:before) {
      font-size: ${fontSizes.a2}px;
    }
    .social :global(ul li a) {
      font-size: ${fontSizes.a2}px;
    }
  }

  @media (max-width: ${bps.a1}px) {
    .social :global(ul) {
      grid-template-rows: auto;
      grid-auto-rows: auto;
      grid-auto-flow: row;
      text-align: center;
    }
    .social :global(ul li) {
      padding-left: 0;
      text-indent: 0;
    }
    .social :global(ul li:before) {
      display: none;
    }
    .social :global(ul li a) {
      font-weight: ${fontWeights.normal};
      line-height: ${lineHeights.normal}em;
    }
  }
`;
