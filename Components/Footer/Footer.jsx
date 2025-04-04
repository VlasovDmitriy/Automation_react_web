import React from 'react';
import './Footer.css';

import { House, Mail, NotebookText, Phone } from 'lucide-react';
import { CircleArrowUp } from 'lucide-react';
import Logo30year from "../../templates/logo_30_1.png";
import BgFooter from "../../templates/bg_footer.png"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };
    return (
        <div className="footer-wrapper">
            
            {/* Баннер */}
            <div className="footer-banner-container">
                <div className="footer-content">
                    <h2>ООО «КНГ-Автоматизация»</h2>
                </div>
            </div>

            {/* Основной контент */}
            <div className="footer-info-container">
                <div className='container'>
                    {/* Юридический адрес */}
                    <div className='address-block'>
                        <div className='UridAddress'>Юридический адрес</div>
                        <div className='address-wrapper'>
                            <House size={34} strokeWidth={3} color='red' />
                            <div className='address-text'>
                                <p><strong>Россия, Воронежская область</strong></p>
                                <p>г. Воронеж</p>
                                <p>394019, ул. 9 Января, 180 оф. 577</p>
                            </div>
                        </div>
                    </div>

                    {/* Контакты */}
                    <div className='contacts-container'>
                        <div className='ourcontacts'>Наши контакты</div>
                        
                        {/* Верхний ряд */}
                        <div className='contacts-top-row'>

                            {/* Реквизиты */}
                            <div className='requisites-group'>
                                <div className='ogrn'>
                                    <NotebookText size={34} strokeWidth={3} color='red'/>
                                    <div>
                                        <p>ОГРН</p>
                                        <p>1233600001458</p>
                                    </div>
                                </div>
                                <div className='inn'>
                                    <NotebookText size={34} strokeWidth={3} color='red'/>
                                    <div>
                                        <p>ИНН/КПП</p>
                                        <p>3662303330</p>
                                        <p>366201001</p>
                                    </div>
                                </div>
                            </div>
                            {/* Телефон */}
                            <div className='phone-section'>
                                <Phone size={34} strokeWidth={3} color='red'/>
                                <div className='contact-info'>
                                    <p>Тел. (473) 247-91-00</p>
                                    <p>Пн - Чт, с 8:00 - 17:00</p>
                                    <p>Пт 8:00 - 15:45</p>
                                </div>
                            </div>

                            
                        </div>

                        {/* Почта */}
                        <div className='mail-section'>
                            <Mail size={34} strokeWidth={3} color='red'/>
                            <div className='contact-info'>
                                <p>Пишите нам в любое время!</p>
                                <p>kng-auto@kng.ru</p>
                                <p>office@kng.vrn.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={BgFooter} alt="Фон" className="footer-bg-image" />
            <CircleArrowUp 
                size={34} 
                strokeWidth={3} 
                color='red' 
                className='arrow'
                onClick={scrollToTop} // Добавьте обработчик клика
                role="button" // Для доступности
                aria-label="Прокрутить наверх" // Описание для скринридеров
            />
            <img src={Logo30year} alt="30 лет компании" className='Logo30' />
        </div>
    );
}