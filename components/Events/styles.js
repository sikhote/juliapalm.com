import css from 'styled-jsx/css';
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
    background: ${colors.eventsBg};
  }
  .big-date {
    font-family: ${fontFamilies.headers};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.a4}px;
    line-height: ${lineHeights.close}em;
    padding: ${spacing.a4}px;
    justify-self: center;
    color: ${colors.eventsYear};
  }
  .event {
    width: 46vw;
    max-width: 500px;
    position: relative;
    left: 50%;
  }
  .event:not(:last-of-type) {
    margin-bottom: -40px;
  }
  .event:before {
    content: '';
    display: block;
    width: 2px;
    height: calc(100% - 40px);
    background: ${colors.eventsBar};
    position: absolute;
    top: 0;
    left: -1px;
  }
  .event:last-of-type:before {
    height: 100%;
  }
  .event:after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 2em;
    background: ${colors.eventsCircle};
    border: 3px solid ${colors.white};
    position: absolute;
    top: ${spacing.a6}px;
    left: -9px;
  }
  .event .outer {
    position: relative;
  }
  .event.odd .outer {
    left: 0;
    padding-left: ${spacing.a8}px;
  }
  .event.even .outer {
    right: 100%;
    padding-right: ${spacing.a8}px;
  }
  .inner {
    background: ${colors.eventsBox};
    padding: ${spacing.a5}px;
    border-radius: ${borderRadii.a1}px;
    border: 1px solid ${colors.eventsBoxBorder};
  }
  .inner:before {
    border-bottom: 10px solid transparent;
    border-right: 12px solid ${colors.eventsBoxBorder};
    border-left: none;
    border-top: 10px solid transparent;
    content: '';
    height: 0;
    position: absolute;
    top: ${spacing.a6}px;
    width: 0;
    z-index: 1;
  }
  .event.odd .inner:before {
    left: ${spacing.a8 - 12}px;
  }
  .event.even .inner:before {
    right: ${spacing.a8 - 12}px;
    transform: rotate(180deg);
  }
  .inner:after {
    border-bottom: 9px solid transparent;
    border-right: 11px solid ${colors.eventsBox};
    border-left: none;
    border-top: 9px solid transparent;
    z-index: 2;
    content: '';
    height: 0;
    position: absolute;
    top: ${spacing.a6 + 1}px;
    width: 0;
  }
  .event.odd .inner:after {
    left: ${spacing.a8 - 10}px;
  }
  .event.even .inner:after {
    right: ${spacing.a8 - 10}px;
    transform: rotate(180deg);
  }
  .inner :global(*) {
    color: ${colors.eventsText};
  }
  .inner :global(a) {
    color: ${colors.eventsLinks};
  }
  .date {
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.a2}px;
    margin-bottom: ${spacing.a4}px;
    color: ${colors.eventsTitle};
  }
  .inner .download {
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
    color: ${colors.eventsText};
    background: ${colors.white};
  }
  .download :global(i) {
    margin-left: ${spacing.a4}px;
  }

  @media (max-width: ${bps.a2}px) {
    .root {
      justify-items: start;
      padding: ${spacing.pageA2}px;
    }
    .big-date {
      justify-self: start;
      padding: ${spacing.a4}px 0;
    }
    .event {
      width: calc(100vw - 35px);
      max-width: 100%;
      left: 0;
    }
    .event:not(:last-of-type) {
      margin-bottom: 0;
    }
    .event:before {
      left: ${spacing.a5}px;
      height: 100%;
    }
    .event:after {
      left: ${spacing.a5 + 2 - 9}px;
    }
    .event:not(:last-of-type) .outer {
      margin-bottom: ${spacing.a4}px;
    }
    .event.odd .outer,
    .event.even .outer {
      left: 0;
      padding-left: ${spacing.a8}px;
      padding-right: 0;
    }
    .event.odd .inner:before,
    .event.even .inner:before {
      left: ${spacing.a8 - 12}px;
      transform: rotate(0);
    }
    .event.odd .inner:after,
    .event.even .inner:after {
      left: ${spacing.a8 - 10}px;
      transform: rotate(0);
    }
  }
`;
