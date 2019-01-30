import css from 'styled-jsx/css';
import { transparentize } from 'polished';
import {
  bps,
  spacing,
  borderRadii,
  colors,
  fontWeights,
  fontSizes,
  fontFamilies,
  lineHeights,
} from '../../lib/styling';

export default css`
  .root {
    padding: ${spacing.page}px;
    display: grid;
    grid-template-rows: auto;
    grid-auto-row: auto;
    grid-auto-flow: row;
    justify-items: center;
    background: rgba(0, 0, 0, 0.03);
  }
  .big-date {
    font-family: ${fontFamilies.headers};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.a4}px;
    line-height: ${lineHeights.close}em;
    padding: ${spacing.a3}px;
  }
  .event {
    max-width: 40vw;
    position: relative;
  }
  .event:not(:last-of-type) {
    margin-bottom: -40px;
  }
  .event.odd {
    left: calc(20vw - 2px);
    /* border-left: 4px solid ${colors.border}; */
    padding-left: ${spacing.a8}px;
  }
  .event.even {
    left: calc(-20vw + 2px);
    /* border-right: 4px solid ${colors.border}; */
    padding-right: ${spacing.a8}px;
  }
  .inner:before {
    content: '';
    display: block;
    width: 4px;
    height: calc(100% - 40px);
    background: ${colors.border};
    position: absolute;
    top: 0;
  }
  .event:last-of-type .inner:before {
    height: 100%;
  }
  .event.odd .inner:before {
    left: 0;
  }
  .event.even .inner:before {
    right: 0;
  }
  .inner:after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 2em;
    background: white;
    border: 3px solid ${colors.border};
    position: absolute;
    top: ${spacing.a6}px;
  }
  .event.odd .inner:after {
    left: -7px;
  }
  .event.even .inner:after {
    right: -7px;
  }
  .event:before {
    border-bottom: 10px solid transparent;
    border-right: 12px solid black;
    border-left: none;
    border-top: 10px solid transparent;
    content: '';
    height: 0;
    position: absolute;
    top: ${spacing.a6}px;
    width: 0;
    z-index: 1;
  }
  .event.education:before {
    border-right-color: ${transparentize(0.7, colors.education)};
  }
  .event.writing:before {
    border-right-color: ${transparentize(0.7, colors.writing)};
  }
  .event.teaching:before {
    border-right-color: ${transparentize(0.7, colors.teaching)};
  }
  .event.odd:before {
    left: ${spacing.a8 - 12}px;
  }
  .event.even:before {
    right: ${spacing.a8 - 12}px;
    transform: rotate(180deg);
  }
  .event:after {
    border-bottom: 9px solid transparent;
    border-right: 11px solid white;
    border-left: none;
    border-top: 9px solid transparent;
    z-index: 2;
    content: '';
    height: 0;
    position: absolute;
    top: ${spacing.a6 + 1}px;
    width: 0;
  }
  .event.odd:after {
    left: ${spacing.a8 - 10}px;
  }
  .event.even:after {
    right: ${spacing.a8 - 10}px;
    transform: rotate(180deg);
  }
  .inner {
    background: white;
    padding: ${spacing.a5}px;
    border-radius: ${borderRadii.a1}px;
    border: 1px solid black;
  }
  .event.education .inner {
    border-color: ${transparentize(0.7, colors.education)};
  }
  .event.writing .inner {
    border-color: ${transparentize(0.7, colors.writing)};
  }
  .event.teaching .inner {
    border-color: ${transparentize(0.7, colors.teaching)};
  }
  .date {
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.a2}px;
    margin-bottom: ${spacing.a4}px;
  }
  .download {
    display: inline-flex;
    align-items: center;
    margin-top: ${spacing.a5}px;
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.a1}px;
    text-transform: uppercase;
    padding: ${spacing.a3}px ${spacing.a4}px;
    padding-left: ${spacing.a4 + 4}px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: ${borderRadii.a1}px;
    text-decoration: none;
  }
  .download :global(i) {
    margin-left: ${spacing.a4}px;
  }

  @media (max-width: ${bps.a2}px) {
    .root {
      padding: ${spacing.pageA2}px;
    }
  }
`;
