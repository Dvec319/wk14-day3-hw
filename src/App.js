import QuestionHandler from './components/QuestionHandler';
import Display from './components/Display';
import Score from './components/Score';
import { useState } from 'react';
import './App.css';

function App() {

  let [question, setQuestion] = useState([{}])

  return (
		<div className='App'>
			<h1>Trivia Time!</h1>
			<Score />
			<QuestionHandler setQuestion={setQuestion} />
			<Display question={question} />
		</div>
	);
}

export default App;
