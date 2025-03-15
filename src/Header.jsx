import sliderLogo from './templates/sliderbef.png'
import factory from './templates/factory.jpg'
import Logo30years from './templates/logo_30_1.png'

export default function header(){
    return(
        <div>
      <header>
        <div className='BigLogo'>
          <img src={factory} alt="Factory" className='FactoryLogo'/>
          <img src={sliderLogo} alt="Sliderbef" className='SliderLogo'/>
          <img src={Logo30years} alt="Logo30years" className='Logo30years' />
          <h1 className='KNG_Automation'>«Космос-Нефть-Газ Автоматизация»</h1>
        </div>
        
      </header>

    </div>

    )
}