import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    name:'g1',
    show:false
  }
  nameChange=(e)=>{ //arrow function을 쓰면 binding하지 않고도 this를 쓸 수 있다.
    this.setState({name:e.target.value})
  }
  toggleHandler =()=>{
    this.setState({show:!this.state.show})
  }
  render() {
    console.log('123')
    return (

      <div className="App">
      <button onClick={this.toggleHandler}>toggle</button>
        <UserInput change={this.nameChange} name={this.state.name}/>
        {this.state.show?
        <UserOutput />:null
        }
      </div>
    );
  }
}

export default App;

const UserInput =({change,name})=>{
  console.log('input')
  return(
    <input className='input' type="text" onChange={change} value={name}/>
  )
}

const UserOutput=()=>{
  console.log('output')
  return(
    <p className='name'>g1</p>
  )
}