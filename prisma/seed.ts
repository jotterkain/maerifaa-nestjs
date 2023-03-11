// Import the Prisma Client
import * as process from "process";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = [
  { name: "House" },
  { name: "Groceries" },
  { name: "Health" },
  { name: "Feed" },
  { name: "Education" },
  { name: "Internet" },
  { name: "Accessories" },
  { name: "Investment" },
  { name: "Transportation" },
  { name: "Entertainment" },
  { name: "Clothing" },
  { name: "Gifts" },
  { name: "Travel" },
  { name: "Utilities" },
  { name: "Financial Services" },
  { name: "Taxes" },
  { name: "Pets" },
  { name: "Beauty" },
  { name: "Cleaning" },
  { name: "Equipment" },
  { name: "Furniture" },
  { name: "Electronics" },
  { name: "Hardware" },
  { name: "Software" },
  { name: "Personal Care" },
  { name: "Donations" },
  { name: "Family" },
  { name: "Hobbies" },
  { name: "Saving" },
];

async function seed() {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    await prisma.expenseCategory.create({
      data: {
        name: category.name,
      },
    });
  }
}

seed().then(
  async () => {
    console.log("Database seeding complete.");
    await prisma.$disconnect();
  }).catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
