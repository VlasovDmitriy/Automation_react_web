import './Footer.css';
import top from "../../templates/footertop.png";

export default function Footer() {
    return (
        <div className="footer-container">
            <img src={top} alt="Footer background" className='footer-bg' />
            <div className="footer-content">
                <h2>ООО «КНГ-Автоматизация»</h2>
            </div>
        </div>
    );
}