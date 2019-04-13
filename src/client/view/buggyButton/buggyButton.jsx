import React from 'react';

class BuggyButton extends React.Component {
    constructor() {
        super();
        this.state = {bug: false};

        this.handleErrorTest = this.handleErrorTest.bind(this);
    }

    handleErrorTest() {
        this.setState({bug: true});
    }

    render() {
        if(this.state.bug) {
            throw new Error('Test Error');
        }
        return  <button onClick={this.handleErrorTest}>TEST ERROR</button>;
    }
}

export default BuggyButton;