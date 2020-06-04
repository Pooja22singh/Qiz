import React from 'react';
import ButtonPnl from './ButtonPnl';
import Question from './Question';
import {saveQuestionIndex} from '../actions/question';
import { connect } from 'react-redux';

 class QuizComponent extends React.Component {
      constructor(props){
         super(props);
         this.state={
             questionIndex:0//Initial index No
         }
      }

    componentWillMount(){
        if(this.props.questionIndex==undefined)
          this.props.saveQuestionIndex(this.state.questionIndex);

    }  
    render() {
        return (
            <div className="content-container">
             <Question  {...this.props}/>
             <ButtonPnl {...this.props}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questionIndex: state.question.questionIndex
    }
}
const mapDispatchToProps = (dispatch) => ({
    saveQuestionIndex: (questionIndex) => dispatch(saveQuestionIndex(questionIndex))
});
export default connect(mapStateToProps,mapDispatchToProps)(QuizComponent);