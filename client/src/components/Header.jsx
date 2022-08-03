import { BsChevronRight, BsFillBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between px-5 md:px-10 py-5 h-[10%] 
    bg-white shadow-sm"
    >
      <div className="flex items-center gap-x-20">
        <img className="h-10" src="trello.png" alt="logo" />
        <div className="hidden text-lg lg:flex items-center font-medium gap-x-5 text-primary">
          <h2>Projects</h2>
          <h2>Clients</h2>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="relative group cursor-pointer hidden lg:inline-block">
          <div
            className="h-[10px] w-[10px] animate-bounce bg-primary rounded-full absolute top-0 right-5 z-10
          border-2 border-white"
          />
          <BsFillBellFill className="text-2xl mr-5 text-gray-500 group-hover:text-primary transitionClass" />
        </div>

        <div className="hidden md:flex flex-col items-end">
          <span className="font-medium">Menura Adithya</span>
          <span className="text-sm text-gray-600">Developer</span>
        </div>
        <img
          className="rounded-full w-12 h-12 p-[2px] border-2 border-primary"
          src="https://avatars.githubusercontent.com/u/64089619?v=4"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;