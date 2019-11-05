import React from 'react'

import './styles.scss'

const Footer = ({ }) => {

    return (
        <footer className="app--footer">
            <div style={{ backgroundColor: '#EF5350' }}>
                <aside className="app--footer-top">
                    <div className="row">
                        <div className="columns small-12 large-4">
                            <h5>Контакты</h5>
                            <div>
                                <a href="tel:903-903" target="_blank" className="footer-list-item footer-phone">
                                    <div>
                                        <span tabIndex="0" type="button">
                                            <div>
                                                <div>
                                                    <svg viewBox="0 0 24 24">
                                                        <path
                                                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z">
                                                        </path>
                                                    </svg>
                                                    <div>903-903</div>
                                                    <div>Телефон</div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <div>
                                    <span className="footer-list-item footer-address" tabIndex="0" type="button">
                                        <div>
                                            <div>
                                                <svg viewBox="0 0 24 24">
                                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                                                </svg>
                                                <address>Нехинская, 57</address>
                                                <div>Адрес</div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="columns small-12 large-4">
                            <h5>Наши приложения</h5>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.FoodSoul.VNovgorodDinonnaPizze" target="_blank" rel="nofollow" className="footer-list-item footer-app-link">
                                    <div>
                                        <span tabIndex="0" type="button">
                                            <div>
                                                <div>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z"></path>
                                                    </svg>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
                                                    </svg>
                                                    <div>Скачать в Google Play</div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a href="https://itunes.apple.com/us/app/dinonna-pizze/id1041992595?l=ru&amp;ls=1&amp;mt=8" target="_blank" rel="nofollow" className="footer-list-item footer-app-link">
                                    <div>
                                        <span tabIndex="0" type="button">
                                            <div>
                                                <div>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"></path>
                                                    </svg>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
                                                    </svg>
                                                    <div>Скачать в AppStore</div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns small-12 large-4">
                            <h5>Мы в соцсетях</h5>
                            <div>
                                <a href="https://vk.com/dinonna_pizzeria" target="_blank" className="footer-list-item footer-social-link" rel="nofollow">
                                    <div>
                                        <span tabIndex="0" type="button">
                                            <div>
                                                <div>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M19.54,14.6C21.09,16.04 21.41,16.73 21.46,16.82C22.1,17.88 20.76,17.96 20.76,17.96L18.18,18C18.18,18 17.62,18.11 16.9,17.61C15.93,16.95 15,15.22 14.31,15.45C13.6,15.68 13.62,17.23 13.62,17.23C13.62,17.23 13.62,17.45 13.46,17.62C13.28,17.81 12.93,17.74 12.93,17.74H11.78C11.78,17.74 9.23,18 7,15.67C4.55,13.13 2.39,8.13 2.39,8.13C2.39,8.13 2.27,7.83 2.4,7.66C2.55,7.5 2.97,7.5 2.97,7.5H5.73C5.73,7.5 6,7.5 6.17,7.66C6.32,7.77 6.41,8 6.41,8C6.41,8 6.85,9.11 7.45,10.13C8.6,12.12 9.13,12.55 9.5,12.34C10.1,12.03 9.93,9.53 9.93,9.53C9.93,9.53 9.94,8.62 9.64,8.22C9.41,7.91 8.97,7.81 8.78,7.79C8.62,7.77 8.88,7.41 9.21,7.24C9.71,7 10.58,7 11.62,7C12.43,7 12.66,7.06 12.97,7.13C13.93,7.36 13.6,8.25 13.6,10.37C13.6,11.06 13.5,12 13.97,12.33C14.18,12.47 14.7,12.35 16,10.16C16.6,9.12 17.06,7.89 17.06,7.89C17.06,7.89 17.16,7.68 17.31,7.58C17.47,7.5 17.69,7.5 17.69,7.5H20.59C20.59,7.5 21.47,7.4 21.61,7.79C21.76,8.2 21.28,9.17 20.09,10.74C18.15,13.34 17.93,13.1 19.54,14.6Z"></path>
                                                    </svg>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
                                                    </svg>
                                                    <div>ВКонтакте</div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/DinonnaPizzaSushi/" target="_blank" className="footer-list-item footer-social-link" rel="nofollow">
                                    <div>
                                        <span tabIndex="0" type="button">
                                            <div>
                                                <div>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
                                                    </svg>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
                                                    </svg>
                                                    <div>Facebook</div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/dinonna.ru" target="_blank" className="footer-list-item footer-social-link" rel="nofollow">
                                    <div>
                                        <span tabIndex="0" type="button">
                                            <div>
                                                <div>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                                                    </svg>
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
                                                    </svg>
                                                    <div>Instagram</div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div style={{ backgroundColor: 'rgb(167, 58, 56)' }}>
                <div className="row">
                    <div className="columns small-11 large-7">
                        <a href="/privacy-policy/ru" className="copyright" target="_blank" rel="nofollow">Политика конфиденциальности</a>
                        <a href="/offer/ru" className="copyright" target="_blank" rel="nofollow">Публичная оферта</a>
                        <br />
                        <a className="copyright" href="https://foodsoul.pro" target="_blank">© FoodSoul, 2019</a>
                    </div>
                    <div className="columns layout horizontal end-justified small-1 large-5">
                        <ul className="lang-picker">
                            <li className="lang-picker__item"><span className="flag-icon flag-icon-ua"></span></li>
                            <li className="lang-picker__item lang-picker__item--active"><span className="flag-icon flag-icon-ru"></span></li>
                            <li className="lang-picker__item"><span className="flag-icon flag-icon-gb"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer