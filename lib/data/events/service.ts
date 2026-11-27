import { findPublishedEvents } from "@/lib/data/events/repository";
import { mapToEventCard } from "@/lib/data/events/mapper";

export async function getPublishedEvents() {
  "use cache";

  const events = await findPublishedEvents();
  return events.map(mapToEventCard);
}
