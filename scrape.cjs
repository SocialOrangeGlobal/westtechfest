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
  let id = 1;
  for (const url of urls) {
    try {
      const html = await fetchHtml(url);
      
      // Try to find the image in the main content area, ignoring og:image since it might be default
      const imageMatch = html.match(/srcSet="([^"]+cijhivxxnxe7zfen[^"]+)"/);
      let image = '';
      if (imageMatch) {
        // extract the first URL from srcset
        const srcset = imageMatch[1];
        const firstUrl = srcset.split(' ')[0];
        // The firstUrl might be something like /_next/image?url=encoded_url...
        const urlParamMatch = firstUrl.match(/url=([^&]+)/);
        if (urlParamMatch) {
            image = decodeURIComponent(urlParamMatch[1]);
        }
      }

      const slug = url.split('/').pop();
      const nameMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
      const name = nameMatch ? nameMatch[1] : slug;
      
      // The role is often in a p tag right after the h1
      const roleMatch = html.match(/<\/h1><p[^>]*>([^<]+)<\/p>/);
      const role = roleMatch ? roleMatch[1] : '';

      results.push({
        id: id++,
        name: name,
        role: role,
        image: image,
        slug: slug,
        category: 'WEST TECH MAIN' // Placeholder, will fix manually
      });
      console.log('Fetched: ' + name);
    } catch (e) {
      console.error(e);
    }
  }
  fs.writeFileSync('src/data/speakersData.js', 'export const speakersData = ' + JSON.stringify(results, null, 2) + ';');
  console.log('Done.');
}
main();
