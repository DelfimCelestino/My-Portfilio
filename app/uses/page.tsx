import { cn } from "@/lib/utils";
import { uses } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
export async function generateMetadata() {
  return {
    title: "Delfim Celestino - Stacks",
    openGraph: {
      title: "Delfim Celestino - Stacks",
      description: "Stacks",
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
const Uses = () => {
  return (
    <div>
      <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl">
            Tecnologias e Ferramentas
          </h1>
          <p>
            Explore as tecnologias e ferramentas que impulsionam a minha
            experiência em desenvolvimento. Eu seleciono e uso meticulosamente
            essas ferramentas para criar soluções robustas e eficientes,
            priorizando sempre a experiência do usuário.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {uses.map((use, index) => (
            <section className="flex flex-col gap-4" id={use.title} key={index}>
              <h2 className="font-bold text-xl sm:text-2xl">{use.title}</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
                {use.stacks.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="flex items-center gap-3 rounded-md p-3 bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/70 text-accent-foreground transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring"
                      href={"#"}
                    >
                      <div
                        className={cn(
                          "p-2 flex items-center justify-center rounded-lg relative overflow-hidden",
                          item.invert && "dark:invert"
                        )}
                      >
                        <Image
                          className="z-10"
                          height={24}
                          width={24}
                          src={item.icon}
                          alt={item.name}
                        />
                        <Image
                          height={8}
                          width={8}
                          className="blur-lg absolute inset-0 w-[125%] h-[125%] opacity-80 z-0"
                          src={item.icon}
                          alt={item.name}
                        />
                      </div>
                      <span className="text-xs md:text-sm">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Uses;
