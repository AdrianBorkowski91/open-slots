import { EventCardRepository } from "@/lib/data/events/repository";
import { EventCard } from "@/lib/data/events/types";

export const mapToEventCard = ({
  _count,
  ...event
}: EventCardRepository): EventCard => ({
  ...event,
  occupiedPlaces: _count.registrations,
});
