import React from 'react';
import LeftPnl from './LeftPnl';
//import RightPnl from './RightPnl';
export default (props) => {
    return(
    <div>
        <LeftPnl className="content-container" {...props}/>
    </div>
)};