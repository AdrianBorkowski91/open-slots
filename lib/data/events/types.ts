import { EventCardRepository } from "@/lib/data/events/repository";

export type EventCard = Omit<EventCardRepository, "_count"> & {
  occupiedPlaces: number;
};
