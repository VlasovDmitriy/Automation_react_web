import React, { useEffect, useRef, useState } from 'react';
import sliderLogo from "../../templates/sliderbef.png";
import factory from "../../templates/factory.jpg";
import Logo30years from "../../templates/logo_30.png";
import { Phone, Mail } from 'lucide-react';
import './Header.css';

export default function Header() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateText = (element, delay) => {
    element.style.transform = 'translate(calc(-50% - 80px), calc(-50% + 15px)';
    element.style.opacity = '0';
    
    const startTime = Date.now();
    const duration = 1500;
    const startX = 10;
    const startY = 150;
    
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
    element.style.opacity = '0';
    element.style.transform = 'rotate(-180deg) scale(0.5)';
    
    const startTime = Date.now();
    const duration = 1200;
    
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateText(line1Ref.current, 100);
            animateText(line2Ref.current, 100);
            animateIcon(phoneRef.current, 200);
            animateIcon(mailRef.current, 200);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className='BigLogo' ref={containerRef}>
      <img src={factory} alt="Factory" className='FactoryLogo' />
      <img src={sliderLogo} alt="Sliderbef" className='SliderLogo' />
      <img src={Logo30years} alt="30 years" className='Logo30years' />
      
      <div className='KNG_Automation' ref={line1Ref} 
           style={{
             position: 'absolute',
             top: '35%',
             left: '25%',
             transform: 'translate(-50%, -50%)',
             opacity: 0,
             transition: 'none',
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
             transition: 'none',
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
          
          transition: 'none',
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
          
          transition: 'none',
          willChange: 'transform, opacity'
        }} 
      />
    </div>
  );
}