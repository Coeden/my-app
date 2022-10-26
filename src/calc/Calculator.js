import {React, useState} from 'react'

function Calc(){

	const [calc, setCalc] = useState("");
    const [equal, setEqual] = useState("");
    const operator = ['÷', '×', '+', '-', '.'];

    const updateCalc = value => {

        if (operator.includes(value) && calc === ' ' ||
            operator.includes(value) && operator.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value);
        if (!operator.includes(value)) {
            setEqual(eval(calc+ value).toString())
        }
    }
    const calculate = () => {
        setCalc(eval(calc).toString())
    }

return (
	<div className="container">
	<div className="display">{calc || "0"}</div>
	<div className="buttons">
	<button className="ac" onClick={() => {setCalc(" "); }}>AC</button>
	<button className='button' onClick={() => {setCalc(calc.slice (0, -1) ) ;}}>←</button>
	<button className='button' onClick={()=>{updateCalc('/')}}>÷</button>
	<button className='button' onClick={()=>{updateCalc('7')}}>7</button>
	<button className='button' onClick={()=>{updateCalc('8')}}>8</button>
	<button className='button' onClick={()=>{updateCalc('9')}}>9</button>
	<button className='button' onClick={()=>{updateCalc('*')}}>x</button>
	<button className='button' onClick={()=>{updateCalc('4')}}>4</button>
	<button className='button' onClick={()=>{updateCalc('5')}}>5</button>
	<button className='button' onClick={()=>{updateCalc('6')}}>6</button>
	<button className='button' onClick={()=>{updateCalc('-')}}>-</button>
	<button className='button' onClick={()=>{updateCalc('1')}}>1</button>
	<button className='button' onClick={()=>{updateCalc('2')}}>2</button>
	<button className='button' onClick={()=>{updateCalc('3')}}>3</button>
	<button className='button' onClick={()=>{updateCalc('+')}}>+</button>
	<button className="zero" onClick={()=>{updateCalc('0')}}>0</button>
	<button className='button' onClick={()=>{updateCalc('.')}}>.</button>
	<button className='button' onClick={calculate}>=</button>

	</div>
</div>	
	)
}

export default Calc;
