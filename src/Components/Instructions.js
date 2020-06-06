import React from 'react';
export default (props) => (
    <div className="page-header">
        <h2>Instructions</h2>
        <div className="instructions">
            <pre>1.The quiz consists of questions carefully designed to help you self-assess your comprehension of the information.{"\n"}
            2. Each question in the quiz is of multiple-choice or "true or false" format.{"\n"}
            3. After responding to a question, click on the "Next Question" button at the bottom to go to the next questino.{"\n"}
            4. After responding to the 8th question, click on <b>"Submit"</b>{"\n"}
            5. After submit results will be displayed along with explanation</pre>
        </div>
        <button className="button" onClick={() => { props.history.push("/dashboard") }}>Continue</button>
    </div>
);