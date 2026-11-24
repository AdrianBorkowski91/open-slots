import ToggleGroup, { ToggleElement } from "@/components/shared/toggle-group";

const categories: ToggleElement[] = [
  { id: 1, name: "Warsztaty", count: 5 },
  { id: 2, name: "Meetup", count: 3 },
  { id: 3, name: "Technologia", count: 8 },
  { id: 4, name: "Sport", count: 4 },
  { id: 5, name: "Kultura", count: 0 },
  { id: 6, name: "Inne", count: 2 },
];

export default function CategoryFilter() {
  return <ToggleGroup elements={categories} />;
}
