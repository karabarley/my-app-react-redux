import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Login from './Login';
import ForkedEvents from './ForkedEvents';
import PREvents from './PREvents';

import { Provider } from "react-redux";
import store from "./redux-store-reducer";
import { connect } from 'react-redux';
import { handleChange, handleLogin, login} from './redux-actions';

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
    render(){
        return(
        <AppWrapper>
            <WrapperLabel>App Component</WrapperLabel>
            {this.props.loggedIn === true ?
            (
                <React.Fragment>
                    <ForkedEvents events={this.props.events} />
                    <PREvents events={this.props.events} />
                </React.Fragment>
            ) 
            :
            (
                <Login 
                    username={this.props.username}
                    handleChange={this.props.handleChange}
                    handleLogin={ () => this.props.login(this.props.username)}
                />
            )
            }
        </AppWrapper>
        )
    }
}

const mapStateToProps = state => {
    return state;
};
  
const mapDispatchToProps = {
    handleChange, handleLogin, login
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(  
    <Provider store={store}>
        <ConnectedApp />
    </Provider>, 
    document.getElementById('root')
);