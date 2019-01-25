import React from 'react';
import CtcCard from './CtcCard';



const ContactPage = ({contacts}) =>{
    return(
        <div>
            <ul>

                {
                    contacts.map((ctc,i)=>{
                       return <li className='cardList' key={i}> <CtcCard  card = {ctc}/> </li>
                    })
                }

            </ul>
        </div>
    )

}
export default ContactPage;