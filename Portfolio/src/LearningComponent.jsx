function LearningComponent (props) {

    return (
           

      
      
        
    <div className="mx-auto overflow-hidden flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline m-8 outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div class="px-6 py-4">      

            <div className="">
                <img className="w-full h-auto" src="./images/screenshot1.png" alt="screendump of a programming assignment"/>
            </div>      
            <h2 className="text-xl font-bold text-black dark:text-white mb-3" >{props.title}</h2>
                 
                <h1 className="text-gray-500 dark:text-gray-400">{props.techused}</h1>
                <p className="text-black-50 text-left">{props.info}</p>
                <p className="text-gray-700 text-base">{props.text}</p>
                <form action="https://google.com">
                    <input type="submit" value="Go to Google" />{props.text}
                </form>

                <button className="bg-green-500 rou">Github repo</button>
               
    </div>
    </div>
    )
}

export default LearningComponent;