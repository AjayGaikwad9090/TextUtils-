import React, { useState } from 'react'

export default function TextFrom(props) {

    // Uppercase button click event Start
    const handleUpCase = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    // Uppercase button click event End

    // Lowercase button click event Start
    const handleLowCase = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    // Lowercase button click event End

    // Lowercase button click event Start
    const handleClearText = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newText = '';
        setText(newText)
    }
    // Lowercase button click event End

    // Copy text area event Start
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    // Copy on text area event End

    // handleExtraSpaces area event Start
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }
    // handleExtraSpaces text area event End

    // OnChange on text area event Start
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    // OnChange on text area event End

    //  Defining State here
    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
