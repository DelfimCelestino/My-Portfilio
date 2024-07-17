import BigWall from "@/components/me/big-wall";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Delfim Celestino - Sobre mim",
    openGraph: {
      title: "Delfim Celestino - Sobre mim",
      description: "Sobre mim",
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
const Me = () => {
  return (
    <div>
      <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
        <h1 className="font-bold text-2xl my-3">Sobre mim</h1>

        <ul className="list-disc ">
          <li>
            <span className="font-bold">Localização:</span>{" "}
            <span className="text-muted-foreground">Nampula, Mozambique</span>
          </li>
          <li>
            <span className="font-bold">Idade:</span>{" "}
            <span className="text-muted-foreground"> 23</span>
          </li>
          <li>
            <span className="font-bold">Cargo:</span>{" "}
            <span className="text-muted-foreground">
              {" "}
              Desenvolvedor Fullstack @{" "}
            </span>
            <Link
              target="_blank"
              className="text-primary underline"
              href={"https://growskills.nl"}
            >
              Growskills
            </Link>
          </li>
          <li>
            <span className="font-bold">Minha stack principal: :</span>{" "}
            <span className="text-muted-foreground">
              ReactJS, NextJS, React Native, NodeJS, TypeScript, JavaScript,
              HTML, CSS
            </span>
          </li>
          <li>
            <span className="font-bold">Idiomas: :</span>{" "}
            <span className="text-muted-foreground">Inglês</span>{" "}
            <small className="opacity-80">(Intermediario)</small> ·{" "}
            <span className="text-muted-foreground"> Português</span>
            <small className="opacity-80">(Nativo)</small>
          </li>
          <li>
            <span className="font-bold">Interesses: :</span>{" "}
            <span className="text-muted-foreground">
              {" "}
              Ouvir música, Viajar, Jogar videogames e Assistir Live Coding
            </span>
          </li>
          <li>
            <span className="font-bold">Pronomes: :</span>{" "}
            <span className="text-muted-foreground"> ele/dele</span>
          </li>
        </ul>

        {/* big wall */}
        <BigWall image="/codeinthedark.jpeg" title="Olá, prazer em conhecê-lo">
          <p className="text-muted-foreground">
            Minha vitoria no{" "}
            <Link
              target="_blank"
              className="underline text-primary font-semibold"
              href={"https://codeinthedark.com/"}
            >
              Code In The Dark Mozambique
            </Link>{" "}
            (Agosto.2023)
          </p>
        </BigWall>

        <div className="flex flex-col gap-3">
          <div>
            Sempre fui apaixonado pela tecnologia e seu impacto no mundo ao
            nosso redor. Desde jovem, me envolvi nas complexidades da
            codificação e no desenvolvimento web, dedicando inúmeras horas a
            explorar diferentes linguagens de programação e estruturas. O que
            começou como um hobby tornou-se rapidamente uma paixão, levando-me a
            seguir uma carreira no desenvolvimento fullstack.
          </div>
          <div>
            Atualmente, estou na equipe do banco Futuro MCB, onde atuo como Analista de TI(Desenvolvedor) não apenas na
            criação de interfaces intuitivas e amigáveis ao usuário, mas também
            no desenvolvimento robusto do backend. Essa abordagem completa me
            permite integrar minha mentalidade criativa com minha experiência
            técnica, resultando em soluções abrangentes e experiências
            envolventes que conectam com os usuários.
          </div>
          <div>
            <h1 className="font-bold text-2xl my-3">Formação acadêmica</h1>
            Com uma licenciatura em Informática, com habilitações em Engenharia
            de Redes e Programação pela Universidade Rovuma, destaco minha
            formação acadêmica que proporcionou uma sólida base teórica em
            programação, algoritmos e estruturas de dados. Durante esse período,
            desenvolvi plataformas de destaque, como a Findizi, que
            posteriormente evoluiu para o Mozalink, entre outras iniciativas.
            Essas experiências não apenas solidificaram meus conhecimentos, mas
            também contribuíram para a criação de soluções inovadoras e
            impactantes.
          </div>
        </div>

        {/* small wall */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <picture>
              <div className="h-80 w-full relative">
                <Image alt="Not found" layout="fill" src={"/findizi.jpg"} />
              </div>
              <figcaption className="text-center text-sm italic mt-2">
                <p className="text-muted-foreground">
                  Screenshot do findizi (abril.2023)
                </p>
              </figcaption>
            </picture>
          </div>
          <div className="flex flex-col gap-2">
            <picture>
              <div className="h-80 w-full relative">
                <Image
                  className="object-contain"
                  alt="Not found"
                  layout="fill"
                  src={"/defesa.jpg"}
                />
              </div>
              <figcaption className="text-center text-sm italic mt-2">
                <p className="text-muted-foreground">
                  Foto depois da defesa de final do curso (abril.2023)
                </p>
              </figcaption>
            </picture>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col gap-3">
          <div>
            Atualmente, estou aprofundando minhas habilidades de programação por
            meio de plataformas online que oferecem cursos atualizados. Além
            disso, contribuo ativamente no desenvolvimento de duas plataformas
            pessoais: Mozalink e Einsrocket. Esses projetos refletem meu
            compromisso em levar meu conhecimento além, aplicando-o em soluções
            inovadoras e impactantes.
          </div>
        </div>
        {/* small wall */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <picture>
              <div className="h-80 w-full relative">
                <Image alt="Not found" layout="fill" src={"/mozalink.jpg"} />
              </div>
              <figcaption className="text-center text-sm italic mt-2">
                <p className="text-muted-foreground">
                  <Link
                    target="_blank"
                    className="underline text-primary font-semibold"
                    href={"https://mozalink.com/"}
                  >
                    Screenshot da plataforma mozalink
                  </Link>{" "}
                  (Junho.2023)
                </p>
              </figcaption>
            </picture>
          </div>
          <div className="flex flex-col gap-2">
            <picture>
              <div className="h-80 w-full relative">
                <Image alt="Not found" layout="fill" src={"/einsrocket.jpg"} />
              </div>
              <figcaption className="text-center text-sm italic mt-2">
                <p className="text-muted-foreground">
                  <Link
                    target="_blank"
                    className="underline text-primary font-semibold"
                    href={"https://einsrocket.netlify.app/"}
                  >
                    Screenshot da plataforma einsrocket
                  </Link>{" "}
                  (Julho.2023)
                </p>
              </figcaption>
            </picture>
          </div>
        </div>
        {/* content */}
        <div>
          <h1 className="font-bold text-2xl my-3">
            Entre em contato comigo :)
          </h1>
          À medida que continuo a crescer tanto pessoal quanto
          profissionalmente, aspiro a contribuir para o desenvolvimento de
          soluções de ponta que impactem positivamente a vida das pessoas ao
          redor do mundo. Sou impulsionado por uma determinação implacável para
          ultrapassar os limites do que é possível, aproveitando minhas
          habilidades para criar experiências digitais significativas e
          impactantes que ressoem com os usuários em um nível profundo. Sinta-se
          à vontade para entrar em contato comigo através das informações de
          contato fornecidas no topo ou na barra de navegação. Estou sempre
          aberto a novas oportunidades, colaborações e conversas envolventes
          sobre o emocionante campo da tecnologia e além.
        </div>

        {/* content */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl ">Nota de conclusão</h1>
          <p>
            Obrigado por visitar meu portfólio e dedicar tempo para saber mais
            sobre minha jornada. Estou entusiasmado com as possibilidades que o
            futuro reserva e ansioso para embarcar em novos desafios que me
            permitam contribuir para o cenário tecnológico em constante
            evolução. Não hesite em entrar em contato comigo, vamos colaborar e
            criar algo notável juntos!
          </p>
          <Image
            width={300}
            height={200}
            className="w-full md:w-1/2 h-auto mx-auto rounded border"
            src={"/see-u.gif"}
            alt="Gif de bob sponja sorrindo"
          />
        </div>
      </div>
    </div>
  );
};
export default Me;
