import React, { Component } from 'react';
import Contact from './Contact';
import TestData from './TestData';
import ContactPage from './ContactPage';

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
      newCtc:{},
      ctcList:[],
      arr: []
    }
  }
//this one works for name 
  // onInputChange = (event)=>{
  //   this.setState({name:event.target.value});
  //   console.log(event.target.value);
  // }

  async componentDidMount() {
    try{
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await result.json()
      this.setState({arr:data})

    }catch(err){
      console.log(err)
    }
  }
 
  // submitData = (event)=>{
  //   event.preventDefault()
  //   this.setState({newCtc:{test1:this.state.test1}})
  //   // this.setState({newCtc:{test2:this.state.test2}})
  //   console.log(this.state.newCtc)
  // }
  onChangeInput = (e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value;
    console.log(value)
    this.setState({
      [name]: value
    });
  }

  //work on this 
  newSubmit = (e) =>{
    e.preventDefault();
    // const test1Submit = this.state.test1;
    // this.setState({newCtc:{test1:test1Submit}});


    this.setState(Object.assign(this.state.newCtc,{test1:this.state.test1, test2:this.state.test2}));
  


    console.log(this.state.newCtc)

    this.addContact();



    this.clearInput();
    console.log(this.state.newCtc);
    // const targetValue = e.target.elements.name;
    // this.setState({e.target.element.name:targetValue)}
    // console.log(targetValue)
    }
    
 
    // addContact = ()=>{
    //   this.setState({ ctcList:[ ...this.state.ctcList, this.state.newCtc] });
    //   console.log(this.state.ctcList);
    // };
    



    addContact = ()=>{
      let newCtcList = [...this.state.ctcList];
      newCtcList.push({...this.state.newCtc});
      

    this.setState({ ctcList: newCtcList }, ()=>{
      console.log(this.state.ctcList);
      this.clearInput();
    

    });

  };
  
    

    clearInput = ()=>{
      this.setState({test1:'',test2:''});
      this.setState(Object.assign(this.state.newCtc,{test1:'', test2:''}));
    };
   
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
      <input type = 'text' name = 'name' onChange = {this.onChangeInput}></input>

      <TestData data={this.state.arr} />  


      <form onSubmit = {this.newSubmit}>

      <input type='text' name={'test1'} value={this.state.test1} onChange = {this.onChangeInput}
      
        />
      <input type='text' name={'test2'} value={this.state.test2}  onChange = {this.onChangeInput}
      
        />
      <button type='submit'> submit </button>
      </form>

      <ContactPage contacts = {this.state.ctcList} />

    </div> 
    )
  }
}
export default ContactList;