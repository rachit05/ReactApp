import React, { Component } from 'react';

class Person extends Component{
  name(n){
    return n;
  }
  age(a){
    return a;
  }
  render(){
    return(
      <div className='App'>
        <h1>Hello People</h1>
        <p>My name is {this.name('rachit')} and my age is {this.age(28)}</p>
      </div>
    )
  }
}

export default Person


/*
  We create components that are displayed to the user.
  Components can be either ES6 functions or classes
  We have created on function above named Person which always extends the Component class of the react module
*/
