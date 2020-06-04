import React from 'react';
import { saveAnswerIndex } from '../actions/answers';
import { connect } from 'react-redux';
export  const Answer =(props) =>{
    const answer = props.answersList;
        return (
            <div className="answers-container">
                <ul className="answers-ul">
                    {answer.map((option, index) => {
                        return (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={index}
                                        onChange={(event)=>{ 
                                            event.persist();
                                            props.saveAnswerIndex(event.target.value);
                                        }}
                                    />
                                    {option}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
}
const mapDispatchToProps = (dispatch) => ({
    saveAnswerIndex: (index) => dispatch(saveAnswerIndex(index))
});
export default connect(undefined, mapDispatchToProps)(Answer);