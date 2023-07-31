import { useState } from "react";

function Display (props) {
    const question = props.question

	const [answer, setAnswer] = useState(false);

    return (
			<div>
				{question.map((item) => (
					<div key={item.question}>
						<h1 key={item.category}>Category: {item.category.title}</h1>
						<h1 key={item.value}>Value: {item.value}</h1>
						<h1 key={item.question}>Question: {item.question}</h1>
						{
						answer?<div>
							<h1 key={item.answer}>Answer: {item.answer}</h1>
						</div>: null
						}
					</div>
				))}
				<button onClick={() => {setAnswer(!answer)}}>Toggle Answer</button>
			</div>
		);
    
    
}

export default Display;