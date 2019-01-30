import React from 'react';
import { converter } from '../../lib/content';
import PageTitle from '../PageTitle';
import Events from '../Events';
import translations from '../../lib/translations';
import intro from '../../content/intro.md';
import contact from '../../content/contact.md';
import research from '../../content/research.md';
import social from '../../content/social.md';
import styles from './styles';

const content = { intro, contact, research, social };
const html = Object.keys(content).reduce(
  (html, key) => ({
    ...html,
    [key]: converter.makeHtml(content[key]),
  }),
  {},
);

export default () => (
  <div>
    <PageTitle title={translations.siteDescription} />
    <style jsx>{styles}</style>
    <div
      className="markdown contact"
      dangerouslySetInnerHTML={{ __html: html.contact }}
    />
    <h1>{translations.siteName}</h1>
    <div
      className="markdown intro"
      dangerouslySetInnerHTML={{ __html: html.intro }}
    />
    <div
      className="markdown research"
      dangerouslySetInnerHTML={{ __html: html.research }}
    />
    <Events />
    <div
      className="markdown social"
      dangerouslySetInnerHTML={{ __html: html.social }}
    />
  </div>
);
