const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-4 py-2">
        <p className="font-bold text-2xl md:text-3xl bg-gradient-to-tr from-sky-900 to-pink-200 bg-clip-text text-transparent">
          <span className="md:hidden">TE</span>
          <span className="hidden md:inline">SanjayP.</span>
        </p>
      </div>
    </>
  );
};

export default NavBar;
