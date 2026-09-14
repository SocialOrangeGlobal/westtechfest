const https = require('https');
const fs = require('fs');

const urls = [
  'https://www.westtechfest.com.au/speakers/aaliyah-nestoridis-culbong',
  'https://www.westtechfest.com.au/speakers/anthony-woods',
  'https://www.westtechfest.com.au/speakers/ben-lawver',
  'https://www.westtechfest.com.au/speakers/bill-tai',
  'https://www.westtechfest.com.au/speakers/bronte-campbell',
  'https://www.westtechfest.com.au/speakers/dom-pym',
  'https://www.westtechfest.com.au/speakers/fiona-macdonald',
  'https://www.westtechfest.com.au/speakers/harlene-hayne',
  'https://www.westtechfest.com.au/speakers/harry-dixon',
  'https://www.westtechfest.com.au/speakers/melinda-fitzgerald',
  'https://www.westtechfest.com.au/speakers/remy-tucker',
  'https://www.westtechfest.com.au/speakers/ryan-bellissimo',
  'https://www.westtechfest.com.au/speakers/stephen-dawson'
];

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const results = [];
  let i = 1;
  for (const url of urls) {
    try {
      const html = await fetchHtml(url);
      const imageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      const titleStr = titleMatch ? titleMatch[1] : '';
      
      const parts = titleStr.split(' | ');
      const name = parts[0] ? parts[0].trim() : url.split('/').pop();
      const role = parts[1] && parts[1] !== 'West Tech Fest' ? parts[1].trim() : '';
      
      const result = {
        id: i++,
        name: name,
        role: role,
        image: imageMatch ? imageMatch[1] : '',
        category: 'WEST TECH MAIN', // Default fallback
        link: url
      };
      results.push(result);
      console.log('Fetched: ' + name);
    } catch (e) {
      console.error(e);
    }
  }
  fs.writeFileSync('speakersDataTemp.json', JSON.stringify(results, null, 2));
  console.log('Done.');
}
main();
