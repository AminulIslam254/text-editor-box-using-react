import React, { useState } from 'react';





export default function Textbox(props) {
    const handleonChange=(event)=>{
        setText(event.target.value);
    }
    const btnclick=()=>{
        setText(text.toUpperCase());
    }


     const [text, setText] = useState("");
    return (
       
        <>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control"value={text} placeholder='Enter your text' onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={btnclick}>Click to Uppercase</button>
        
        </>
        
    )
}