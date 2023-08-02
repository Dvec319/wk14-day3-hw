import { useState } from "react";

function Display (props) {
    const question = props.question

	const [answer, setAnswer] = useState(false);

    return (
			<div>
				{question.map((item) => (
					<div key={item.question}>
						<h1 className="category" key={item.category.title}>Category: {item.category.title}</h1>
						<h1 className="value" key={item.value}>Value: {item.value}</h1>
						<h1 className="question" key={item.question}>Question: {item.question}</h1>
						{
						answer?<div>
							<h1 className="answer" key={item.answer}>Answer: {item.answer}</h1>
						</div>: null
						}
					</div>
				))}
				<button className="answerButton" onClick={() => {setAnswer(!answer)}}>Toggle Answer</button>
			</div>
		);
    
    
}

export default Display;