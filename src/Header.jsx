import React from 'react';
import sliderLogo from './templates/sliderbef.png';
import factory from './templates/factory.jpg';
import Logo30years from './templates/logo_30_1.png';
import { createIcons, icons } from 'lucide';

export default function Header() {
  return (
    <div>
      <header>
        <div className='BigLogo'>
          <img src={factory} alt="Factory" className='FactoryLogo' />
          <img src={sliderLogo} alt="Sliderbef" className='SliderLogo' />
          <img src={Logo30years} alt="Logo30years" className='Logo30years' />
          <h1 className='KNG_Automation'>«Космос-Нефть-Газ Автоматизация»</h1>
          {/* <button style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone color="red" size={24} /> { icons }
            Позвонить
          </button> */}
          <div className='texts'>
          <h1 className='lider'>ЛИДЕР В ИТ И АВТОМАТИЗАЦИИ</h1>
          <h2 className='RV'>РАЗРАБОТКА, ВНЕДРЕНИЕ, АНАЛИЗ, ТЕСТИРОВАНИЕ </h2>
          </div>
          
          <div className='buttons'>
            <button className='profissionalizm'>Профессионализм</button>
            <button className='services'>Услуги</button>
            <button className='products'>Продукты</button>
          </div>

        </div>
      </header>
    </div>
  );
}