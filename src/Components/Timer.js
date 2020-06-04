import React from 'react';
import { connect } from 'react-redux';
import { saveTimerObject } from '../actions/timer';
import { saveResultToStore } from '../actions/result';
import solutionData from './data/solutions.json';
class Timer extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      time: (Object.keys(this.props.timer).length>0) ? this.props.timer: {"h":"00","m":"10","s":"00"},
      seconds: (Object.keys(this.props.timer).length>0) ? this.props.timer.m * 60 + this.props.timer.s : 600//Initial Second for 10 minutes
    }
    this.timer = 0;
  }

  secToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let div_minutes = secs % (60 * 60);
    let minutes = Math.floor(div_minutes / 60);
    let div_seconds = div_minutes % 60;
    let seconds = Math.ceil(div_seconds);
    let timeObj = {
      "h": hours,
      "m": minutes,
      "s": seconds

    };
    return timeObj;
  }
  componentWillMount() {
    this.startTimer();
  }

  componentDidMount() {
    let timeLeftVar = this.secToTime(this.state.seconds);
    this.props.saveTimerObject(timeLeftVar);
    this.setState({ time: timeLeftVar });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    let timeLeftVar = this.secToTime(600);
    this.props.saveTimerObject(timeLeftVar);

  }
  startTimer = () => {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secToTime(seconds),
      seconds: seconds,
    });
    let timeLeftVar = this.secToTime(seconds);
    this.props.saveTimerObject(timeLeftVar);
    if (seconds == 0) {
      clearInterval(this.timer);
      var sum = 0;
      solutionData.map((data, index) => {
        if (this.props.answers[index++] == data.answer)
          sum += 10;
      });
      this.props.saveResultToStore(sum + "/" + solutionData.length * 10);
      this.props.history.push("/submit?timeOut");

    }
  }

  render() {
    return (
      <div>
        <p className="timer"><span>Time Remaining</span> :{this.state.time.h}:{this.state.time.m}:{this.state.time.s}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    timer: state.timer,
    answers: state.answer
  }
}
const mapDispatchToProps = (dispatch) => ({
  saveTimerObject: (time) => dispatch(saveTimerObject(time)),
  saveResultToStore: (result) => dispatch(saveResultToStore(result))
});
export default connect(mapStateToProps, mapDispatchToProps)(Timer);

