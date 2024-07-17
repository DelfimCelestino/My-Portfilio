import { ChevronRight, NotepadText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardWrapperProps {
  title: string;
  linktitle: string;
  link: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const CardWrapper = ({
  title,
  linktitle,
  link,
  children,
  icon,
}: CardWrapperProps) => {
  return (
    <Card className="grid w-full gap-2">
      <CardContent className="p-6">
        <header className="flex justify-between items-center mb-4">
          <h2 className="flex items-center gap-2">
            {icon}
            {title}
          </h2>
          <Button variant={"link"}>
            <Link
              className="flex items-center text-primary underline"
              href={link}
            >
              {linktitle} <ChevronRight size={15} />
            </Link>
          </Button>
        </header>
        {children}
      </CardContent>
    </Card>
  );
};
export default CardWrapper;
