import React from 'react';
import solution from './data/solutions.json';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { saveQuestionIndex } from '../actions/question';

const SubmitPage = (props) => {
    var list = solution.map((option, index) => {
        return (<li key={index++}>{`${index}.${option.solution}`}</li>)
    });
    var result = props.result.result;
    var msg = "";
    if (props.location.search != "")
        msg = "Time Out!! Your test is completed";
    else
        msg = "Congratulations!! You have successfully completed the test"
    return (
        <div className="content-container submit-container">
            <h2>{msg}</h2>
            <p className="score">
                Your score: <span>{result}</span>
            </p>
            <div>
            <p>Suggestions:</p>
                <ul className="answers-ul">
                    {list}
                </ul>
            </div>
            <button className="button" onClick={() => { props.logout(); props.saveQuestionIndex(0); localStorage.removeItem("state"); props.history.push("/") }}>Exit</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    saveQuestionIndex: (index) => dispatch(saveQuestionIndex(index))
});
export default connect(mapStateToProps, mapDispatchToProps)(SubmitPage);
