import "./App.css";

import LearningComponent from "./LearningComponent.jsx";

function App() {
  return (
    <>
      <body className="bg-emerald-100">
        <div className="bg-emerald-900/70 h-50 w-full lg:w-full mb-10">
          <div className="max-w-3xl flex justify-center items-center h-40">
            <img
              src="/images/myportfolio.svg"
              alt="handlettering text saying; My portfolio"
              className="m-10"
            />
          </div>
          <p className="text-xl font-normal text-white/80">
            Handpicked tasty projects from my coding journey in 2025.
          </p>
        </div>

        <div className="w-auto flex flex-justify-center items-center">
          <div className="flex flex-justify-center items-center gap-5 m-10">
            <img
              src="/images/mugshot.jpg"
              alt="portrait photo"
              className="h-30 rounded-full shadow-lg"
            />
            <div className="ml-5 text-left">
              <h3 className="font-bold text-xl">Lars Munck</h3>
              <p className="text-black/70">
                Master in fine arts, now on a path to become a front end
                space-cadet.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <LearningComponent
            title="Flexbox pattern"
            img="./images/screenshot1.png"
            techused="Javascript, HTML, CSS"
            info="Tech used"
            text="In this assignment we were asked to design a flexbox layout accordingly to a figma file."
            link="https://github.com/TrooperLooper/Assignment_5.0/"
          />
          <LearningComponent
            title="Book library"
            img="./images/library.png"
            techused="Javascript, HTML, CSS"
            info="Tech used"
            text="This was a fun challenge, to create a library of books I either have read or want to read in javascript."
            link="https://github.com/TrooperLooper/Assignment_16.0/"
          />
          <LearningComponent
            title="Wordguessing game"
            img="./images/screenshot1.png"
            techused="Javascript, HTML, CSS"
            info="Tech used"
            text="In this assignment we were asked to design a flexbox layout accordingly to a figma file."
            link="https://github.com/TrooperLooper/Assignment_16.0/"
          />
        </div>
        <div className="flex h-80 flex-col bg-gradient-to-t from-emerald-800 to-emerald-100 mt-20">
          <img
            src="/images/thanksnote.svg"
            className="filter drop-shadow-sm h-20"
            alt="Thanks for visiting"
          />
          <img
            src="/images/banner.svg"
            className="filter drop-shadow-lg h-12 flex flex-justify-center "
            alt="small banner with the text: come back soon"
          />
          <p className="text-white/70 text-xs">Lars Munck. 2025</p>
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
