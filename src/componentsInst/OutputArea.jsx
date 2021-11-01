import React, { Component } from 'react';

class Outputarea extends Component {
    render() {
        return (
            <div>
                <div className="outputTitle">
                    {this.props.value} 
                </div>
            </div>
        );
    }
}

export default Outputarea;
