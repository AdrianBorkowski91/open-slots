import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/layout/page-header/page-header";

interface TitlePageHeaderProps {
  link: string;
  label: string;
  children: ReactNode;
}

export default function BackPageHeader({
  link,
  label,
  children,
}: TitlePageHeaderProps) {
  return (
    <PageHeader
      heading={
        <>
          <Link href={link} className={"flex gap-2 0 text-purple-900"}>
            <ArrowLeft />
            <span className={"font-medium tracking-wide"}>{label}</span>
          </Link>
        </>
      }
    >
      {children}
    </PageHeader>
  );
}
