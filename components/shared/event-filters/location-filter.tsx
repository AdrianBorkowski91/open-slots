import { MapPin } from "lucide-react";
import SelectIcon from "@/components/shared/select-icon";

const locationOptions = [
  { value: "all", label: "Wszystkie" },
  { value: "warsaw", label: "Warszawa" },
  { value: "krakow", label: "Kraków" },
  { value: "wroclaw", label: "Wrocław" },
  { value: "gdansk", label: "Gdańsk" },
  { value: "poznan", label: "Poznań" },
];

export default function LocationFilter() {
  return <SelectIcon icon={MapPin} selectOptions={locationOptions} />;
}
