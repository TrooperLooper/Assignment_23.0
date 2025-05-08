function PopUp({ title, img, text, link, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="mx-auto overflow-hidden flex max-w-sm items-center rounded-xl bg-white shadow-lg outline m-8 outline-black/5">
        <div>
          <div className="sm shrink-0">
            <img
              className="w-full h-35 object-cover"
              src={img}
              alt="Project screenshot"
            />
          </div>

          <h3 className="text-3xl font-bold leading text-black my-5 text-center">
            {title}
          </h3>

          <div className="mb-8 mx-4">
            <p className="text-gray-700 text-sm">{text}</p>
          </div>

          <div className="mb-5 flex items-center justify-center">
            <button className="bg-emerald-600/50 h-10 w-25 rounded-3xl drop-shadow-sm text-sm font-medium text-white border border-transparent hover:border hover:border-emerald-600">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={onClose} // stäng, men ändra utseende sen
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
