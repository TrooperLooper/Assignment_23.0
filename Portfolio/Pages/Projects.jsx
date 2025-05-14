import LearningComponent from "../src/components/LearningComponent.jsx";
import { useState } from "react";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import PopUp from "../src/components/PopUpWindow.jsx";

function Projects() {
  const [isShown, setIsShown] = useState(false); // visa projekt är false
  const [showPopup, setShowPopup] = useState(false); // showPopup är false
  const [popupContent, setPopupContent] = useState({}); //popUpContent är en tom array
  const [search, setSearch] = useState(""); // sökfältet är tomt

  const handleCardClick = (project) => {
    setPopupContent(project); // innehållet i pop-up
    setShowPopup(true); // visa pop-up
  };

  const handleClosePopup = () => {
    setShowPopup(false); // göm pop-up
  };

  const projects = [
    // array med projekt
    {
      title: "Flexbox pattern",
      img: "./images/screenshot1.png",
      techused: ["HTML", "CSS"],
      info: "Tech used",
      abstract:
        "This project demonstrates a CSS flexbox layout based on a Figma design.",
      text: "In this assignment, we were asked to design a CSS flexbox layout according to a Figma file. This laid the foundation for my understanding of flexbox and responsive design. This was a solo-project.",
      link: "https://github.com/TrooperLooper/Assignment_5.0/",
    },
    {
      title: "Book library",
      img: "./images/library.png",
      techused: ["HTML", "CSS", "Javascript"],
      info: "Tech used",
      abstract:
        "A JavaScript challenge to create a library of books, viewable in the console.",
      text: "This was a fun JavaScript challenge to create a library of books that I either have read or want to read. The library is managed in the console and demonstrates object manipulation and DOM interaction. This was a solo-project.",
      link: "https://github.com/TrooperLooper/Assignment_16.0/",
    },
    {
      title: "Wordtyping game",
      img: "./images/typinggame.jpg",
      techused: ["HTML", "CSS", "Javascript"],
      info: "Tech used",
      abstract:
        "A typing game where you type words as fast as possible to score.",
      text: "I coded a game where you need to type the word shown as fast as you can to score points. It demonstrates event handling, timers, and DOM manipulation in JavaScript. This was a solo-project.",
      link: "https://github.com/TrooperLooper/Assignment_22.0/",
    },
    {
      title: "Hangman game",
      img: "./images/typinggame.jpg",
      techused: ["HTML", "CSS", "Javascript"],
      info: "Tech used",
      abstract:
        "A typing game where you type words as fast as possible to score.",
      text: "I coded a game where you need to type the word shown as fast as you can to score points. It demonstrates event handling, timers, and DOM manipulation in JavaScript. This was a solo-project.",
      link: "https://github.com/TrooperLooper/Assignment_22.0/",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <button
          className="mt-4 mb-10 p-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition duration-300"
          onClick={() => setIsShown(!isShown)}
        >
          {isShown ? "Hide" : "Show"} Projects
        </button>
      </div>{" "}
      {/* knappen som visar projekten */}
      {isShown && (
        <>
          {/* Search bar */}
          <div className="flex justify-center mt-4">
            <input
              type="text"
              className="border border-gray-300 bg-white rounded-2xl px-3 py-1 text-sm"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="container mx-auto mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center max-w-4xl mx-auto">
              {projects
                .filter((project) =>
                  project.techused.some((tech) =>
                    tech.toLowerCase().includes(search.toLowerCase())
                  )
                )
                .map((project, index) => (
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
                      abstract={project.abstract}
                    />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
      {/* Pop-up flyttad ner*/}
      {showPopup && (
        <PopUp
          title={popupContent.title}
          img={popupContent.img}
          text={popupContent.text}
          link={popupContent.link}
          onClose={handleClosePopup}
        />
      )}
      <Footer />
    </>
  );
}

export default Projects;
