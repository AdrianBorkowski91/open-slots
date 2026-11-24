import ToggleGroup, { ToggleElement } from "@/components/shared/toggle-group";

const statuses: ToggleElement[] = [
  { id: 1, name: "Szkice", count: 2 },
  { id: 2, name: "Nadchodzące", count: 5 },
  { id: 3, name: "Zakończone", count: 8 },
  { id: 4, name: "Anulowane", count: 1 },
  { id: 5, name: "Inne", count: 0 },
];
export default function StatusFilter() {
  return <ToggleGroup elements={statuses} />;
}
