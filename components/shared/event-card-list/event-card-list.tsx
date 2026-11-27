import { EventCard } from "@/lib/data/events/types";
import EventCardItem from "@/components/shared/event-card-list/event-card-item";

interface EventCardListProps {
  eventCards: EventCard[];
}

export default function EventCardList({ eventCards }: EventCardListProps) {
  return (
    <div className={"flex flex-col gap-4 mt-8"}>
      {eventCards.map((eventCard) => (
        <EventCardItem key={eventCard.id} eventCard={eventCard} />
      ))}
    </div>
  );
}
