import MainButton from '../Buttons/MainButtons/MainButtons';
import BackFactory from "../../templates/bg_prod.png";
import './Main.css'

export default function Main() {
    return(
        <div className="main-container">
          <img src={BackFactory} alt="backfactory" className='Backfactory' />
          <div className='texts'>
            <h1 className='lider'>ЛИДЕР В ИТ И АВТОМАТИЗАЦИИ</h1>
            <h2 className='RV'>РАЗРАБОТКА, ВНЕДРЕНИЕ, АНАЛИЗ, ТЕСТИРОВАНИЕ </h2>
          </div>
          <div className='buttons'>
            <MainButton>Профессионализм</MainButton>
            <MainButton>Услуги</MainButton>
            <MainButton>Продукты</MainButton>
          </div>  
        </div>
    );
}