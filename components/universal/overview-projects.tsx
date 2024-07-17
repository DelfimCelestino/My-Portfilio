import { projects } from "@/utils/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const OverviewProjects = () => {
  return (
    <div className="flex flex-col gap-12 mt-8">
      {projects.slice(0, 4).map((project, index) => (
        <div
          className={`flex flex-col justify-content gap-6 ${
            index % 2 === 0
              ? "lg:flex-row md:text-right"
              : "lg:flex-row-reverse"
          }`}
          key={index}
        >
          <div
            id="project"
            className="w-full lg:w-[50%] h-60 relative rounded-md"
          >
            <Image
              className={cn(
                "object-cover rounded-md overflow-hidden",
                project.private && "blur-md"
              )}
              src={project.image}
              alt={project.title}
              layout="fill"
            />
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-2">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-base text-justify text-muted-foreground">
              {project.description}
            </p>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewProjects;
