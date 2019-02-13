import React, { Component } from 'react';
import {connect} from 'react-redux';
import { requestUsers } from './redux/actions/formActions';

const mapStateToProps = state =>{
    return{
      users: state.requestUsers.users,
      isPending: state.requestUsers.isPending,
      error: state.requestUsers.error
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{ 
      onRequestUsers: () => dispatch(requestUsers())
    }
  }


class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.onRequestUsers();
    }
    
    render(){
        const data = this.props.users;
    return (
   
      <div>  
       <h2>About me here</h2>
            <ul>
                {
                    data.map((item, i)=>{
                    return <li key={item.id}><h1>Name:{item.name}</h1> <h2>User Name: {item.username}</h2></li>

                    })
                }
           </ul>
      </div>
    )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);