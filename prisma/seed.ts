import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import {
  City,
  EventCategory,
  EventStatus,
  PrismaClient,
} from "@/lib/generated/prisma/client";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

function getDate(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(10, 0, 0, 0);
  return date;
}

async function main() {
  const passwordHash = await bcrypt.hash("Test123!", 12);

  // CATEGORIES
  await prisma.eventCategory.createMany({
    data: [
      { name: "Technologia" },
      { name: "Biznes" },
      { name: "Edukacja" },
      { name: "Sport" },
      { name: "Kultura" },
      { name: "Networking" },
      { name: "Inne" },
    ],
    skipDuplicates: true,
  });

  // CITIES
  await prisma.city.createMany({
    data: [
      { name: "Warszawa" },
      { name: "Kraków" },
      { name: "Wrocław" },
      { name: "Poznań" },
      { name: "Gdańsk" },
      { name: "Łódź" },
      { name: "Katowice" },
      { name: "Lublin" },
    ],
    skipDuplicates: true,
  });

  // USERS
  await prisma.user.createMany({
    data: [
      {
        email: "adam.kowalski@example.com",
        name: "Adam Kowalski",
        password: passwordHash,
        bio: "Pasjonat technologii i programowania.",
      },
      {
        email: "anna.nowak@example.com",
        name: "Anna Nowak",
        password: passwordHash,
        bio: "Organizuję warsztaty i wydarzenia edukacyjne.",
      },
      {
        email: "piotr.wisniewski@example.com",
        name: "Piotr Wiśniewski",
        password: passwordHash,
        bio: "Interesuję się sportem i rozwojem osobistym.",
      },
      ...Array.from({ length: 20 }, (_, index) => ({
        email: `participant${index + 1}@example.com`,
        name: `Uczestnik ${index + 1}`,
        password: passwordHash,
      })),
    ],
    skipDuplicates: true,
  });

  const adam = await prisma.user.findUniqueOrThrow({
    where: { email: "adam.kowalski@example.com" },
  });

  const anna = await prisma.user.findUniqueOrThrow({
    where: { email: "anna.nowak@example.com" },
  });

  const piotr = await prisma.user.findUniqueOrThrow({
    where: { email: "piotr.wisniewski@example.com" },
  });

  const participants = await prisma.user.findMany({
    where: {
      email: {
        in: Array.from(
          { length: 20 },
          (_, index) => `participant${index + 1}@example.com`,
        ),
      },
    },
    orderBy: { email: "asc" },
  });

  const allParticipants = [anna, piotr, ...participants];

  // DICTIONARIES
  const categories = await prisma.eventCategory.findMany();
  const cities = await prisma.city.findMany();

  function getCategoryId(name: string): string {
    const category = categories.find(
      (item: EventCategory) => item.name === name,
    );

    if (!category) {
      throw new Error(`Category not found: ${name}`);
    }

    return category.id;
  }

  function getCityId(name: string): string {
    const city = cities.find((item: City) => item.name === name);

    if (!city) {
      throw new Error(`City not found: ${name}`);
    }

    return city.id;
  }

  // EVENTS DATA
  const events = [
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Warsztaty React",
      categoryId: getCategoryId("Technologia"),
      cityId: getCityId("Warszawa"),
      date: getDate(7),
      maxPlaces: 10,
      shortDescription: "Praktyczne warsztaty z biblioteki React.",
      description:
        "Tworzenie aplikacji z wykorzystaniem komponentów, hooków oraz zarządzania stanem.",
      registeredCount: 10,
      waitlistedCount: 5,
    },
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Podstawy TypeScript",
      categoryId: getCategoryId("Technologia"),
      cityId: getCityId("Warszawa"),
      date: getDate(14),
      maxPlaces: 5,
      shortDescription: "Wprowadzenie do TypeScript.",
      description:
        "Poznaj typy, interfejsy, funkcje generyczne oraz podstawowe mechanizmy TypeScript.",
      registeredCount: 5,
      waitlistedCount: 3,
    },
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Spotkanie networkingowe",
      categoryId: getCategoryId("Networking"),
      cityId: getCityId("Kraków"),
      date: getDate(10),
      maxPlaces: 20,
      shortDescription: "Poznaj nowych ludzi z branży IT.",
      description:
        "Spotkanie dla osób zainteresowanych wymianą doświadczeń i budowaniem relacji zawodowych.",
      registeredCount: 0,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Warsztaty fotograficzne",
      categoryId: getCategoryId("Kultura"),
      cityId: getCityId("Wrocław"),
      date: getDate(21),
      maxPlaces: 5,
      shortDescription: "Naucz się podstaw fotografii.",
      description:
        "Praktyczne zajęcia dotyczące kompozycji, ekspozycji i pracy ze światłem.",
      registeredCount: 5,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Wprowadzenie do jogi",
      categoryId: getCategoryId("Sport"),
      cityId: getCityId("Warszawa"),
      date: getDate(3),
      maxPlaces: 15,
      shortDescription: "Zajęcia jogi dla początkujących.",
      description: "Podstawowe pozycje, ćwiczenia oddechowe i relaksacja.",
      registeredCount: 4,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Konferencja technologiczna",
      categoryId: getCategoryId("Technologia"),
      cityId: getCityId("Poznań"),
      date: getDate(45),
      maxPlaces: 50,
      shortDescription: "Spotkanie entuzjastów technologii.",
      description:
        "Konferencja poświęcona nowoczesnym technologiom i architekturze aplikacji.",
      registeredCount: 20,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.PUBLISHED,
      title: "Warsztaty kulinarne",
      categoryId: getCategoryId("Inne"),
      cityId: getCityId("Gdańsk"),
      date: getDate(18),
      maxPlaces: 10,
      shortDescription: "Praktyczne warsztaty gotowania.",
      description:
        "Wspólne przygotowywanie potraw oraz nauka podstawowych technik kulinarnych.",
      registeredCount: 9,
      waitlistedCount: 0,
    },
    {
      organizerId: anna.id,
      status: EventStatus.PUBLISHED,
      title: "Warsztaty UX/UI",
      categoryId: getCategoryId("Edukacja"),
      cityId: getCityId("Warszawa"),
      date: getDate(12),
      maxPlaces: 10,
      shortDescription: "Podstawy projektowania interfejsów.",
      description:
        "Projektowanie użytecznych interfejsów i analiza potrzeb użytkowników.",
      registeredCount: 3,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.DRAFT,
      title: "Szkolenie z Next.js",
      categoryId: getCategoryId("Technologia"),
      cityId: getCityId("Warszawa"),
      date: getDate(30),
      maxPlaces: 10,
      shortDescription: "Tworzenie aplikacji w Next.js.",
      description:
        "Szkolenie obejmujące App Router, Server Components i Server Actions.",
      registeredCount: 0,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.DRAFT,
      title: "Podstawy Pythona",
      categoryId: getCategoryId("Edukacja"),
      cityId: getCityId("Łódź"),
      date: getDate(35),
      maxPlaces: 15,
      shortDescription: "Programowanie w Pythonie.",
      description:
        "Wprowadzenie do składni języka Python, funkcji i struktur danych.",
      registeredCount: 0,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.ARCHIVED,
      title: "Maraton programowania",
      categoryId: getCategoryId("Technologia"),
      cityId: getCityId("Katowice"),
      date: getDate(-20),
      maxPlaces: 20,
      shortDescription: "Zespołowy maraton programowania.",
      description: "Wspólne rozwiązywanie zadań programistycznych.",
      registeredCount: 12,
      waitlistedCount: 0,
    },
    {
      organizerId: adam.id,
      status: EventStatus.CANCELLED,
      title: "Spotkanie biznesowe",
      categoryId: getCategoryId("Biznes"),
      cityId: getCityId("Lublin"),
      date: getDate(5),
      maxPlaces: 10,
      shortDescription: "Spotkanie przedsiębiorców.",
      description:
        "Wymiana doświadczeń biznesowych i rozwój przedsiębiorczości.",
      registeredCount: 4,
      waitlistedCount: 0,
    },
  ];

  // AGENDA DATA
  const agenda = [
    {
      name: "Powitanie uczestników",
      minutes: 15,
      position: 1,
    },
    {
      name: "Wprowadzenie do tematu",
      minutes: 30,
      position: 2,
    },
    {
      name: "Część praktyczna",
      minutes: 60,
      position: 3,
    },
    {
      name: "Przerwa",
      minutes: 15,
      position: 4,
    },
    {
      name: "Podsumowanie i pytania",
      minutes: 30,
      position: 5,
    },
  ];

  const generateAgendaElements = () => {
    return [
      "Powitanie uczestników",
      "Wprowadzenie do tematu",
      "Część praktyczna",
      "Przerwa",
      "Podsumowanie i pytania",
    ].map((element, index) => ({
      name: element,
      position: index + 1,
      minutes: (Math.floor(Math.random() * 9) + 1) * 5,
    }));
  };

  // RESET AND CREATE EVENTS
  await prisma.$transaction(
    async (tx) => {
      await tx.eventRegistration.deleteMany();
      await tx.agendaElement.deleteMany();
      await tx.event.deleteMany();

      for (const eventData of events) {
        const { registeredCount, waitlistedCount, ...data } = eventData;

        const event = await tx.event.create({
          data,
        });

        // AGENDA
        await tx.agendaElement.createMany({
          data: generateAgendaElements().map((element) => ({
            ...element,
            eventId: event.id,
          })),
        });

        // REGISTRATIONS
        const selectedParticipants = allParticipants
          .filter((user) => user.id !== event.organizerId)
          .slice(0, registeredCount + waitlistedCount);

        const registrationStart =
          Math.min(Date.now(), event.date.getTime()) - 86400000;

        if (selectedParticipants.length > 0) {
          await tx.eventRegistration.createMany({
            data: selectedParticipants.map((user, index) => ({
              eventId: event.id,
              userId: user.id,
              isWaitlisted: index >= registeredCount,
              createdAt: new Date(registrationStart + index * 60000),
            })),
          });
        }
      }
    },
    {
      timeout: 60000,
    },
  );

  console.log("Database seeded successfully.");
}

main()
  .catch((error) => {
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
