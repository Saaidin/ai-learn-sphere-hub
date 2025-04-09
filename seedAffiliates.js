import fetch from 'node-fetch';

const LOCAL_API = 'http://localhost:3001/api/affiliates';

const sampleAffiliates = [
  {
    name: 'Affiliate One',
    email: 'affiliate1@example.com',
    website: 'https://affiliate1.com',
    commissionRate: 0.1,
    active: true
  },
  {
    name: 'Affiliate Two',
    email: 'affiliate2@example.com',
    website: 'https://affiliate2.com',
    commissionRate: 0.15,
    active: true
  },
  {
    name: 'Affiliate Three',
    email: 'affiliate3@example.com',
    website: 'https://affiliate3.com',
    commissionRate: 0.2,
    active: false
  }
];

async function seedAffiliates() {
  for (const affiliate of sampleAffiliates) {
    try {
      const response = await fetch(LOCAL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(affiliate),
      });

      const responseText = await response.text();
      if (!response.ok) {
        console.error(`Failed to insert ${affiliate.name} (Status ${response.status}): ${responseText}`);
      } else {
        console.log(`Inserted ${affiliate.name} (Status ${response.status}): ${responseText}`);
      }
    } catch (err) {
      console.error(`Error inserting ${affiliate.name}:`, err);
    }
  }

  console.log('Seeding complete.');
}

seedAffiliates();