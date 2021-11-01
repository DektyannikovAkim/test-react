import React, { Component } from 'react';
import Outputarea from './OutputArea';

export class Inputarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueFstInpt: 0,
            valueScndInpt: 0
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <input className="left" type="text" value={this.state.valueFstInpt}
                     onChange= {event=> this.setState({valueFstInpt: event.target.value})}/>
                    <input className="right" type="text" value={this.state.valueScndInpt}
                     onChange= {event=> this.setState({valueScndInpt: event.target.value})}/>
                </div> 
                <div className="wrapper">
                <Outputarea value={this.state.valueFstInpt}/>
                <Outputarea value={this.state.valueScndInpt}/>
                </div>
            </div>
        );
    }
}

