const LOCAL_API = 'http://localhost:3001/api/affiliates';
const PROD_API = 'https://www.dinwebai.com/api/affiliates';

async function syncAffiliates() {
  try {
    console.log('Fetching affiliates from local backend...');
    const res = await fetch(LOCAL_API);

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const text = await res.text();
      console.error(`Unexpected response from local API (status ${res.status}):\n${text}`);
      return;
    }

    const affiliates = await res.json();

    for (const affiliate of affiliates) {
      console.log(`Syncing affiliate: ${affiliate.name}`);
      const response = await fetch(PROD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(affiliate),
      });

      const responseText = await response.text();
      if (!response.ok) {
        console.error(`Failed to sync ${affiliate.name} (Status ${response.status}): ${responseText}`);
      } else {
        console.log(`Synced ${affiliate.name} (Status ${response.status}): ${responseText}`);
      }
    }

    console.log('Sync complete.');
  } catch (err) {
    console.error('Error during sync:', err);
  }
}

await syncAffiliates();