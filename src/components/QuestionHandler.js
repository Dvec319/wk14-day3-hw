const QuestionHandler = (props) => {

    const fetchQuestion = async () => {
        const url = "http://jservice.io/api/random"

        const response = await fetch(url)

        const data = await response.json()

        props.setQuestion(data)
    }
 
     return (
				<div>
					<button className='questionButton' onClick={fetchQuestion}>
						Get Question
					</button>
				</div>
			);
}

export default QuestionHandler;