import { Toggle } from "@/components/ui/toggle";

export interface ToggleElement {
  id: number;
  name: string;
  count: number;
}

interface ToggleGroupProps {
  elements: ToggleElement[];
  includeAll?: boolean;
}

export default function ToggleGroup({
  elements,
  includeAll = true,
}: ToggleGroupProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 my-4 first:mt-0">
      {includeAll && (
        <Toggle variant="purple" aria-label="Toggle large" size="lg">
          Wszystkie
        </Toggle>
      )}
      {elements.map(({ id, name, count }) => (
        <Toggle
          disabled={count === 0}
          key={id}
          variant="purple"
          aria-label="Toggle large"
          size="lg"
        >
          {`${name} (${count ?? 0})`}
        </Toggle>
      ))}
    </div>
  );
}
