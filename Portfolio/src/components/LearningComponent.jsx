function LearningComponent(props) {
  return (
    <div className="mx-auto overflow-hidden flex max-w-sm items-center rounded-xl bg-white  shadow-lg outline m-8 outline-black/5">
      <div class="">
        <div className="sm shrink=0">
          <img
            className="w-full h-20 object-cover"
            src={props.img}
            alt="screendump of a front end assignment"
          />
        </div>

        <h3 className="text-3xl font-bold leading text-black my-5 text-center">
          {props.title}
        </h3>

        <div className="mb-8 mx-4">
          <p className="text-sm text-gray-700 mt-2">{props.abstract}</p>{" "}
        </div>

        <div className="mb-5 flex items-center justify-center">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600/50 h-10 px-4 flex items-center justify-center rounded-3xl drop-shadow-sm text-sm font-medium text-white border border-transparent hover:border hover:border-emerald-600"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearningComponent;

/* hover:dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10
 hover:dark:text-white hover:scale-0.2 transition duration-300 ease-in-out
 */

/*check repolinks are correct*/
