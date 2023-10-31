import './Footer.scss'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import BrandFooter from '../../assets/icons/brand.svg'
import IconEmail from '../../assets/icons/icon-09.svg'
import IconPhone from '../../assets/icons/icon-10.svg'

export default function Footer() {
    return (
        <>
            <footer className="db-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-4">
                            <img src={BrandFooter} alt="Duper Burgers" />
                            <p>Porem ipsum dolor sit amet consect adipiscing elit aliquam mauris.</p>
                            <div className="db-footer-social">
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedin /></a>
                                <a href=""><FaYoutube /></a>
                                <a href=""><FaWhatsapp /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 mb-4 db-footer-menu">
                            <h4>Menu</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Início</a></li>
                                <li><a href="/about">Sobre nós</a></li>
                                <li><a href="/menu">Menu</a></li>
                                <li><a href="/contact">Contato</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 mb-4 db-footer-menu">
                            <h4>Institucional</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Fale conosco</a></li>
                                <li><a href="/">Politicas de Envio</a></li>
                                <li><a href="/">Politica de Privacidade</a></li>
                                <li><a href="/">Formas de Pagamento</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-12 db-footer-contact">
                            <h4>Canais</h4>
                            <div className="db-footer-contact-channel">
                                <div className="db-footer-contact-channel-icon">
                                    <a href="">
                                        <img src={IconEmail} alt="Email" />
                                    </a>
                                </div>
                                <div className="db-footer-contact-channel-content">
                                    <h5>Email:</h5>
                                    <p>contato@duperburger.com.br</p>
                                </div>
                            </div>
                            <div className="db-footer-contact-channel">
                                <div className="db-footer-contact-channel-icon">
                                    <a href="">
                                        <img src={IconPhone} alt="Email" />
                                    </a>
                                </div>
                                <div className="db-footer-contact-channel-content">
                                    <h5>Telefone</h5>
                                    <p>(51)99985-9632</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
