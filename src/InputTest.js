import React,{useState} from 'react'; 

export default function InputTest(){
  const[text,setText] = useState("nothing");
  return (
    <div>
      <input type='text' onChange={(e)=>setText(e.target.value)}/>
      <p>{text}</p>
    </div>
  );
}
