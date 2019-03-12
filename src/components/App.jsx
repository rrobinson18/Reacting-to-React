import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Great',
            name: 'Kesha',
            text: 'React is so cool!',
            answer: '',
            hasLoaded: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputAnswer = (value) => {
        this.setState({ answer: value});
    }

    handleClick(e) {
        console.log(this.state.hasLoaded);
        if (this.state.hasLoaded === false) {

            this.setState
            ({
                hasLoaded: true
            });
        } else {
            this.setState ({
                hasLoaded: false
            });
        }
    };

    componentDidMount() {
        this.setState
        ({
            hasLoaded: true
        });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1>Hello {this.state.title} {this.props.name} ! Welcome to the wonderful world of React!</h1>
                    <p>{this.state.text}</p>
                    <input 
                    placeholder="Type here..."
                    value={this.state.answer}
                    onChange={(event) => this.handleInputAnswer(event.target.value)}
                     />

                     <button onClick={this.handleClick}>Click Me!</button>
                     <p> Let me get this right, you said...{this.state.answer.toUpperCase()} ... </p>
                     <p>Well, that's very interesting!</p>
                     </React.Fragment>
            )
        }
        else{
            return (
                <React.Fragment>
                    <p>LOADING ... </p>
                    <button onClick={this.handleClick}>Click Me!</button>
                </React.Fragment>
            )
        }
    }
}


const App = () => {
    return (
        <div>
    <Welcome message="Rakesha" />
    </div>
    );
}



export default App;