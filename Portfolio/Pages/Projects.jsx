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
  const [preview, setPreview] = useState(false); // preview är false

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
      techused: "Javascript, HTML, CSS",
      info: "Tech used",
      abstract:
        "This project demonstrates a CSS flexbox layout based on a Figma design.",
      text: "In this assignment, we were asked to design a CSS flexbox layout according to a Figma file. This laid the foundation for my understanding of flexbox and responsive design. This was a solo-project.",
      link: "https://github.com/TrooperLooper/Assignment_5.0/",
    },
    {
      title: "Book library",
      img: "./images/library.png",
      techused: "Javascript, HTML, CSS",
      info: "Tech used",
      abstract:
        "A JavaScript challenge to create a library of books, viewable in the console.",
      text: "This was a fun JavaScript challenge to create a library of books that I either have read or want to read. The library is managed in the console and demonstrates object manipulation and DOM interaction. This was a solo-project.",
      link: "https://github.com/TrooperLooper/Assignment_16.0/",
    },
    {
      title: "Wordtyping game",
      img: "./images/typinggame.jpg",
      techused: "Javascript, HTML, CSS",
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
          className="m-4 p-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition duration-300"
          onClick={() => setIsShown(!isShown)}
        >
          {isShown ? "Hide" : "Show"} Projects
        </button>
      </div>{" "}
      {/* knappen som visar projekten */}
      {isShown && (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
            {projects.map((project, index) => (
              <div
                key={index} // unikt id för varje projekt
                className="transition-transform transform hover:scale-102 duration-400 cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                <LearningComponent
                  title={project.title}
                  img={project.img}
                  techused={project.techused}
                  info={project.info}
                  abstract={project.abstract} // kort info till kort, men annars övriga är lika
                />
              </div>
            ))}
          </div>
        </div>
      )}{" "}
      {/* knappen som visar projekten */}
      {showPopup && (
        <PopUp
          title={popupContent.title}
          img={popupContent.img}
          text={popupContent.text} // text är längre info
          link={popupContent.link}
          onClose={handleClosePopup}
        />
      )}
      {preview && (
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </div>
      )}
      {preview && (
        <div className="flex justify-center mt-4">
          {projects
            .filter((project) =>
              project.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((project, index) => (
              <LearningComponent
                key={index}
                pTitle={project.title}
                // pTags={project.Tags}
              />
            ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Projects;
