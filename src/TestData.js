import React from 'react';

const TestData = ({data})=>{
    return (
      <div>  
            <ul>
                {
                    data.map((item, i)=>{
                    return <li key={item.id}><h1>Name:{item.name}</h1> <h2>User Name: {item.username}</h2></li>

                    })
                }
           </ul>
      </div>
    );
  }


export default TestData;