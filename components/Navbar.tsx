import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-bgElement px-4 md:px-16 py-5 max-w-8xl">
      <h2 className="font-bold lg:text-3xl md:text-2xl text-sm">
        Where in the world?
      </h2>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
