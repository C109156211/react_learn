import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, decrement2, increment2,incrementByAmount } from './counterSlice';
import{ mul } from './mulSlice';
import{ add } from './addSlice';
import{ sub } from './subSlice';
import{ div } from './divSlice';



export function Counter(){
    const count = useSelector((state) => state.mul.value) 
    const count2 = useSelector((state) => state.add.value2) 
    const count3 = useSelector((state) => state.sub.value3) 
    const count4 = useSelector((state) => state.div.value4) 

    const dispatch = useDispatch()

    // 乘法
    // const [incrementAmount, setIncrementAmont] = useState('2');
    const [multiplier, setMultiplier] = useState(0);
    const [multiplicand, setMultiplicand] = useState(0);
    // const [multiplicand1, setMultiplicand1] = useState(0);

    // 加法
    const [addend, setAddend] = useState(0);
    const [summand, setSummand] = useState(0);

    // 減法
    const [subtract, setSubtract] = useState(0);
    const [subtract2, setSubtract2] = useState(0);

    // 除法
    const [division, setDivision] = useState(0);
    const [division2, setDivision2] = useState(0);


    return (
        <div>
            <div>
                {/* <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment2())}
                >
                    Increment2
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement2())}
                >
                    Decrement2
                </button> */}
                {/* <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmont(e.target.value)}
                />
                <button
                    onClick={() => 
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button><br/> */}
                {/* 加法 */}
                <input
                    value={addend}
                    onChange={e => setAddend(e.target.value)}
                />
                +
                <input
                    value={summand}
                    onChange={e => setSummand(e.target.value)}
                />
                = {count2}
                &nbsp; &nbsp; &nbsp;
                <button
                    onClick={() => 
                        dispatch(add({"addend":addend, "summand":summand}))
                    }
                    >
                    Count
                </button>
                <br></br>
                {/* 減法 */}
                <input
                    value={subtract}
                    onChange={e => setSubtract(e.target.value)}
                />
                -
                <input
                    value={subtract2}
                    onChange={e => setSubtract2(e.target.value)}
                />

                = {count3}
                &nbsp; &nbsp; &nbsp;
                <button
                    onClick={() => 
                        dispatch(sub({"subtract":subtract, "subtract2":subtract2}))
                    }
                    >
                    Count
                </button>
                <br></br>
                {/* 乘法 */}
                <input
                    value={multiplier}
                    onChange={e => setMultiplier(e.target.value)}
                />
                X
                <input
                    value={multiplicand}
                    onChange={e => setMultiplicand(e.target.value)}
                />

                = {count}
                &nbsp; &nbsp; &nbsp;
                <button
                    onClick={() => 
                        dispatch(mul({"multiplier":multiplier, "multiplicand":multiplicand}))
                    }
                    >
                    Count
                </button>
                <br></br>
                {/* 除法 */}
                <input
                    value={division}
                    onChange={e => setDivision(e.target.value)}
                />
                /
                <input
                    value={division2}
                    onChange={e => setDivision2(e.target.value)}
                />

                = {count4}
                &nbsp; &nbsp; &nbsp;
                <button
                    onClick={() => 
                        dispatch(div({"division":division, "division2":division2}))
                    }
                    >
                    Count
                </button>
                <br></br>

            </div>
        </div>
    )
}
