import LearningComponent from "./LearningComponent.jsx";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import "./App.css";

function Projects() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Header />
      <button
        className="mt-4 p-2 bg-emerald-500 text-white rounded"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? "Hide" : "Show"} Projects
      </button>
      {isShown && (
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
      <Footer />
    </>
  );
}

export default Projects;
