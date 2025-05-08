import LearningComponent from "../components/LearningComponent.jsx";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PopUp from "../components/PopUpWindow.jsx";

function Projects() {
  const [isShown, setIsShown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const handleCardClick = (project) => {
    setPopupContent(project); // innehållet i pop-up
    setShowPopup(true); // visa pop-up
  };

  const handleClosePopup = () => {
    setShowPopup(false); // göm pop-up
  };

  const projects = [
    {
      title: "Flexbox pattern",
      img: "./images/screenshot1.png",
      techused: "Javascript, HTML, CSS",
      info: "Tech used",
      abstract:
        "This project demonstrates a CSS flexbox layout based on a Figma design.",
      text: "In this assignment, we were asked to design a CSS flexbox layout according to a Figma file. This laid the foundation for my understanding of flexbox and responsive design.",
      link: "https://github.com/TrooperLooper/Assignment_5.0/",
    },
    {
      title: "Book library",
      img: "./images/library.png",
      techused: "Javascript, HTML, CSS",
      info: "Tech used",
      abstract:
        "A JavaScript challenge to create a library of books, viewable in the console.",
      text: "This was a fun JavaScript challenge to create a library of books that I either have read or want to read. The library is managed in the console and demonstrates object manipulation and DOM interaction.",
      link: "https://github.com/TrooperLooper/Assignment_16.0/",
    },
    {
      title: "Wordtyping game",
      img: "./images/typinggame.jpg",
      techused: "Javascript, HTML, CSS",
      info: "Tech used",
      abstract:
        "A typing game where you type words as fast as possible to score.",
      text: "You guessed it! This is a game where you need to type the word shown as fast as you can to score points. It demonstrates event handling, timers, and DOM manipulation in JavaScript.",
      link: "https://github.com/TrooperLooper/Assignment_22.0/",
    },
  ];

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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-102 duration-400 cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                <LearningComponent
                  title={project.title}
                  img={project.img}
                  techused={project.techused}
                  info={project.info}
                  abstract={project.abstract} // kort info till kort
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {showPopup && (
        <PopUp
          title={popupContent.title}
          img={popupContent.img}
          text={popupContent.text} // text är längre info
          link={popupContent.link}
          onClose={handleClosePopup}
        />
      )}
      <Footer />
    </>
  );
}

export default Projects;
