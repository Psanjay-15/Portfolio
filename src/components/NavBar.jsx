const NavBar = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-4 py-2">
        <p className="font-bold text-2xl md:text-3xl bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-500  bg-clip-text text-transparent">
          <span className="md:hidden">SP.</span>
          <span className="hidden md:inline">sanjayP.</span>
        </p>
      </div>
    </>
  );
};

export default NavBar;
