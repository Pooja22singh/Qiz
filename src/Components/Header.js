import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { saveQuestionIndex} from '../actions/question';
import { Link } from 'react-router-dom';
import  Timer  from './Timer';
const Header = (props) => (
    <div>
        <header className="header">
            <div className="content-container">
                <div className="header-container">
                    <Link className="header__title" to="/dashboard"><h1>Hello {props.fullName}</h1></Link>
                    <Timer {...props}/>
                    <button onClick={()=>{props.logout();  props.saveQuestionIndex(0); localStorage.removeItem("state"); props.history.push("/")}} ><div></div></button>
                </div>
            </div>
        </header>
    </div>
);
const mapStateToProps=(state)=>({
  fullName:state.auth.fullName
});
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    saveQuestionIndex : (index) => dispatch(saveQuestionIndex(index))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

