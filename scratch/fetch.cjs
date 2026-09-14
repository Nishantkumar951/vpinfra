const https = require('https');
https.get('https://vpinfra.co.in/services/solar-installation/', res => {
  let d = '';
  res.on('data', c => d+=c);
  res.on('end', () => {
    const matches = d.match(/<link[^>]*rel="canonical"[^>]*>/gi);
    console.log('Matches:', matches);
  });
});
