import React from 'react';
import data from './data/data.json';
import Video from './Video';
import { connect } from 'react-redux';
import Answer from './Answer';
export const Question = (props) => {
    const question = data[props.questionIndex];
    if (question.videoURL) {
        var videoJsOptions = {
            autoplay: false,
            controls: true,
            height: 200,
            width: 300,
            playbackRates: [0.5, 1, 1.5, 2],
            sources: [{
                src: question.videoURL,
                type: question.videoType
            }]
        };
    }
    return (
        <div >
            <div className="question-container">
                <p>{`${props.questionIndex + 1}.${question.question}`}</p>
                {question.imageURL && <img src={question.imageURL} />}
                {question.videoURL && <Video {...videoJsOptions} />}
            </div>
            <Answer answersList={question.options} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        questionIndex: state.question.questionIndex
    }
}
export default connect(mapStateToProps)(Question);