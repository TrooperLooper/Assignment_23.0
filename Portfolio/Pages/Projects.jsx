import LearningComponent from "../src/components/LearningComponent.jsx";
import { useState } from "react";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";

function Projects() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <button
          className="m-4 p-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition duration-300"
          onClick={() => setIsShown(!isShown)}
        >
          {isShown ? "Hide" : "Show"} Projects
        </button>
      </div>
      {isShown && (
        <div className="@container">
          <div className="grid grid-cols-1 @sm:grid-cols-2 gap-5 justify-center">
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
                img="./images/typinggame.jpg"
                techused="Javascript, HTML, CSS"
                info="Tech used"
                text="You guessed it! This is a game where you need to type the word shown - as fast as you can to score."
                link="https://github.com/TrooperLooper/Assignment_22.0/"
              />
            </div>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;

{
  /*

  <Footer /> component is not sticking to bottom of the page what to do?


  function PopUp() {
  const [isShown, setIsShown] = useState(0);
  const [popupInfo, setPopupInfo] = useState({
    title: "",
    img: "",
    techused: "",
    info: "This is some info about the project",
    link: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  }
  return (
<div> 
<button onClick={() => setIsOpen(true)}>Open Popup</button>
<h1>{isOpen}</h1>
isOpen && (
<PopupWindow title={popupInfo.title} info= {popupInfo.info} onClick={closePopup}/>
<div>
</div> 
);
}

export

  */
}
