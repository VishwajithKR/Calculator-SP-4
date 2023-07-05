import React, { useState } from 'react'
import './style/calculator.css'

function Calculator() {

    const [result, setResult] = useState("")

    const handleclick = (e) => {
        setResult(result.concat(e.target.value))
    }
    const clear = () => {
        setResult('')
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }

    const finalResult = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult("Error")
        }

    }

    return (
        <div>
            <section className='bg-pic'>
                <div className='box mt-3'>
                 
                    <form>
                        <input type="text" value={result} />
                    </form>
                    <div className='keyboard'>
                        <button onClick={clear} id='clear'>AC</button>
                        <button className='delete' onClick={backspace}>&#10232;</button>
                        <button className='symbol' value="/" onClick={handleclick}>&#247;</button>
                        <button value="7" onClick={handleclick}>7</button>
                        <button value="8" onClick={handleclick}>8</button>
                        <button value="9" onClick={handleclick}>9</button>
                        <button className='symbol' value="*" onClick={handleclick}>&#215;</button>
                        <button value="4" onClick={handleclick}>4</button>
                        <button value="5" onClick={handleclick}>5</button>
                        <button value="6" onClick={handleclick}>6</button>
                        <button className='symbol' value="-" onClick={handleclick}>-</button>
                        <button value="1" onClick={handleclick}>1</button>
                        <button value="2" onClick={handleclick}>2</button>
                        <button value="3" onClick={handleclick}>3</button>
                        <button className='equal symbol' value="+" onClick={handleclick}>+</button>
                        <button value="0" onClick={handleclick}>0</button>
                        <button  value="." onClick={handleclick}>.</button>
                        <button  onClick={finalResult} className='result'>=</button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Calculator;