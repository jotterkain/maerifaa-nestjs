import * as process from "process";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = [
  { name: "House", type: "OUT"},
  { name: "Groceries", type: "OUT" },
  { name: "Health", type: "OUT" },
  { name: "Feed", type: "OUT" },
  { name: "Education", type: "OUT" },
  { name: "Internet", type: "OUT" },
  { name: "Accessories", type: "OUT" },
  { name: "Investment", type: "OUT" },
  { name: "Transportation", type: "OUT" },
  { name: "Entertainment", type: "OUT" },
  { name: "Clothing", type: "OUT" },
  { name: "Gifts", type: "IN" },
  { name: "Travel", type: "OUT" },
  { name: "Utilities", type: "OUT" },
  { name: "Financial Services", type: "BOTH" },
  { name: "Taxes", type: "OUT" },
  { name: "Pets", type: "OUT" },
  { name: "Beauty", type: "OUT" },
  { name: "Cleaning", type: "OUT" },
  { name: "Personal Care", type: "OUT" },
  { name: "Donations", type: "OUT" },
  { name: "Family", type: "OUT" },
  { name: "Hobbies", type: "OUT" },
  { name: "Saving", type: "OUT" },
  { name: "Incomes", type: "IN" },
  { name: "Work", type: "BOTH" },
  { name: "Lottery", type: "BOTH" },
];

const purposes = [
  {

  }
]

async function seed() {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    await prisma.category.create({
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
