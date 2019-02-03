import React from 'react';
import dynamic from 'next/dynamic';
import moment from 'moment';
import { converter } from '../../lib/content';
import events from '../../content/events';
import styles from './styles';

const getDynamicMd = key =>
  dynamic({
    loading: () => null,
    modules: () => ({
      md: import(`../../content/events/${key}.md`),
    }),
    render: (props, { md }) => (
      <div
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(md) }}
        className={`markdown ${key}`}
      />
    ),
  });
const timeline = events
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  .map((event, idx) => ({
    ...event,
    odd: idx % 2,
    Component: getDynamicMd(event.key),
  }))
  .reduce((acc, cur) => {
    const currentYear = moment(cur.date).format('YYYY');
    const lastDate = acc
      .slice()
      .reverse()
      .find(({ type }) => type === 'date');
    const lastYear = lastDate && lastDate.date;

    if (!lastYear || currentYear < lastYear) {
      acc.push({
        type: 'date',
        date: currentYear,
      });
    }

    acc.push(cur);

    return acc;
  }, []);

export default () => (
  <div className="root">
    <style jsx>{styles}</style>
    {timeline.map(
      ({ key, Component, date, startDate, download, type, odd }) => {
        const format = 'MMMM YYYY';
        const dateFormatted =
          type !== 'date' &&
          (moment(date).isSame(Date.now(), 'day')
            ? 'Present'
            : moment(date).format(format));
        const startDateFormatted = moment(startDate).format(format);
        const downloadType = download && download.split('.').slice(-1)[0];

        return type === 'date' ? (
          <div key={date} className="big-date">
            {date}
          </div>
        ) : (
          <div key={key} className={`event ${odd ? 'odd' : 'even'} ${type}`}>
            <div className="outer">
              <div className="inner">
                <div className="date">
                  {startDate
                    ? `${startDateFormatted} - ${dateFormatted}`
                    : dateFormatted}
                </div>
                <Component />
                {download && (
                  <a href={download} className="download">
                    Download
                    <i className={`demo-icon icon-file-${downloadType}`} />
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      },
    )}
  </div>
);
