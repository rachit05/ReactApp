import React , {Component} from 'react';

class Info extends Component{
    // Creating the constructor in the info class so as to automatically set the state when the class is called
    constructor(props){
        super(props); // Passing the props parameter to the constructor
        
        //Setting up the initial state of the component by this.state object because states are immutable .
        this.state = {
            name:"Rachit",
            age:28,
            date : new Date()
        };
    }

    // componentDidMount is the method which is called when the component successfully loads on the user screen
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    // componentWillUnmount is the method which is called to unmount the component
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    
    // Updating the clock by using setInterval method
    tick(){
        this.setState({name:'varun'})
        this.setState({
            date:new Date()
        });    
    }

    // Finally rendering the clock to the user screen by using React's render() method
    render(){
        return(
            <div class="centerInfo">
                <Header name={this.state.name}/>
                <Footer age={this.state.date.toLocaleTimeString()}/>
            </div>
        );
    }
}


// Just breaking class into smaller stuffs

class Header extends Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}

class Footer extends Component{
    render(){
        return <h1>{this.props.age}</h1>
    }
}


export default Info



/* 
-----------------Reviewing what happend above----------------

When <Info /> is passed to ReactDOM.render() in index.js file, React calls the constructor of the Info component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

React then calls the Info component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Info render output.

When the Info output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Info component asks the browser to set up a timer to call the component’s tick() method once a second.

Every second the browser calls the tick() method. Inside it, the Info component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

If the Info component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped


*/