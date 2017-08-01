import React from 'react'
import mobx from 'mobx'
import mobxReact from 'mobx-react'
import { render } from 'react-dom'

var appState = mobx.observable({
    timer: 0
});

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(function() {
    appState.timer += 1;
}, 1000);
        
var TimerView = mobxReact.observer(
React.createClass({
     render: function() {
        return (<button onClick={this.onReset}>
        	Seconds passed: {this.props.appState.timer}
            </button>);
     },
     
     onReset: function() {
     	this.props.appState.resetTimer();
     }
}));

render(<TimerView appState={appState} />, document.getElementById('root'));