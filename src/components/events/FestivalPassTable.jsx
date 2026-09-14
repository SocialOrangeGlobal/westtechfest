import React from 'react';

const LOGO_OVERARCHING_S = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Overarching_Stacked.svg';
const LOGO_WOMEN_S = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Women_Stacked.svg';
const LOGO_MAIN_S = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Main_Stacked.svg';
const LOGO_WADJEMUP_S = 'https://www.westtechfest.com.au/brand/logos/WTF26_Wordmark_Wadjemup_Stacked.svg';

const ICON_OVERARCHING = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Overarching_Icon.svg';
const ICON_WOMEN = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Women_Icon.svg';
const ICON_MAIN = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Main_Icon.svg';
const ICON_WADJEMUP = 'https://www.westtechfest.com.au/brand/icons/WTF26_Wordmark_Wadjemup_Icon.svg';

const columns = [
  {
    logo: LOGO_OVERARCHING_S,
    logoAlt: 'West Tech Fest',
    price: '$819',
    icon: ICON_OVERARCHING,
    priceColor: '#f15a32',
  },
  {
    logo: LOGO_WOMEN_S,
    logoAlt: 'West Tech Women',
    price: '$40',
    icon: ICON_WOMEN,
    priceColor: '#2dd4bf',
  },
  {
    logo: LOGO_MAIN_S,
    logoAlt: 'West Tech Main',
    price: '$369',
    icon: ICON_MAIN,
    priceColor: '#a855f7',
  },
  {
    logo: LOGO_WADJEMUP_S,
    logoAlt: 'West Tech Wadjemup',
    price: '$489',
    icon: ICON_WADJEMUP,
    priceColor: '#38bdf8',
  },
];

// 'check' = icon, 'dash' = em dash, string = text value, 'link:text' = linked text
const rows = [
  {
    label: 'Festival Pass access',
    link: true,
    values: ['AAA / VIP', 'dash', 'dash', 'dash'],
  },
  {
    label: 'Invite to Festival Launch',
    link: true,
    values: ['check', 'dash', 'dash', 'dash'],
  },
  {
    label: 'Barista coffee',
    values: ['check', 'check', 'check', 'check'],
  },
  {
    label: 'Catering',
    values: ['link:All week', 'Morning tea, Lunch, Sundowner food & drinks', 'link:Brekkie', 'link:Brekkie'],
  },
  {
    label: 'Full day conference',
    values: ['link:All events', 'dash', 'check', 'check'],
  },
  {
    label: 'Sundowner & networking',
    values: ['check', 'dash', 'dash', 'dash'],
  },
  {
    label: 'Private ferry (ex-Freo)',
    values: ['check', 'dash', 'dash', 'check'],
  },
  {
    label: 'Ask the Experts — Sky High',
    values: ['check', 'dash', 'check', 'dash'],
  },
  {
    label: 'Out of Office: Offshore Edition',
    values: ['check', 'dash', 'dash', 'check'],
  },
  {
    label: 'Free coworking',
    values: ['check', 'check', 'check', 'dash'],
  },
  {
    label: 'VIP experience',
    values: ['check', 'dash', 'dash', 'dash'],
  },
  {
    label: 'Limited edition WTF merch',
    values: ['check', 'dash', 'dash', 'dash'],
  },
  {
    label: 'Priority access: Oceans 26',
    values: ['check', 'dash', 'dash', 'dash'],
  },
];

const renderCell = (value, colIndex) => {
  if (value === 'check') {
    return <img src={columns[colIndex].icon} alt="✓" className="check-icon" />;
  }
  if (value === 'dash') {
    return <span className="dash">–</span>;
  }
  if (typeof value === 'string' && value.startsWith('link:')) {
    return (
      <span className="text-value">
        <a href="#">{value.replace('link:', '')}</a>
      </span>
    );
  }
  return <span className="text-value">{value}</span>;
};

const FestivalPassTable = () => {
  return (
    <section className="festival-pass-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="num">03</span> / FESTIVAL PASS
          </div>
          <div className="section-meta">4 PASSES · 13 INCLUSIONS</div>
        </div>

        <h2>One pass. Every room.</h2>

        <p className="pass-description">
          The Festival Pass gives you access to every headline event across the full week, with VIP
          privileges and <a href="#">full catering</a>. Or select a single-event ticket for the day you want.
        </p>

        <div className="pass-table-wrapper">
          <table className="pass-table">
            <thead>
              <tr>
                <th>
                  <div className="header-label">WHAT'S INCLUDED</div>
                </th>
                {columns.map((col, i) => (
                  <th key={i}>
                    <img src={col.logo} alt={col.logoAlt} className="table-logo" />
                    <div className="table-price">
                      From{' '}
                      <span className="price-amount" style={{ color: col.priceColor }}>
                        {col.price}
                      </span>{' '}
                      Inc GST
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td>
                    {row.link ? <a href="#">{row.label}</a> : row.label}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td key={colIdx}>{renderCell(val, colIdx)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ready to attend banner */}
        <div className="ready-banner">
          <div>
            <h3>Ready to attend?</h3>
            <p>
              Festival Passes include access to First Nations House, Freo Startup Fest, and Corporate
              Innovation Summit.
            </p>
          </div>
          <a href="#" className="btn-primary-on-light">
            GET TICKETS
          </a>
        </div>
      </div>
    </section>
  );
};

export default FestivalPassTable;
