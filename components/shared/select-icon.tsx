import { LucideIcon } from "lucide-react/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectIconProps {
  icon: LucideIcon;
  selectOptions: SelectOption[];
}

export default function SelectIcon({
  icon: Icon,
  selectOptions,
}: SelectIconProps) {
  return (
    <Select items={selectOptions}>
      <SelectTrigger className="w-full">
        <Icon className="size-4" />
        <SelectValue placeholder="Lokalizacja" />
      </SelectTrigger>

      <SelectContent>
        {selectOptions.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
