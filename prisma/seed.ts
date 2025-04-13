import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.affiliate.createMany({
    data: [
      {
        name: 'John Doe',
        company: 'Example Corp',
        website: 'https://example.com',
        affiliateLink: 'https://example.com/affiliate'
      },
      {
        name: 'Jane Smith',
        company: 'Acme Inc',
        website: 'https://acme.com',
        affiliateLink: 'https://acme.com/affiliate'
      },
      {
        name: 'Alice Johnson',
        company: 'Widgets Co',
        website: 'https://widgets.com',
        affiliateLink: 'https://widgets.com/affiliate'
      }
    ],
    skipDuplicates: true
  });
  console.log('Seeded affiliates successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding affiliates:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });