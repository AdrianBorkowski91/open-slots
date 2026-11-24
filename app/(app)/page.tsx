import TitlePageHeader from "@/components/layout/page-header/title-page-header";
import EventFilters from "@/components/events/event-filters/event-filters";

export default function Events() {
  return (
    <TitlePageHeader
      title={"Katalog wydarzeń"}
      description={
        "Odkrywaj ciekawe wydarzenia, warsztaty i spotkania. Zapisz się i dołącz do społeczności."
      }
    >
      <EventFilters />
    </TitlePageHeader>
  );
}
