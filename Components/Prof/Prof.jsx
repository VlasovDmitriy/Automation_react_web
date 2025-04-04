import React from 'react';
import './Prof.css';

import Block from './BlockProf.jsx'
import { Users, Settings  } from 'lucide-react';
export default function(){

    return(
        <>
        <Block 
        Icon={Users} 
        text="О нас" 
        descriptionText="Мы — команда профессионалов с богатым опытом и высокой квалификацией в области разработки и внедрения инновационных ИТ-решений для промышленности. 
        Наша специализация включает развертывание, поддержку и модернизацию информационной инфраструктуры в газовой, нефтяной и атомной отраслях." 
        />

        <Block 
        Icon={Settings} 
        text="Наши решения" 
        descriptionText="" 
        />
        <Block 
        Icon={Users} 
        text="Технологии и партнеры" 
        descriptionText="Мы используем передовые решения мировых и отечественных лидеров, таких как Siemens, Schneider Electric, 
        Allen Bradley, Emerson, PROSOFT, Trei, Fastwel, Текон, ОВЕН и других. Это позволяет нам предлагать клиентам решения, соответствующие 
        самым высоким стандартам качества и надежности." 
        />

        
        </>
        
    );
}