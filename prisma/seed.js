import { PrismaClient } from "../lib/generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Seed User
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const user = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      name: "Justine",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  // Seed Skill
  await prisma.skill.createMany({
    data: [
      { name: "React", image: "/images/react.png", bagan: 1, status: "active", updatedAt: new Date() },
      { name: "Next.js", image: "/images/next.png", bagan: 1, status: "active", updatedAt: new Date() },
      { name: "Tailwind", image: "/images/tailwind.png", bagan: 2, status: "active", updatedAt: new Date() },
    ],
    skipDuplicates: true,
  });

  // Seed Sertifikat
  await prisma.sertifikat.createMany({
    data: [
      { name: "Hackathon Winner", image: "/images/sertifikat1.jpg", status: "active", updatedAt: new Date() },
      { name: "AWS Certified", image: "/images/sertifikat2.jpg", status: "active", updatedAt: new Date() },
    ],
    skipDuplicates: true,
  });

  // Seed Community
  await prisma.community.createMany({
    data: [
      {
        userId: user.id,
        message: "Halo, ini pesan pertama di komunitas!",
        status: "active",
      },
      {
        userId: null,
        message: "Halo Justine 👋",
        status: "active",
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
