import MainButton from '../Buttons/MainButtons/MainButtons';
import BackFactory from "../../templates/bg_prod.png";
import './Main.css'
import { useEffect, useRef } from 'react';

export default function Main() {
  const textsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lider = entry.target.querySelector('.lider');
            const rv = entry.target.querySelector('.RV');
            
            // Сбрасываем анимации перед повторным запуском
            lider.style.animation = 'none';
            rv.style.animation = 'none';
            
            // Триггерим reflow
            void lider.offsetWidth;
            void rv.offsetWidth;
            
            // Запускаем анимации снова
            lider.style.animation = 'slideFromLeft 1s forwards';
            rv.style.animation = 'slideFromRight 1s forwards';
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textsRef.current) {
      observer.observe(textsRef.current);
    }

    return () => {
      if (textsRef.current) {
        observer.unobserve(textsRef.current);
      }
    };
  }, []);

  return(
    <div className="main-container">
      <img src={BackFactory} alt="backfactory" className='Backfactory' />
      <div className='texts' ref={textsRef}>
        <h1 className='lider'>ЛИДЕР В ИТ И АВТОМАТИЗАЦИИ</h1>
        <h2 className='RV'>РАЗРАБОТКА, ВНЕДРЕНИЕ, АНАЛИЗ, ТЕСТИРОВАНИЕ</h2>
      </div>
      <div className='buttons'>
        <MainButton>Профессионализм</MainButton>
        <MainButton>Услуги</MainButton>
        <MainButton>Продукты</MainButton>
      </div>  
    </div>
  );
}