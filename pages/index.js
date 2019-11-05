import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'nuka-carousel'
import ButtonBase from '@material-ui/core/ButtonBase'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout/Layout'
import ProductCard from '../components/ProductCard/ProductCard'

import './main.scss'
import './index-styles.scss'

const carouselInterval = 5000

const IndexPage = () => {
	const dispatch = useDispatch()
	const [slideIndex, setSlideIndex] = useState(0)

	const { categories, sales, featured, products } = useSelector(state => state)

	let carouselTimer = null

	useEffect(
		() => {
			return () => { // Unmount				
				clearTimeout(carouselTimer)
			}
		},
		[] //useEffect will run only one time
	)

	return (
		<>
			<Layout
				title="Главная"
				mainClassName="background"
				headerContent={
					<Carousel
						className="app-carousel"
						autoplay={true}
						autoplayInterval={carouselInterval}
						pauseOnHover={false}
						slideIndex={slideIndex}
						afterSlide={newIndex => {
							setSlideIndex(newIndex)
							// if the slides are over then go to the first slide
							if (newIndex === sales.length - 1) {
								carouselTimer = setTimeout(() => setSlideIndex(0), carouselInterval)
							}
						}}
						renderCenterLeftControls={({ previousSlide }) => (
							<button className="app-previous-slide" onClick={previousSlide}>
								<svg viewBox="0 0 24 24">
									<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
								</svg>
							</button>
						)}
						renderCenterRightControls={({ nextSlide }) => (
							<button className="app-next-slide" onClick={nextSlide}>
								<svg viewBox="0 0 24 24">
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
								</svg>
							</button>
						)}
					>
						{
							sales.map((sale, i) => (
								<img src={sale.image.large} alt="" key={i} />
							))
						}
					</Carousel>
				}
			>
				<section>
					<div className="row">
						<div className="columns large-12 small-12 medium-12">
							<div className="delivery-params-wrap panel" itemScope="" itemType="http://schema.org/OfferCatalog">
								<div className="columns small-6 medium-3 large-expand delivery-param" itemProp="itemListElement" itemScope="" itemType="http://schema.org/Offer">
									<svg viewBox="0 0 24 24">
										<path
											d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z">
										</path>
									</svg>
									<div className="delivery-param__value" itemProp="description">1 ч 20 мин</div>
									<div className="delivery-param__name" itemProp="name">Время доставки</div>
								</div>
								<div className="columns small-6 medium-3 large-expand delivery-param" itemProp="itemListElement" itemScope="" itemType="http://schema.org/Offer">
									<svg viewBox="0 0 24 24">
										<path
											d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z">
										</path>
									</svg>
									<div className="delivery-param__value" itemProp="description">
										<span itemScope="" itemType="http://schema.org/PriceSpecification">
											<meta itemProp="price" content="600" />
											<meta itemProp="priceCurrency" content="RUB" />
											<span>600</span>
											<span style={{ marginLeft: '0.3em' }}>₽</span>
										</span>
									</div>
									<div className="delivery-param__name" itemProp="name">Мин. сумма заказа</div>
								</div>
								<div className="columns small-6 medium-3 large-expand delivery-param" itemProp="itemListElement" itemScope="" itemType="http://schema.org/DeliveryChargeSpecification">
									<svg viewBox="0 0 24 24">
										<path
											d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z">
										</path>
									</svg>
									<div className="delivery-param__value" itemProp="description">
										<span itemScope="" itemType="http://schema.org/PriceSpecification">
											<meta itemProp="price" content="50" />
											<meta itemProp="priceCurrency" content="RUB" />
											<span>50</span>
											<span style={{ marginLeft: '0.3em' }}>₽</span>
										</span>
									</div>
									<div className="delivery-param__name" itemProp="name">Стоимость доставки</div>
								</div>
								<div className="columns small-6 medium-3 large-expand delivery-param" itemProp="itemListElement"
									itemScope="" itemType="http://schema.org/DeliveryChargeSpecification"><svg viewBox="0 0 24 24"
									>
										<path
											d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z">
										</path>
									</svg>
									<div className="delivery-param__value" itemProp="description">
										<span itemScope="" itemType="http://schema.org/PriceSpecification">
											<meta itemProp="price" content="3000" />
											<meta itemProp="priceCurrency" content="RUB" />
											<span>3&nbsp;000</span>
											<span style={{ marginLeft: '0.3em' }}>₽</span>
										</span>
									</div>
									<div className="delivery-param__name" itemProp="name">Бесплатная доставка</div>
								</div>
								<div className="columns small-6 medium-3 large-expand delivery-param" itemProp="itemListElement"
									itemScope="" itemType="http://schema.org/Offer"><svg viewBox="0 0 24 24"
									>
										<path
											d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z">
										</path>
									</svg>
									<div className="delivery-param__value" itemProp="description">Оплата картой</div>
									<div className="delivery-param__name" itemProp="name">У наших курьеров есть терминалы</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*  */}
				<section>
					<div className="row">
						<div className="columns large-12"></div>
					</div>
				</section>
				{/*  */}
				<section>
					<div className="row main-header">
						<h2>Мы рекомендуем</h2>
					</div>
					<div className="trianglify-background">
						<div className="row products products--bg products--main">
							{
								featured.map((product, i) => (
									<ProductCard key={i} product={product} />
								))
							}
						</div>
					</div>
				</section>
				{/*  */}
				{
					[...categories].splice(0, 3).map((category, categoryIndex) => (
						<section key={categoryIndex}>
							<div className="row main-header">
								<h2>{category.name}</h2>
							</div>
							<div className="row products products--main">
								{
									[...products.filter(p => p.category_id === category.id)].splice(0, 4).map((product, productIndex) => (
										<ProductCard key={productIndex} product={product} />
									))
								}
							</div>
							{
								[...products.filter(p => p.category_id === category.id)].length > 4 && (
									<div className="row products--more align-center">
										<ButtonBase component="a" href="#">
											<div>
												<svg viewBox="0 0 24 24">
													<path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
												</svg>
												Ещё
												<svg viewBox="0 0 24 24">
													<path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
												</svg>
											</div>
										</ButtonBase>
									</div>
								)
							}
						</section>
					))
				}
				{/*  */}
				<div className="row catalog-more align-center" style={{ marginTop: '36px' }}>
					<ButtonBase component="a" href="#">
						ВСЁ МЕНЮ
					</ButtonBase>
				</div>
			</Layout>
		</>
	)
}

IndexPage.getInitialProps = ({ reduxStore }) => {
	const { dispatch } = reduxStore

	return {}
}

export default withRedux(IndexPage)
