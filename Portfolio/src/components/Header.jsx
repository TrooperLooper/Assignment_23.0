function Header() {
  return (
    <div>
      <div className="bg-emerald-900/70 md:h-55 h-25 w-full md:mb-6 mb-4">
        <div className="flex items-center flex-col">
          <div className="max-w-2xl flex items-center md:pt-2 pt-5 md:h-40 h-15">
            <img
              src="./images/myportfolio.svg"
              alt="handlettering text saying; My portfolio"
              className=" md:h-40 h-15"
            />
          </div>
        </div>
        <p className="md:text-xl mt-3 text-xs mb-2 font-normal text-white/80 text-center">
          Handpicked milestone projects from my coding journey.
        </p>
      </div>

      <div className="w-auto flex items-center justify-center mt-6">
        <div className="flex items-center md:gap-5 gap-2 m-10">
          <img
            src="./images/mugshot.jpg"
            alt="portrait photo"
            className="md:h-25 h-15 rounded-full shadow-md/30"
          />
          <div className="ml-4 text-left">
            <h3 className="font-bold md:text-base text-md">Lars Munck</h3>
            <p className="text-black/60 md:text-sm text-xs text-left">
              Master of fine arts, on a path to become a front end space-cadet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
