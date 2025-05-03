function Footer() {
  return (
    <div className="flex h-55 flex-col mt-20">
      <img
        src="/images/thanks-dark.svg"
        className=" h-10 m-3"
        alt="Thanks for visiting"
      />
      <img
        src="/images/banner.svg"
        className="h-15 mb-5 flex flex-justify-center "
        alt="small banner with the text: come back soon"
      />
      <footer className="bg-emerald-700/70 h-11 flex justify-center items-center">
        <p className="text-white/70 text-xs">
          Lars Munck. 2025 - Go to{" "}
          <a
            href="https://github.com/TrooperLooper"
            className="hover:text-blue-500 underline"
          >
            Github
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
