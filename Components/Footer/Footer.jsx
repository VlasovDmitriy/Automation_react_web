import React from 'react';
import './Footer.css';
import { House } from 'lucide-react';
import Logo30years from "../../templates/logo_30.png";


export default function Footer() {

    return (

        <div className='container'>
            <div className='UridAddress'>Юридический адрес </div>
            <div className='Contacts'>Наши контакты </div>


            <div className='address-wrapper'>
                <House className='House' size={34} strokeWidth={3} color='red' />
                <address className='address'>
                    <p><strong>Россия, Воронежская область</strong></p>
                    <p>г. Воронеж</p>
                    <p>394019, ул. 9 Января, 180 оф. 577</p>

                </address>
            </div>


            


            <div className='logdown'>
                <img src={Logo30years} alt="Logo30years" className='Logo30years' />
            </div>
        </div>

    );
}