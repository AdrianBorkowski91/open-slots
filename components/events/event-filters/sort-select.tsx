import { ArrowDownUp } from "lucide-react";
import SelectIcon from "@/components/shared/select-icon";

const sortOptions = [
  { value: "date-asc", label: "Data ↑" },
  { value: "date-desc", label: "Data ↓" },
  { value: "name-asc", label: "A–Z" },
  { value: "name-desc", label: "Z–A" },
];

export default function SortSelect() {
  return <SelectIcon icon={ArrowDownUp} selectOptions={sortOptions} />;
}
