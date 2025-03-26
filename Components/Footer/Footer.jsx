import React from 'react';
import './Footer.css';
import { House } from 'lucide-react';


export default function Footer(){

    return(
        
    <div>
         <div className='UridAddress'>Юридический адрес </div>
         
         <address className='address'>
          <p><strong>Россия, Воронежская область</strong></p>
          <p>г. Воронеж</p>
          <p>394019, ул. 9 Января, 180 оф. 577</p>
          <House className='House' size={34} strokeWidth={3} color='red'/>
        </address>
    </div> 

    );
}