import React from 'react';
import Home from '../components/Home';

const greetingList = [
    'Hello',
    'Welcome',
    'Greetings',
    'Howdy',
    'Hi',
    'Aloha'
];

class HomeContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            greeting: 'Hello'
        };
    }

    componentDidMount(){
        // Grab reference to interval to clear later
        this.greetingsInterval = setInterval(() => {
            const randy = Math.floor(Math.random() * greetingList.length);
            this.setState({ greeting: greetingList[randy] });
        }, 1000);
    }

    componentWillUnmount(){
        // Remove interval when navigating away
        clearInterval(this.greetingsInterval);
    }

    render(){
        return (
            <Home
                greeting={this.state.greeting}
            />
        );
    }
}

export default HomeContainer;
