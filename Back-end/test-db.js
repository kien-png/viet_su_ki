const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testDB() {
  try {
    console.log('Testing database connection...');
    
    const count = await prisma.historicalLocation.count();
    console.log('Total locations:', count);
    
    const locations = await prisma.historicalLocation.findMany({
      take: 5,
      select: {
        id: true,
        name: true,
        slug: true,
        latitude: true,
        longitude: true
      }
    });
    
    console.log('Locations:', JSON.stringify(locations, null, 2));
    
  } catch (error) {
    console.error('Database error:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDB();