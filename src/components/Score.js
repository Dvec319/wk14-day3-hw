import { useState } from "react";

const Score = () => {
    let [score, setScore] = useState(0)

    const increaseScore = () =>
    setScore(score + 100)

    const decreaseScore = () => {
        setScore(score - 100)
    }

    const resetScore = () => {
        setScore(score = 0)
    }

    return (
        <div>
            <h1 className="score">Score: {score}</h1>
            <div className="buttonContainer">
                <button className="decrease" onClick={decreaseScore}>Decrease</button>
                <button className="increase" onClick={increaseScore}>Increase</button>
                <button className="reset" onClick={resetScore}>Reset</button>
            </div>
        </div>
    )
}

export default Score