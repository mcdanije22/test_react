import React, { Component } from 'react';
import Contact from './Contact';
import TestData from './TestData';


// class ContactList extends Component {
//     render() {
//         // const nameInput = 'Josh Input'

// const getInput = ()=>{
//     let nameInput = document.getElementById('name').value;
//      console.log(nameInput);
//      return nameInput;
//   }
// const getValue = ()=>{
//    let name = 'jake';
// }
//       return (
//       <div> 
//         <Contact firstName={this.props.fName} lastName='mcdaniel' phoneNumber = '585-721-3824'/>
//         <input type= 'text' id = 'name' /*onChange={getInput}*/ onChange = {getInput}></input>

//       </div>
      
//       )
//     }
//   }
  
//   export default ContactList;


class ContactList extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      test1:'',
      test2:'',
      newCtc:{
        test1:'',
        test2:''
      },
      arr: []
    }
  }

  onInputChange = (event)=>{
    this.setState({name:event.target.value});
    console.log(event.target.value);
  }
  async componentDidMount() {
    try{
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await result.json()
      this.setState({arr:data})

    }catch(err){
      console.log(err)
    }
  }
 
  submitData = (event)=>{
    event.preventDefault()
    this.setState({newCtc:{test1:this.state.test1}})
    // this.setState({newCtc:{test2:this.state.test2}})
    console.log(this.state.newCtc)
  }

  render() {

// async function getData(){
//   try{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json();
//   // console.log(data[0].name)
//   return data;
//   }catch(err){
//     console.log(err)
//   }
// }
// let resultData;
// getData().then(data =>{
//   resultData = data;
//   console.log(data);
// })


// const list = this.state.arr.map((item,i)=>

//     <li key={item.id}><h1>Name:{item.name}</h1> <h2>User Name: {item.username}</h2></li>
 
// );

    return (
      <div>
      <Contact firstName = {this.state.name} lastName='mcdaniel' phoneNumber = '585-721-3824' />
      <input type = 'text' onChange = {this.onInputChange}></input>

      <TestData data={this.state.arr} />  


      <form onSubmit = {this.submitData}>

      <input type='text' onChange = {(event)=>{
        this.setState({test1:event.target.value});
        console.log(this.state.test1)
        }
      }
        />
      <input type='text' onChange = {(event)=>{
        this.setState({test2:event.target.value});
        console.log(this.state.test2)
        }
      }
        />
      <button type='submit'> submit </button>
      </form>

    </div> 
    )
  }
}
export default ContactList;