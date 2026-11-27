import { getPublishedEvents } from "@/lib/data/events/service";
import TitlePageHeader from "@/components/layout/page-header/title-page-header";
import EventFilters from "@/components/shared/event-filters/event-filters";
import EventCardList from "@/components/shared/event-card-list/event-card-list";

export default async function Events() {
  const eventCards = await getPublishedEvents();

  return (
    <TitlePageHeader
      title={"Katalog wydarzeń"}
      description={
        "Odkrywaj ciekawe wydarzenia, warsztaty i spotkania. Zapisz się i dołącz do społeczności."
      }
    >
      <EventFilters />
      <EventCardList eventCards={eventCards} />
    </TitlePageHeader>
  );
}
