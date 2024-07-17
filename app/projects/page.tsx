import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/utils/utils";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export async function generateMetadata() {
  return {
    title: "Delfim Celestino - Projectos",
    openGraph: {
      title: "Delfim Celestino - Projectos",
      description: "Projectos",
      images: [
        {
          url: "/icon-192x192.png",
          width: 800,
          height: 600,
          alt: "logo",
        },
      ],
    },
  };
}
const Projects = () => {
  return (
    <div>
      <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl">Meus projetos</h1>
          <p>
            Aqui estão alguns de meus projetos que desenvolvi, você pode
            encontra mais em meu{" "}
            <Link
              className="underline font-bold flex items-center"
              href={"https://github.com/denycelestino"}
            >
              Github <Github size={15} />
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex flex-col gap-2 p-2">
                  <div className="h-60 w-full relative rounded-md overflow-hidden">
                    <Image
                      className={cn(
                        "brightness-75 group-hover:brightness-100 object-cover group-hover:scale-105 w-full h-full transition-all duration-300",
                        project.private && "blur-sm"
                      )}
                      layout="fill"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <h3 className="font-semibold leading-none tracking-tight text-xl">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
                <footer className="flex flex-col md:flex-row items-center gap-4">
                  <Button
                    disabled={!project.visit}
                    className="w-full bg-primary"
                    size={"sm"}
                  >
                    <Link
                      target="_blank"
                      className="flex items-center gap-2"
                      href={project.visit ? project.visit : "#"}
                    >
                      <ArrowUpRight size={20} /> Visit
                    </Link>
                  </Button>
                  <Button
                    disabled={!project.github}
                    variant={"outline"}
                    className="w-full"
                    size={"sm"}
                  >
                    <Github size={20} /> Source code
                  </Button>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
