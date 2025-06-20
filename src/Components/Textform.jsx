import React, { useState } from 'react'



export default function Textform() {
    const [text,setText]=useState("Enter text Here")

    // const[mystyle,setMystyle]=useState({
    //     backgroundColor:'grey'
    // })

const handleclick=()=>{
    setText(text.toUpperCase())
}
const handlelowclick=()=>{
     setText(text.toLowerCase())
}
const handleclear=()=>{
    setText("Enter text here");
}
const Handlechange=(event)=>{
      setText(event.target.value)
}
  return (
    <>
        
            <textarea  className ="area" name="Textarea" id="text" rows={8} value={text} onChange={Handlechange} />
  
  
          <button className="btn btn-primary mx-1 my-2"   onClick={handleclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-2"   onClick={handlelowclick}>Convert to lowecase</button>
        <button className="btn btn-primary mx-1 my-2"   onClick={handleclear}>Clear Text</button>

    <div className="summary my-2">
        <h2 >Your Text suammry</h2>
        <p>{text.split(" ").length} {text.length} words</p>
    </div>
    
    </>
    
  )
}
