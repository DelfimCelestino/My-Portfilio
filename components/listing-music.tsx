import { Music } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const ListingMusic = () => {
  return (
    <div className="flex justify-between items-center px-3 gap-3 relative">
      <div className="flex gap-2 items-center  flex-1 md:w-[13rem] group transition-colors pointer-events-none">
        <div className=" relative h-6 w-6 flex items-center justify-center rounded-full ">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full pl-1 opacity-75 
bg-primary"
          />
          <Music size={15} />
        </div>
        <p className="text-sm font-medium">Coding and listening LO-FI</p>
      </div>

      <div className="hidden md:flex w-fit h-fit">
        <ModeToggle />
      </div>
    </div>
  );
};
export default ListingMusic;
