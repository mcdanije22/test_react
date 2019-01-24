import React from 'react';
import CtcCard from './CtcCard';



const ContactPage = ({contacts}) =>{
    return(
        <div>
            <ul>

                {
                    contacts.map((ctc,i)=>{
                       return <li> <CtcCard  card = {ctc}/> </li>
                       {/* return <li key= {i}> <h1>{ctc.test1}</h1> <h2>{ctc.test2}</h2></li> */}
                    })
                }

            </ul>
        </div>
    )

}
export default ContactPage;