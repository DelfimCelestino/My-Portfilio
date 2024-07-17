import CardWrapper from "@/components/card-wrapper";
import ListingMusic from "@/components/listing-music";
import { Button } from "@/components/ui/button";
import OverviewProjects from "@/components/universal/overview-projects";
import { experiences } from "@/utils/utils";
import {
  Briefcase,
  ChevronRight,
  Download,
  Folder,
  Newspaper,
  NotepadText,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stacks = [
  "ReactJS",
  "NextJS",
  "React Native",
  "NodeJS",
  "Typescript",
  "Javascript",
];

export default function Home() {
  return (
    <div>
      <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
        <div>
          <div className="flex gap-6 md:items-center">
            <div className="h-24 w-24 aspect-square rounded-lg overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Um menino negro sorrindo vestido com camisete preta"
                width={100}
                height={100}
              />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-2xl sm:text-3xl">
                Delfim Celestino
              </h1>
              <span className="text-muted-foreground  flex items-center gap-2">
                <Phone size={10} /> Fale comigo:
                <Link
                  className="text-primary underline"
                  href={"tel:+258878405131"}
                >
                  +258 878405131
                </Link>
              </span>
              <span className="text-muted-foreground block">
                Desenvolvedor Fullstack @{" "}
                <Link
                  className="text-primary underline"
                  href={"https://growskills.nl"}
                >
                  Banco Futuro Mcb
                </Link>
              </span>
              <div className="hidden md:flex flex-wrap gap-2 mt-2">
                {stacks.map((stack) => (
                  <span
                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-foreground/90"
                    key={stack}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-wrap gap-2">
          {stacks.map((stack) => (
            <span
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-foreground/90"
              key={stack}
            >
              {stack}
            </span>
          ))}
        </div>
        <div className="block md:hidden">
          <ListingMusic />
        </div>
        <CardWrapper
          title="Sobre mim"
          linktitle="Saber mais"
          link="/me"
          icon={<NotepadText size={20} />}
        >
          <p className="leading-relaxed text-muted-foreground">
            Olá! Sou Delfim Celestino, um desenvolvedor fullstack dedicado com
            expertise no universo JS. Tenho experiência em criar soluções
            robustas e amigáveis ao usuário, priorizando escalabilidade,
            acessibilidade e performance.
          </p>
        </CardWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CardWrapper
            title="Experiências"
            linktitle="Me contrate"
            link="tel:+258878405131"
            icon={<Briefcase size={20} />}
          >
            <div className="flex flex-col gap-4">
              <ol className="flex flex-col h-full gap-6">
                {experiences.map((experience, index) => (
                  <li key={index}>
                    <div className="flex gap-4">
                      <div className="rounded-full h-10 w-10 aspect-square flex justify-center items-center ring-1 bg-muted/50 ring-muted-foreground/40 p-1">
                        <Image
                          height={40}
                          width={40}
                          className="rounded-full object-cover"
                          src={experience.logo}
                          alt={experience.name}
                        />
                      </div>

                      <div className="flex flex-col gap-x-2 w-full">
                        <h2 className="w-full flex-none text-sm font-medium">
                          {experience.name}
                        </h2>
                        <span className="text-xs text-muted-foreground">
                          {experience.position}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {experience.time}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                className="w-full"
                href={"/cv.pdf"}
                target="_blank"
                download
              >
                <Button className="gap-2 flex items-center w-full">
                  Baixar meu currículo <Download size={15} />
                </Button>
              </Link>
            </div>
          </CardWrapper>
          <CardWrapper
            title="Últimos posts"
            linktitle="Ver todos"
            link="/blog"
            icon={<Newspaper size={20} />}
          >
            <div className="flex flex-col items-center justify-center gap-4 group">
              <div className="flex items-center justify-center bg-accent rounded-full h-20 w-20 group-hover:rotate-6 transition-all">
                <Image
                  className="pt-2"
                  alt="😀"
                  src={"/avatar.png"}
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-muted-foreground text-center">
                Eu não escrevi nenhum post ainda
              </span>
            </div>
          </CardWrapper>
        </div>

        {/* projects */}
        <CardWrapper
          title="Meus projetos"
          linktitle="Ver todos"
          link="/projects"
          icon={<Folder size={20} />}
        >
          <OverviewProjects />
        </CardWrapper>
      </div>
    </div>
  );
}
