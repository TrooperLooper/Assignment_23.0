import "./App.css";

import LearningComponent from "./LearningComponent.jsx";

function App() {
  return (
    <>
      <body className="bg-emerald-100">
        <div className="bg-emerald-900/70 md:h-55 h-25 w-full lg:w-full md:mb-10 mb-4">
          <div className="flex items-center flex-col">
            <div className="max-w-2xl flex items-center md:pt-2 pt-5 md:h-40 h-15">
              <img
                src="./images/myportfolio.svg"
                alt="handlettering text saying; My portfolio"
                className=" md:h-40 h-15"
              />
            </div>
            <p className="md:text-xl md: mt-5 text-xs font-normal text-white/80">
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
                  Master of fine arts, on a path to become a front end
                  space-cadet.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
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
          <div className="flex h-55 flex-col mt-20">
            <img
              src="/images/thanks-dark.svg"
              className=" h-10 m-3"
              alt="Thanks for visiting"
            />
            <img
              src="/images/banner.svg"
              className="filter drop-shadow-lg h-15 mb-5 flex flex-justify-center "
              alt="small banner with the text: come back soon"
            />
            <footer className="bg-emerald-700/70 h-11 flex justify-center items-center">
              <p className="text-white/70 text-xs">
                Lars Munck. 2025 - To get in touch with me, please visist my
                Github page.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;

/*
    <LearningComponent title= "Book library"/>
    <LearningComponent title= "Wordguessing game"/>

    <LearningComponent img= "./images/screendump2.jpg"/>
    <LearningComponent img= "./images/screendump3.jpg"/>

    <LearningComponent text= "In this assignment we were asked to design a flexbox layout accordingly to a figma file."/>
    <LearningComponent text= "bla bla" />
    <LearningComponent text= "bla bla" /> 
    <a href="https://github.com/TrooperLooper/Assignment_16.0"></a>
*/
