import React, {useState} from 'react'
export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Text has been converted to uppercase" , "WOW!");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Text has been converted to lowercase" , "yippee");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert(" Text has been cleared" , "hurray");
    }
    const handleOnchange = (event)=>{
    setText(event.target.value);
    }
    const [text,setText]= useState('Enter text here :)');
    const handleCopy =()=>{
        console.log("I am copy");
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
        <div>
        <div className= "Container" style={{color: props.mode==='dark'?'white':'black'}}>
             <h1>{props.heading} </h1>
              <div className="mb-3">
             {/* <label for="myBox" class="form-label"> </label> */}
             <textarea className="form-control" value= {text} style={{backgroundColor: props.mode==='light'?'white':'white'}} onChange= {handleOnchange} id="myBox" rows="3"></textarea>
             </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        </div>
        <div className="Container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
         <h1>Your text summary</h1>
         <p>{text.trim().split(" ").length} words and {text.trim().length} characters</p>
         <p>{0.008*text.trim().split("").length}Minutes read</p>
         <p>{0.008*60*text.trim().split("").length}seconds read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
        </div>
        </div>
        </>
    )
}
