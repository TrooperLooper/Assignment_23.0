import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <>
      <Header />;<p>Nothing to see here</p>
      <Footer />;
    </>
  );
}

export default Home;

/*


    
        <button
          className="mt-4 p-2 bg-emerald-500 text-white rounded"
          onClick={() => setIsShown(!isShown)}
        >
          {isShown ? "Hide" : "Show"} Projects
        </button>
      </div>
      {isShown && ( //error?
        <div className="@container">
          <div className="grid grid-cols-1 @sm:grid-cols-2  gap-5 justify-center">
            <div className="transition-transform transform hover:scale-102 duration-400">
              <LearningComponent
                title="Flexbox pattern"
                img="./images/screenshot1.png"
                techused="Javascript, HTML, CSS"
                info="Tech used"
                text="In this assignment we were asked to design a CSS flexbox layout, accordingly to a figma file. This layed the foundation for my understanding of flex."
                link="https://github.com/TrooperLooper/Assignment_5.0/"
              />
            </div>
            <div className="transition-transform transform hover:scale-102 duration-400">
              <LearningComponent
                title="Book library"
                img="./images/library.png"
                techused="Javascript, HTML, CSS"
                info="Tech used"
                text="This was a fun javascript challenge, to create a library of books, that I either have read or want to read. This is viewed in the console."
                link="https://github.com/TrooperLooper/Assignment_16.0/"
              />
            </div>
            <div className="transition-transform transform hover:scale-102 duration-400">
              <LearningComponent
                title="Wordtyping game"
                img="./images/screenshot1.png"
                techused="Javascript, HTML, CSS"
                info="Tech used"
                text="You guessed it! This is a game where you need to type the word shown - as fast as you can to score."
                link="https://github.com/TrooperLooper/Assignment_16.0/"
              />
            </div>
          </div>
        </div>
      )}

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
            Lars Munck. 2025 - To get in touch with me, please visit my{" "}
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
    </div>

    */
