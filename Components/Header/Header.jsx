import React, { useEffect, useRef, useState } from 'react';
import sliderLogo from "../../templates/sliderbef1.png";
import programmer from "../../templates/Programist.png";
import vistovka from "../../templates/vistovka.png";
import Logo30years from "../../templates/logo_30.png";
import { Phone, Mail } from 'lucide-react';
import './Header.css';

export default function Header() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: programmer, alt: "Programmer" },
    { src: vistovka, alt: "Vistovka" },
  ];

  // Анимация смены изображений
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const animateText = (element, delay) => {
    // Сброс стилей перед началом анимации
    element.style.transition = 'none';
    element.style.transform = 'translate(calc(-50% - 80px), calc(-50% + 15px))';
    element.style.opacity = '0';
    
    const startTime = Date.now();
    const duration = 1500;
    const startX = 10;
    const startY = 400;
    
    const animation = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
      const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
      
      const currentProgress = easeOutQuart(progress);
      const currentX = startX * (1 - currentProgress);
      const currentY = startY * (1 - currentProgress);
      const currentOpacity = easeInOutSine(progress);

      element.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)`;
      element.style.opacity = currentOpacity;

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(animation);
    }, delay);
  };

  const animateIcon = (element, delay) => {
    // Сброс стилей перед началом анимации
    element.style.transition = 'none';
    element.style.opacity = '0';
    element.style.transform = 'rotate(-180deg) scale(0.5)';
    
    const startTime = Date.now();
    const duration = 1000;
    
    const animation = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutBack = (t) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
      };
      
      const currentRotation = -180 * (1 - easeOutBack(progress));
      const currentScale = 0.5 + 0.5 * easeOutBack(progress);
      const currentOpacity = easeOutBack(progress);

      element.style.transform = `rotate(${currentRotation}deg) scale(${currentScale})`;
      element.style.opacity = currentOpacity;

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(animation);
    }, delay);
  };

  const resetElement = (element) => {
    // Мгновенное скрытие без анимации
    element.style.transition = 'none';
    element.style.opacity = '0';
    
    // Для текста возвращаем начальное положение
    if (element.classList.contains('KNG_Automation')) {
      element.style.transform = 'translate(calc(-50% - 80px), calc(-50% + 15px))';
    }
    
    // Для иконок возвращаем начальное состояние
    if (element.classList.contains('Phone') || element.classList.contains('Mail')) {
      element.style.transform = 'rotate(-180deg) scale(0.5)';
    }
  };

  useEffect(() => {
    const createObserver = (ref, elementName) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Элемент появился в viewport - запускаем анимацию
              if (elementName.includes('line')) {
                animateText(ref.current, elementName === 'line1' ? 100 : 300);
              } else {
                animateIcon(ref.current, elementName === 'phone' ? 200 : 400);
              }
            } else {
              // Элемент ушел из viewport - мгновенно скрываем
              resetElement(ref.current);
            }
          });
        },
        {
          threshold: 0.1, // Более чувствительный порог
          rootMargin: '0px 0px -50px 0px'
        }
      );
    };

    const observers = {
      line1: createObserver(line1Ref, 'line1'),
      line2: createObserver(line2Ref, 'line2'),
      phone: createObserver(phoneRef, 'phone'),
      mail: createObserver(mailRef, 'mail')
    };

    if (line1Ref.current) observers.line1.observe(line1Ref.current);
    if (line2Ref.current) observers.line2.observe(line2Ref.current);
    if (phoneRef.current) observers.phone.observe(phoneRef.current);
    if (mailRef.current) observers.mail.observe(mailRef.current);

    return () => {
      if (line1Ref.current) observers.line1.unobserve(line1Ref.current);
      if (line2Ref.current) observers.line2.unobserve(line2Ref.current);
      if (phoneRef.current) observers.phone.unobserve(phoneRef.current);
      if (mailRef.current) observers.mail.unobserve(mailRef.current);
    };
  }, []);

  return (
    <div className='BigLogo' ref={containerRef}>
      {images.map((img, index) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          className='FactoryLogo'
          style={{
            position: 'absolute',
            opacity: currentImage === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: currentImage === index ? 1 : 0
          }}
        />
      ))}
      
      <img src={sliderLogo} alt="Sliderbef" className='SliderLogo' />
      <img src={Logo30years} alt="30 years" className='Logo30years' />
      
      <div className='KNG_Automation' ref={line1Ref} 
           style={{
             position: 'absolute',
             top: '35%',
             left: '25%',
             transform: 'translate(-50%, -50%)',
             opacity: 0,
             willChange: 'transform, opacity'
           }}>
        КОСМОС-НЕФТЬ-ГАЗ
      </div>
      <div className='KNG_Automation' ref={line2Ref} 
           style={{
             position: 'absolute',
             top: '45%',
             left: '25%',
             transform: 'translate(-50%, -50%)',
             opacity: 0,
             willChange: 'transform, opacity'
           }}>
        АВТОМАТИЗАЦИЯ
      </div>
      
      <Phone 
        ref={phoneRef}
        className='Phone' 
        size={36} 
        strokeWidth={2} 
        style={{
          opacity: 0,
          willChange: 'transform, opacity'
        }} 
      />
      <Mail 
        ref={mailRef}
        className='Mail' 
        size={36} 
        strokeWidth={2} 
        style={{
          opacity: 0,
          willChange: 'transform, opacity'
        }} 
      />
    </div>
  );
}