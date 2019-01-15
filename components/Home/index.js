import React from 'react';
import { converter } from '../../lib/content';
import PageTitle from '../PageTitle';
import translations from '../../lib/translations';
import content from '../../content/home.md';

const html = converter.makeHtml(content);

export default () => (
  <div>
    <PageTitle title={translations.siteDescription} />
    <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
