import Image from "next/image";

interface BigWallProps {
  title?: string;
  image: string;
  children: React.ReactNode;
}

const BigWall = ({ title, image, children }: BigWallProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-2xl my-3">{title}</h1>

      <picture>
        <div className="rounded w-full overflow-hidden aspect-video">
          <Image
            className="w-full border"
            src={image}
            alt={"Big Image"}
            height={1500}
            width={900}
          />
        </div>

        <figcaption className="text-center text-sm italic mt-2">
          {children}
        </figcaption>
      </picture>
    </div>
  );
};
export default BigWall;
