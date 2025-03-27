import React from 'react';
import sliderLogo from "../../templates/sliderbef.png";
import factory from "../../templates/factory.jpg";
import Logo30years from "../../templates/logo_30.png";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <>
        <div className='BigLogo'>
          <img src={factory} alt="Factory" className='FactoryLogo' />
          <img src={sliderLogo} alt="Sliderbef" className='SliderLogo' />
          <img src={Logo30years} alt="Logo30years" className='Logo30years' />
          <h1 className='KNG_Automation'>Космос-Нефть-Газ <br></br> Автоматизация</h1>
          <Phone className='Phone' size={34} strokeWidth={2}/>
          <Mail className='Mail' size={34} strokeWidth={2}/>
        </div>
    </>
  );
}