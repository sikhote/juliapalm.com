import { lighten, transparentize, darken, desaturate } from 'polished';

export const spacing = {};
spacing.a1 = 0;
spacing.a2 = 2;
spacing.a3 = 4;
spacing.a4 = 8;
spacing.a5 = 16;
spacing.a6 = 24;
spacing.a7 = 32;
spacing.a8 = 48;
spacing.a9 = 72;
spacing.page = spacing.a7;
spacing.pageA2 = spacing.a5;

export const colors = {};
colors.a1 = '#655643';
colors.a2 = '#80BCA3';
colors.a3 = '#eae9e3';
colors.a4 = '#E6AC27';
colors.a5 = '#BF4D28';
colors.a6 = 'rgb(50, 50, 50)';
colors.white = 'rgb(255, 255, 255)';
colors.black = 'rgb(0, 0, 0)';
colors.transparent = 'rgba(0, 0, 0, 0)';
colors.inherit = 'inherit';
colors.text = colors.a6;
colors.links = darken(0.2, colors.a5);
colors.border = 'rgb(220, 220, 220)';
colors.contactBg = colors.a6;
colors.contactText = 'rgba(255, 255, 255, .9)';
// colors.contactDots = transparentize(0.2, colors.contactText);
colors.contactDots = colors.a4;
colors.introBg = colors.white;
colors.introH1 = colors.black;
colors.introText = colors.text;
colors.researchBg = colors.a3;
colors.researchH2 = colors.a5;
colors.researchText = colors.text;
colors.researchBox = colors.white;
colors.eventsBg = desaturate(0.2, lighten(0.02, colors.a3));
colors.eventsTitle = colors.black;
colors.eventsYear = colors.a1;
colors.eventsText = colors.text;
colors.eventsLinks = colors.links;
colors.eventsBar = lighten(0, colors.a1);
colors.eventsBox = lighten(0.05, colors.a3);
colors.eventsBoxBorder = darken(0.2, colors.eventsBox);
colors.eventsCircle = colors.a4; //lighten(0.4, colors.a6);
colors.socialBg = colors.a6;
colors.socialLink = 'rgba(255, 255, 255, .9)';
colors.socialDots = colors.a2;

export const bps = {};
bps.a1 = 500;
bps.a2 = 800;
bps.a3 = 1000;
bps.a4 = 1200;

export const fontSizes = {};
fontSizes.a1 = 12;
fontSizes.a2 = 14;
fontSizes.a3 = 16;
fontSizes.a4 = 20;
fontSizes.a5 = 28;
fontSizes.a6 = 36;
fontSizes.a7 = 48;
fontSizes.a8 = 72;

export const lineHeights = {};
lineHeights.normal = 1.4;
lineHeights.close = 1;

export const fontFamilies = {};
fontFamilies.oswald = "'Oswald', sans-serif";
fontFamilies.roboto = "'Roboto', sans-serif";
fontFamilies.normal = fontFamilies.roboto;
fontFamilies.headers = fontFamilies.oswald;

export const fontWeights = {};
fontWeights.thin = '200';
fontWeights.normal = '300';
fontWeights.bold = '600';

export const borderRadii = {};
borderRadii.a1 = 4;

export const zIndexes = {};

export const speeds = {};
speeds.a1 = 0.1;
