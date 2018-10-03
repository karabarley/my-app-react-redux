import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import ForkedEvents from './ForkedEvents';
import PREvents from './PREvents';
import styled from 'styled-components';
import { Provider } from "react-redux";
import store from "./redux-store-reducer";
import { connect } from 'react-redux';
import { handleChange} from './redux-store-reducer';

const AppWrapper = styled.div`
    font-family: Arial;
    border: 1px solid black;
    padding: 10px;
`   
export const WrapperLabel = styled.p`
    color: palevioletred;
    font-size: 8px;
`

class App extends Component {
    constructor(){
    // This will eventually be replaced by redux
    super();
    // this.state = {
    //     username: '',
    //     events: [],
    //     loggedIn: false
    // }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    } // end constructor

    // handleChange(e){
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     });
    // }
        
    // getGithubUserEvents(username){
    //     return fetch(`https://api.github.com/users/${username}/events`)
    // }

    // handleLogin(){
    //     this.getGithubUserEvents(this.state.username)
    //     // fetch(`https://api.github.com/users/pkanal/events`)
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         events: data,
    //         loggedIn: true
    //     }))
    //     console.log(`Button clicked!`)
    // }

    render(){
        return(
        <AppWrapper>
            <WrapperLabel>App Component</WrapperLabel>
            {/* {this.state.loggedIn === true ?
            ( */}
                {/* <React.Fragment>
                    <ForkedEvents events={this.state.events} />
                    <PREvents events={this.state.events} />
                </React.Fragment> */}
            {/* ) 
            :
            ( */}
                <Login 
                    username={this.props.username}
                    handleChange={this.props.handleChange}
                    // handleLogin={this.props.handleLogin}
                />
            {/* )
            } */}
        </AppWrapper>
        )
    }
}

const mapStateToProps = state => {
    return state;
};
  
const mapDispatchToProps = {
    handleChange
};

ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);