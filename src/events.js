import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}


class Event extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        }
        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
    }


    logIn(){
        this.setState({
            isLoggedIn : true

        })
    }

    logOut(){
        this.setState({
            isLoggedIn : false
        })
    }


    render(){
        const loginstatus= this.state.isLoggedIn;
        let button;
        if (loginstatus){
            button = <button onClick={this.logOut}>Logout</button>
        }else
            button = <button onClick={this.logIn}>Login</button>


        return(
            <div>
                <Greeting isLoggedIn={loginstatus} />
                {button}
            </div>
        )
    }
}

export default Event