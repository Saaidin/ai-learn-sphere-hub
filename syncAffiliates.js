const fetch = require('node-fetch');

const LOCAL_API = 'http://localhost:8080/api/affiliates';
const PROD_API = 'https://www.dinwebai.com/api/affiliates';

async function syncAffiliates() {
  try {
    console.log('Fetching affiliates from local...');
    const res = await fetch(LOCAL_API);
    const affiliates = await res.json();

    for (const affiliate of affiliates) {
      console.log(`Syncing affiliate: ${affiliate.name}`);
      const response = await fetch(PROD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(affiliate),
      });

      if (!response.ok) {
        console.error(`Failed to sync ${affiliate.name}:`, await response.text());
      } else {
        console.log(`Synced ${affiliate.name}`);
      }
    }

    console.log('Sync complete.');
  } catch (err) {
    console.error('Error during sync:', err);
  }
}

syncAffiliates();