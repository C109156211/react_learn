import { useState } from "react";

export default function Numbers(){
const [num,setNum] = useState(10);

  return(
    <div>
      <button onClick={()=>setNum(num+1)}>+1</button>
      <p>{num}</p>
      <button onClick={()=>setNum(num-1)}>-1</button>
    </div>
  );
}

export function NumbersWithLimitByHtml(){
    const [num,setNum] = useState(10);
    return(
        <div>
            {(num < 15) && (<button onClick={()=>{setNum(num+1)}}>+1</button>)}
            <p>{num}</p>
            {(num > 0) && (<button onClick={()=>setNum(num-1)}>-1</button>)}
        </div>
    );
}

export function NumbersWithLimitByCSS(){
    const [num,setNum] = useState(10);
    return(
        <div>
            <button
                style={{visibility: num >= 15 ? 'hidden' : 'visible'}}
                onClick={()=>{setNum(num+1)}}
            >
                +1
            </button>
            <p>{num}</p>
            <button
                style={{visibility: num <= 0 ? 'hidden' : 'visible'}}
                onClick={()=>setNum(num-1)}
            >
                -1
            </button>
        </div>
    );
}

