import { prisma } from "@/lib/data/db/connection";
import { EventStatus } from "@/lib/generated/prisma/enums";

export const findPublishedEvents = () => {
  return prisma.event.findMany({
    where: {
      status: EventStatus.PUBLISHED,
    },

    select: {
      id: true,
      title: true,
      status: true,
      thumbnailUrl: true,
      date: true,
      maxPlaces: true,
      shortDescription: true,
      _count: {
        select: {
          registrations: {
            where: {
              isWaitlisted: false,
            },
          },
        },
      },
      category: true,
      city: true,
    },
  });
};

export type EventCardRepository = Awaited<
  ReturnType<typeof findPublishedEvents>
>[number];
