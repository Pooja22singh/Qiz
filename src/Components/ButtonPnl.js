import React from 'react';
import data from './data/data.json';
import { connect } from 'react-redux';
import {saveQuestionIndex} from '../actions/question';
import {saveResultToStore} from '../actions/result';
import solutionData from './data/solutions.json';
export class ButtonPnl extends React.Component {
    constructor(props){
        super(props);
    }
     onNext=()=>{
     this.props.saveQuestionIndex(this.props.questionIndex+1);
    }
    onFinalSubmit =() =>{
      var sum=0;
      solutionData.map((data,index)=>{
       if(this.props.answers[index]==data.answer)
          sum+=10;
      });
      this.props.saveResultToStore(sum+"/"+solutionData.length*10);
      this.props.history.push("/submit");
    }
    render() {
        var subClass = this.props.questionIndex != data.length-1?"button disabled":"button";
        var nextClass = this.props.questionIndex==data.length-1?"button disabled":"button";
        return (
            <div>
                <div className="button-container">
                    <button className={nextClass} onClick={this.onNext}>Next</button>
                    <button className={subClass} onClick={this.onFinalSubmit}>Submit</button>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        questionIndex: state.question.questionIndex,
        answers:state.answer
    }
}
const mapDispatchToProps = (dispatch) => ({
    saveQuestionIndex: (questionIndex) => dispatch(saveQuestionIndex(questionIndex)),
    saveResultToStore :(result) => dispatch(saveResultToStore(result))
});
export default connect(mapStateToProps,mapDispatchToProps)(ButtonPnl);