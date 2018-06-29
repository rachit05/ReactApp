import React, { Component } from 'react';
import Lists from './lists';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:  '',
            names : [],
            plays: 'cricket'
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.addName = this.addName.bind(this)
        this.selectHandler = this.selectHandler.bind(this)
    }

    inputHandler(event){
        this.setState({
            value: event.target.value
        })
    }

    selectHandler(event){
       this.setState({
           plays:event.target.value
       })
    }

    addName(event){
        if(this.state.value === ''){
            alert('Please enter name first')
        }else{
            let nameList = this.state.names
            nameList.push([this.state.value, this.state.plays])
            this.setState({
                names:nameList,
                value : ''
            })
            console.log(this.state.names)
         }
    }
    
    render(){
        return(
            <div>
                <input type='text' name="username" value={this.state.value} onChange={this.inputHandler} />
                <br />
                <select value={this.state.plays} onChange={this.selectHandler}>
                    <option value='cricket'>Cricket</option>
                    <option value='football'>Football</option>
                    <option value='hockey'>Hockey</option>
                </select>
                <br />
                <button onClick={this.addName} >Add name</button>

                    <Lists passedValue={this.state.names}/>
            </div>

        )
    }
}
export default Form;