import { Separator } from "@/components/ui/separator";
import CategoryFilter from "@/components/events/event-filters/category-filter";
import SearchFilter from "@/components/events/event-filters/search-filter";
import DatePickerWithRange from "@/components/events/event-filters/date-filter";
import LocationFilter from "@/components/events/event-filters/location-filter";
import StatusFilter from "@/components/events/event-filters/status-filter";
import RegistrationStatusFilter from "@/components/events/event-filters/registration-status-filter";
import SortSelect from "@/components/events/event-filters/sort-select";

type FilterType = "category" | "registration" | "status";

interface EventFiltersProps {
  filterType?: FilterType;
}

function renderFunction(filterType: FilterType) {
  switch (filterType) {
    case "category":
      return <CategoryFilter />;
    case "registration":
      return <RegistrationStatusFilter />;
    case "status":
      return <StatusFilter />;
    default:
      return null;
  }
}

export default function EventFilters({
  filterType = "category",
}: EventFiltersProps) {
  return (
    <div>
      {renderFunction(filterType)}
      <Separator />
      <div className={`mt-4 grid grid-cols-12 gap-4`}>
        <div className={`col-span-7 `}>
          <SearchFilter />
        </div>{" "}
        <div className={`col-span-2`}>
          <LocationFilter />
        </div>
        <div className={`col-span-2`}>
          <DatePickerWithRange />
        </div>
        <div className={`col-span-1`}>
          <SortSelect />
        </div>
      </div>
    </div>
  );
}
