import '../LearningComponent.css'

function LearningComponent (props) {

    return (
        <div className="module">
<div>
               <h2 className="module-title">{props.title}</h2>
    
</div>           
<div><img src={props.img} alt "screendump of a programming assignment" className="img"/></div>  
            <h3 className="module-rubrik">Github repo:</h3>
           <p className="module-links">{props.text}</p>
           <h3 className="module-rubrik">Tech used:</h3>
           <p className="module-techused">{props.writeup}</p>
           <p className="module-writeup">{props.writeup}</p>
        </div>
    )
}
<a href={props.writeup} className="repo"></a>

export default LearningComponent;

