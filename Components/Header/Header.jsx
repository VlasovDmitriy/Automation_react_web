import React, { useEffect, useRef, useState } from 'react';
import sliderLogo from "../../templates/sliderbef1.png";
import programmer from "../../templates/Programist.png";
import vistovka from "../../templates/vistovka.png";
import Logo30years from "../../templates/logo_30.png";
import { Phone, Mail } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [programmer, vistovka];
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    [line1Ref, line2Ref, phoneRef, mailRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fullscreen-header">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`bg-image ${currentImage === index ? 'active' : ''}`}
        />
      ))}
      
      <img src={sliderLogo} alt="" className="overlay-image" />
      <img src={Logo30years} alt="" className="anniversary-logo" />
      
      <div ref={line1Ref} className="header-title title-1">КОСМОС-НЕФТЬ-ГАЗ</div>
      <div ref={line2Ref} className="header-title title-2">АВТОМАТИЗАЦИЯ</div>
      
      <Phone ref={phoneRef} className="contact-icon phone" size={36} />
      <Mail ref={mailRef} className="contact-icon mail" size={36} />
    </div>
  );
}