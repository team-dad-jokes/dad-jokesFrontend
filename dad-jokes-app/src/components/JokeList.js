import React from 'react';
import axios from 'axios';


class JokeList extends React.Component{
    state = {
        jokes: [],
    };


    componentDidMount() {
    axios.get(`https://dad-jokes2019.herokuapp.com/randomJoke`).then(res => {
        console.log(res);
        this.setState({ jokes: res.data });
    });
}
    render() {
        return (
            console.log(JokeList)
        )
    }

}


export default JokeList;