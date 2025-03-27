import React from 'react';
import sliderLogo from "../../templates/sliderbef.png";
import factory from "../../templates/factory.jpg";
import Logo30years from "../../templates/logo_30.png";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
<<<<<<< HEAD
    <div>
      <div>
        <h1 className='proverka'>ПРОВЕРКА ШРИФТА</h1>
      </div>
      <div>
        <h1 className='proverka2'>ПРОВЕРКА ШРИФТА 2</h1>
      </div>
      
=======
    <>
>>>>>>> e5061ce81ed763bfc4c8ed75c6cb490be0885417
        <div className='BigLogo'>
          <img src={factory} alt="Factory" className='FactoryLogo' />
          <img src={sliderLogo} alt="Sliderbef" className='SliderLogo' />
          <img src={Logo30years} alt="Logo30years" className='Logo30years' />
          <h1 className='KNG_Automation'>Космос-Нефть-Газ <br></br> Автоматизация</h1>
          <Phone className='Phone' size={34} strokeWidth={2}/>
          <Mail className='Mail' size={34} strokeWidth={2}/>
        </div>
<<<<<<< HEAD

        {/* <div className='texts'>
          <h1 className='lider'>ЛИДЕР В ИТ И АВТОМАТИЗАЦИИ</h1>
          <h2 className='RV'>РАЗРАБОТКА, ВНЕДРЕНИЕ, АНАЛИЗ, ТЕСТИРОВАНИЕ </h2>
        </div>
          
        <div className='buttons'>
          <button className='profissionalizm'>Профессионализм</button>
          <button className='services'>Услуги</button>
          <button className='products'>Продукты</button>
        </div> */}

        

        
    </div>

    
=======
    </>
>>>>>>> e5061ce81ed763bfc4c8ed75c6cb490be0885417
  );
}