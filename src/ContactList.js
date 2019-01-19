import React, { Component } from 'react';
import Contact from './Contact';


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
const list= this.state.arr.map(item=><li key={item.id}>{item.name}</li>);

    return (
      <div>
      <input type = 'text' onChange = {this.onInputChange}></input>
    <Contact firstName = {this.state.name} lastName='mcdaniel' phoneNumber = '585-721-3824' />
        <ul>
          
           {list}
          
        </ul>
    </div> 
    )
  }
}
export default ContactList;