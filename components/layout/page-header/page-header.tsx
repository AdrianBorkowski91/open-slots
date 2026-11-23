import { ReactNode } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PageHeaderProps {
  heading: ReactNode;
  children: ReactNode;
}

export default function PageHeader({ heading, children }: PageHeaderProps) {
  return (
    <div>
      <header
        className={
          "flex justify-between gap-6 w-full p-6 bg-purple-25 border-b-2 border-zinc-100"
        }
      >
        <div>{heading}</div>
        <Link href="/profile" aria-label="Przejdź do profilu">
          <Avatar className="grayscale" size={"lg"}>
            <AvatarImage
              src="https://github.com/pranathip.png"
              alt="@pranathip"
            />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </Link>
      </header>
      <main className={"p-6"}>{children}</main>
    </div>
  );
}
