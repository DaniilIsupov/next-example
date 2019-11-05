import React from 'react'
import { useDispatch } from 'react-redux'
import ButtonBase from '@material-ui/core/ButtonBase'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout/Layout'

import './main.scss'
import './about-styles.scss'

const AboutPage = () => {
	return (
		<>
			<Layout
				title="О нас"
				mainclassNameName="background"
			>
				<div className="row">
					<article className="columns large-6 small-12 small-order-2 medium-order-1 about-text">
						<h3 className="header-md">О компании</h3>
						<div className="panel-md z1-md">
							<p>Dinonna - это сочетание дружелюбного сервиса и вкусных блюд: пицца, бургеры, суши, роллы, &nbsp;ВОК, с
								быстрой доставкой на дом или офис.Мы готовим и доставляем для Вас, мы Вас любим и делаем всё, чтобы
								стать ещё лучше, ещё быстрее и ещё вкуснее!&nbsp;В наших блюдах Вы найдёте высококачественные
								ингредиенты на любой вкус: от уникальных деликатесов до продуктов на каждый день – исключительно свежих
								и качественных.&nbsp;Dinonna - это блюда, которые хочется есть ещё и ещё! Вкуснейшая пицца, суши и
								роллы, в которых мн-о-о-о-о-о-го начинки.&nbsp;Заказывайте доставку: тел. 903-903, сайт
								http://dinonna.ru/&nbsp;Скачай приложение Appstore и Googleplay (Dinonna Pizzeria)Сайт
								принадлежит&nbsp;Серышев Павел Викторович ИНН 532116477960 ОГРНИП 315532100024127 от 10.12.2015
								Юридический адрес: 173024, Новгородская область, г. Великий Новгород, ул. Коровникова 10, кв. 30.
								Фактический (почтовый) адрес: 173021, Новгородская область, г. Великий Новгород, ул. Нехинская, д. 57,
								оф. 48 Телефон: 8 (8162) 903 903Способы оплаты: Наличный расчёт.&nbsp;Если товар доставляется
								курьером, то оплата осуществляется наличными курьеру в руки. При получении товара обязательно проверьте
								комплектацию товара, наличие гарантийного талона и чека.Банковской картой. Для выбора оплаты товара с
								помощью банковской карты на соответствующей странице необходимо нажать кнопку «Оплата заказа
								банковской картой». Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих
								платежных систем:&nbsp;МИР,&nbsp;VISA International,&nbsp;Mastercard Worldwide,&nbsp;JCBУсловия возврата
								товара: Претензии по качеству продукции принимаются в день покупки. У вас должно сохраниться не менее
								80% продукции. Возврат переведенных средств, производится на Ваш банковский счет в течение 5-30 рабочих
								дней. Срок зависит от банка, который выдал вашу карту.</p>
						</div>
					</article>
					<aside className="contacts columns large-6 small-12 small-order-1 medium-order-2" itemScope="" itemType="http://schema.org/LocalBusiness">
						<meta itemProp="name" content="Dinonna" />
						<h3 className="header-md">Контакты</h3>
						<div className="panel z1">
							<div style={{ padding: '8px 0px' }}>
								<ButtonBase component="a" href="tel:903-903">
									<span itemProp="telephone" tabIndex="0" type="button" >
										<div>
											<div>
												<svg viewBox="0 0 24 24">
													<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
												</svg>
												<div>903-903</div>
												<div>Телефон</div>
											</div>
										</div>
									</span>
								</ButtonBase>
								<div>
									<ButtonBase>
										<span itemProp="address" tabIndex="0" type="button" >
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
									</ButtonBase>
								</div>
							</div>
							<div>
								<hr className="divider" />
								<div className="sub-header">Наши приложения</div>
								<div style={{ padding: '8px 0px' }}>
									<ButtonBase component="a" href="https://play.google.com/store/apps/details?id=com.FoodSoul.VNovgorodDinonnaPizze" target="_blank">
										<span tabIndex="0" type="button" >
											<div>
												<div>
													<svg viewBox="0 0 24 24">
														<path d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z">
														</path>
													</svg>
													<svg viewBox="0 0 24 24">
														<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z">
														</path>
													</svg>
													<div>Скачать для Android</div>
												</div>
											</div>
										</span>
									</ButtonBase>

									<ButtonBase component="a" href="https://itunes.apple.com/us/app/dinonna-pizze/id1041992595?l=ru&amp;ls=1&amp;mt=8" target="_blank">
										<span tabIndex="0" type="button">
											<div>
												<div>
													<svg viewBox="0 0 24 24">
														<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z">
														</path>
													</svg>
													<svg viewBox="0 0 24 24">
														<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z">
														</path>
													</svg>
													<div>Скачать для iOS</div>
												</div>
											</div>
										</span>
									</ButtonBase>
								</div>
							</div>
							<div>
								<hr className="divider" />
								<div className="sub-header">Мы в соцсетях</div>
								<div style={{ padding: '8px 0px' }}>
									<ButtonBase component="a" href="https://vk.com/dinonna_pizzeria" target="_blank">
										<span tabIndex="0" type="button" >
											<div>
												<div>
													<svg viewBox="0 0 24 24" style={{ fill: '#567CA4' }}>
														<path d="M19.54,14.6C21.09,16.04 21.41,16.73 21.46,16.82C22.1,17.88 20.76,17.96 20.76,17.96L18.18,18C18.18,18 17.62,18.11 16.9,17.61C15.93,16.95 15,15.22 14.31,15.45C13.6,15.68 13.62,17.23 13.62,17.23C13.62,17.23 13.62,17.45 13.46,17.62C13.28,17.81 12.93,17.74 12.93,17.74H11.78C11.78,17.74 9.23,18 7,15.67C4.55,13.13 2.39,8.13 2.39,8.13C2.39,8.13 2.27,7.83 2.4,7.66C2.55,7.5 2.97,7.5 2.97,7.5H5.73C5.73,7.5 6,7.5 6.17,7.66C6.32,7.77 6.41,8 6.41,8C6.41,8 6.85,9.11 7.45,10.13C8.6,12.12 9.13,12.55 9.5,12.34C10.1,12.03 9.93,9.53 9.93,9.53C9.93,9.53 9.94,8.62 9.64,8.22C9.41,7.91 8.97,7.81 8.78,7.79C8.62,7.77 8.88,7.41 9.21,7.24C9.71,7 10.58,7 11.62,7C12.43,7 12.66,7.06 12.97,7.13C13.93,7.36 13.6,8.25 13.6,10.37C13.6,11.06 13.5,12 13.97,12.33C14.18,12.47 14.7,12.35 16,10.16C16.6,9.12 17.06,7.89 17.06,7.89C17.06,7.89 17.16,7.68 17.31,7.58C17.47,7.5 17.69,7.5 17.69,7.5H20.59C20.59,7.5 21.47,7.4 21.61,7.79C21.76,8.2 21.28,9.17 20.09,10.74C18.15,13.34 17.93,13.1 19.54,14.6Z"></path>
													</svg>
													<svg viewBox="0 0 24 24" >
														<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path>
													</svg>
													<div>ВКонтакте</div>
												</div>
											</div>
										</span>
									</ButtonBase>
									<ButtonBase component="a" href="https://www.facebook.com/DinonnaPizzaSushi/" target="_blank">
										<span tabIndex="0" type="button">
											<div>
												<div>
													<svg viewBox="0 0 24 24" style={{ fill: '#3a5795' }}>
														<path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z">
														</path>
													</svg>
													<svg viewBox="0 0 24 24">
														<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z">
														</path>
													</svg>
													<div>Facebook</div>
												</div>
											</div>
										</span>
									</ButtonBase>
									<ButtonBase component="a" href="https://www.instagram.com/dinonna.ru" target="_blank">
										<span tabIndex="0" type="button">
											<div>
												<div >
													<svg viewBox="0 0 24 24" style={{ fill: '#285377' }}>
														<path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z">
														</path>
													</svg>
													<svg viewBox="0 0 24 24">
														<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z">
														</path>
													</svg>
													<div style={{ height: '1.1em' }}>Instagram</div>
												</div>
											</div>
										</span>
									</ButtonBase>
								</div>
							</div>
						</div>
						<h3 className="header-md">Режим работы</h3>
						<div className="panel z1">
							<table className="working-table">
								<tbody>
									<tr className="working-table__row">
										<td className="working-table__day working-table__day--active">
											Понедельник
											<meta itemProp="openingHours" content="Mo 11:00-22:55" />
										</td>
										<td rowSpan="2" className="working-table__period working-table__period--grouped">11:00 – 22:55</td>
									</tr>
									<tr className="working-table__row">
										<td className="working-table__day">
											Вторник
											<meta itemProp="openingHours" content="Tu 11:00-22:55" />
										</td>
									</tr>
									<tr className="working-table__row working-table__row--with-border">
										<td className="working-table__day">
											Среда
											<meta itemProp="openingHours" content="We 13:00-22:55" />
										</td>
										<td rowSpan="1" className="working-table__period">13:00 – 22:55</td>
									</tr>
									<tr className="working-table__row working-table__row--with-border">
										<td className="working-table__day">
											Четверг
											<meta itemProp="openingHours" content="Th 11:00-22:55" />
										</td>
										<td rowSpan="1" className="working-table__period">11:00 – 22:55</td>
									</tr>
									<tr className="working-table__row working-table__row--with-border">
										<td className="working-table__day">
											Пятница
											<meta itemProp="openingHours" content="Fr 11:00-23:50" />
										</td>
										<td rowSpan="2" className="working-table__period working-table__period--grouped">11:00 – 23:50</td>
									</tr>
									<tr className="working-table__row">
										<td className="working-table__day">
											Суббота
											<meta itemProp="openingHours" content="Sa 11:00-23:50" />
										</td>
									</tr>
									<tr className="working-table__row working-table__row--with-border">
										<td className="working-table__day">
											Воскресенье
											<meta itemProp="openingHours" content="Su 11:00-22:55" />
										</td>
										<td rowSpan="1" className="working-table__period">11:00 – 22:55</td>
									</tr>
								</tbody>
							</table>
						</div>
					</aside>
				</div>
			</Layout>
		</>
	)
}

export default withRedux(AboutPage)
