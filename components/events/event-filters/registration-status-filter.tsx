import ToggleGroup, { ToggleElement } from "@/components/shared/toggle-group";

const registrationStatuses: ToggleElement[] = [
  { id: 1, name: "Moje zapisy", count: 5 },
  { id: 2, name: "Lista oczekujących", count: 2 },
];

export default function RegistrationStatusFilter() {
  return <ToggleGroup includeAll={false} elements={registrationStatuses} />;
}
