import PageHeader from "@/components/layout/page-header/page-header";
import { ReactNode } from "react";

interface TitlePageHeaderProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function TitlePageHeader({
  title,
  description,
  children,
}: TitlePageHeaderProps) {
  return (
    <PageHeader
      heading={
        <>
          <h1 className="text-4xl font-extrabold pb-2">{title}</h1>
          <p className="text-zinc-600 text-lg">{description}</p>
        </>
      }
    >
      {children}
    </PageHeader>
  );
}
