import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchFilter() {
  return (
    <InputGroup className="w-full">
      <InputGroupInput
        id="inline-start-input"
        placeholder="Szukaj wydarzenia..."
      />
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}
