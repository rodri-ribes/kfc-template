import style from "./Footer.module.scss"
import SocialNetworksOptionOne from './SocialNetworksOptionOne/SocialNetworksOptionOne'
function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.container__footer__oneSection}>
                <div className={style.container__footer__oneSection__logo}>
                    <img src="./img/kfc_logo.png" alt="logo" />
                    <div className={style.container__footer__oneSection__logo_item}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                        <p>444 3 555</p>
                    </div>
                    <div className={style.container__footer__oneSection__logo_item}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <p>0(212) 705 00 00</p>
                    </div>
                </div>
                <div className={style.container__footer__oneSection_social}>
                    <SocialNetworksOptionOne
                        social={{
                            facebook: "#",
                            youtube: "#",
                            instagram: "#",
                            twitter: "#"
                        }}

                    />
                </div>
            </div>
            <div className={style.container__footer_twoSection}>
                <div className={style.container__footer_twoSection__wrapper}>
                    <div className={style.container__footer_twoSection__wrapper__copyAndHiper}>
                        <div className={style.container__footer_twoSection__wrapper__copyAndHiper__hiper}>
                            <div className={style.container__footer_twoSection__wrapper__copyAndHiper__hiper_group}>
                                <h4>LOREM</h4>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                            </div>
                            <div className={style.container__footer_twoSection__wrapper__copyAndHiper__hiper_group}>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                            </div>
                            <div className={style.container__footer_twoSection__wrapper__copyAndHiper__hiper_group}>
                                <h4>LOREM</h4>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                            </div>
                            <div className={style.container__footer_twoSection__wrapper__copyAndHiper__hiper_group}>
                                <h4>LOREM</h4>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                        <p className={style.container__footer_twoSection__wrapper__copyAndHiper_copy}>Copyright © 2023 All rights reserved | This template is made with ♥ by <a href="https://rodrigoribes.netlify.app/" target="_blank" rel="noreferrer" >Ribes</a></p>
                    </div>
                    <div className={style.container__footer_twoSection__wrapper__img}>
                        <img src="./img/kfc-cara.png" alt="logo" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;