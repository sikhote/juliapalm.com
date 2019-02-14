import css from 'styled-jsx/css';
import {
  fontFamilies,
  fontWeights,
  fontSizes,
  colors,
  spacing,
  bps,
  lineHeights,
} from '../../lib/styling';

export default css.global`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    font-family: ${fontFamilies.normal};
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes.a3}px;
    color: ${colors.text};
    line-height: ${lineHeights.normal}em;
  }
  .markdown a {
    color: ${colors.links};
  }
  h1, .markdown h1 {
    font-size: ${fontSizes.a8}px;
    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.headers};
    text-transform: uppercase;
    letter-spacing: -3px;
    line-height: ${lineHeights.close}em;
  }
  .markdown h2 {
    font-size: ${fontSizes.a6}px;
    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.headers};
    text-transform: uppercase;
    letter-spacing: -1px;
    line-height: ${lineHeights.close}em;
  }
  .markdown h3 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a3}px;
    font-weight: ${fontWeights.bold};
  }
  .markdown h4 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a2}px;
    font-weight: ${fontWeights.bold};
  }
  .markdown hr {
    border-top: .1px solid ${colors.border};
    margin-top: ${spacing.a5}px;
    margin-bottom: ${spacing.a6}px;
  }
  .markdown blockquote {
    color: ${colors.primary};
    font-style: italic;
    font-size: ${fontSizes.a5}px;
    display: inline-block;
  }
  .markdown blockquote > * {
    display: inline;
  }
  .markdown blockquote:before {
    display: inline;
    content: '“';
    color: ${colors.text};
  }
  .markdown blockquote:after {
    display: inline;
    content: '”';
    color: ${colors.text};
  }
  .markdown pre {
    max-width: 100%;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: ${fontSizes.a2}px;
  }
  .markdown p > code,
  .markdown ul > li > code,
  .markdown ol > li > code {
    font-size: ${fontSizes.a2}px;
    word-break: break-all;
    background: ${colors.a3};
    padding: ${spacing.a3}px ${spacing.a4}px;
  }
  .markdown img {
    max-width: 100%;
  }
  .markdown ul {
    padding: 0;
    list-style: none;
  }
  .markdown ul > li {
    padding-left: 30px;
    text-indent: -20px;
  }
  .markdown ul > li:before {
    content: '•';
    padding-right: 12px;
  }
  .markdown ol {
    padding: 0;
    margin-left: ${spacing.a5}px;
  }
  .markdown > *:not(:last-child):not(h1):not(h2):not(h3):not(h4):not(hr):after {
    display: inline-block;
    content: "";
    height: 1px;
    width: 100%;
  }
  .markdown i {
    margin-left: ${spacing.a4}px;
  }
  .markdown i:before {
    margin-right: -0.6em;
  }

  @media (max-width: ${bps.a2}px) {
    h1, .markdown h1 {
      font-size: ${fontSizes.a7}px;
      letter-spacing: -3px;
    }
    .markdown h2 {
      font-size: ${fontSizes.a5}px;
    }
  }

  @media (max-width: ${bps.a1}px) {
    h1, .markdown h1 {
      font-size: ${fontSizes.a5}px;
      letter-spacing: -2px;
    }
    .markdown h2 {
      font-size: ${fontSizes.a4}px;
    }
  }
`;
