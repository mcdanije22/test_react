import React, { Component } from 'react';
import Contact from './Contact';
import TestData from './TestData';
import ContactPage from './ContactPage';


import {connect} from 'react-redux';
import {nameForm} from './redux/actions/formActions';

const mapStateToProps = state =>{
  return{
    name: state.state.name
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{ 
    onNameChange:(event) => dispatch(nameForm(event.target.value))
  }
}



class ContactList extends Component {
  constructor(props){
    super(props);
    this.state = {
      test1:'',
      test2:'',
      newCtc:{},
      ctcList:[],
      arr: []
    }
  }


  componentWillMount(){
    
    const local = JSON.parse(localStorage.getItem('contact'));
    if(local !== null){
      this.setState({ctcList:local});
    }
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

  onChangeInput = (e)=>{
 
    this.setState({[e.target.name]:e.target.value});
    console.log(e.target.value);
  }

  newSubmit = (e) =>{
    e.preventDefault();



    this.setState(Object.assign(this.state.newCtc,{test1:this.state.test1, test2:this.state.test2}));
  


    console.log(this.state.newCtc)

    this.addContact();



    console.log(this.state.newCtc);
   
    }
    

    addContact = ()=>{
      if (this.state.test1  === '' || this.state.test2 === ''){
        alert('Please enter all fields');
      } else{
      let newCtcList = [...this.state.ctcList];
      newCtcList.push({...this.state.newCtc});


    this.setState({ ctcList: newCtcList }, ()=>{
      console.log(this.state.ctcList);
      
          this.localTest();





    });
  }
  };
  
    clearInput = ()=>{
      this.setState({test1:'',test2:''});
      this.setState(Object.assign(this.state.newCtc,{test1:'', test2:''}));
    };

    localTest = () => {
      if(localStorage.getItem('contact') == null){
        localStorage.setItem('contact', JSON.stringify([...this.state.ctcList]));
        this.clearInput();
      }else{
        const oldStorage = JSON.parse(localStorage.getItem('contact'));
        console.log('old' , oldStorage);
        console.log('new', this.state.newCtc)
        localStorage.setItem('contact', JSON.stringify([...oldStorage,this.state.newCtc ]));
        this.clearInput();

      }
    }
   
  render() {

    return (
      
      <div>
      <Contact firstName = {this.props.name} lastName='mcdaniel' phoneNumber = '585-721-3824' />
      <input type = 'text' name = 'name' onChange = {this.props.onNameChange}></input>


      <form onSubmit = {this.newSubmit}>

      <input type='text' name={'test1'} value={this.state.test1} onChange = {this.onChangeInput}
      
        />
      <input type='text' name={'test2'} value={this.state.test2}  onChange = {this.onChangeInput}
      
        />
      <button type='submit'> submit </button>
      </form>

      <ContactPage contacts = {this.state.ctcList} />
      <TestData data={this.state.arr} />  


    </div> 
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);