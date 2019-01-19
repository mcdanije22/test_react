// import React, { Component } from 'react';

// class Contact extends Component {
//     static defaultProps = {
//       firstName: 'josh'
//     }
//   render() {
//     let {firstName, lastName,phoneNumber} = this.props;
//     return (
//     <div className= 'contactCard'>  
//     <h1>{firstName}</h1>
//     <h2>{lastName}</h2>
//     <h3>{phoneNumber}</h3>
//     </div>
//     )
//   }
// }
import React from 'react';

const Contact = (props)=>{
  let {firstName, lastName,phoneNumber} = props;
    return (
      <div className= 'contactCard'>  
        <h1>{firstName}</h1>
          <h2>{lastName}</h2>
             <h3>{phoneNumber}</h3>
      </div>
    );
  }


export default Contact;
