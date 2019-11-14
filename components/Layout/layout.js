import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CartModal from '../CartModal/CartModal'

import { i18n, withTranslation } from '../../i18n'

import './styles.scss'

const useWindowSize = () => {
    const [size, setSize] = useState([1920, 1080])

    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
}

const Layout = ({ children, title, headerContent, mainClassName, t }) => {
    const [width, height] = useWindowSize()

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="Dinonna – вкусная доставка пиццы, суши, сетов, бургеров и ВОК на дом и в офис Великий Новгород. Быстрая доставка вкусной еды в течение часа. Много  начинки, сытно! 3 пиццы за 999 р.  Телефон 7 (8162) 903-903." />
                <meta name="keywords" content="Суши Великий Новгород, пицца Великий Новгород, пицца, доставка пиццы, доставка еды, пицца на дом, заказать пиццу с доставкой, пицца роллы суши доставка, суши и пицца доставка, пицца заказ, суши, роллы, доставка суши, суши на дом, бесплатная доставка суши, заказать суши с доставкой, сайт доставки суши, суши доставка, суши и пицца доставка, Динонна, Dinonna, доставка бургеров, бургеры на заказ, гамбургер, пицца великий новгород, сладкие роллы, пицца в новгороде заказать, доставка пиццы великий новгород, заказать пиццу, заказать пиццу великий новгород, заказать суши, заказать суши великий новгород, заказ пиццы, пицца на дом, заказ пиццы великий новгород, суши пицца великий новгород, заказать пиццу в великом новгороде с доставкой, заказать пиццу с доставкой, заказать суши с доставкой, купить пиццу, заказать роллы, заказ пиццы на дом, заказать роллы в великом новгороде, заказать суши на дом, купить бургер, заказать бургер, вок заказать, заказать бургеры с доставкой, заказать роллы недорого, суши, лапша вок, трио пицца, бесплатная доставка пиццы, бесплатная доставка суши, вкусные суши доставка," />
                <meta name="theme-color" content="#80CBC4" />
                <meta name="msapplication-TileColor" content="#80CBC4" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta property="og:title" content="Dinonna Pizzeria" />
                <meta property="og:image" content="https://dinonna.ru/images/main/ru/176/aaeb3e4574e6edaf7d31d135b93d4b63.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dinonna.ru/" />
                <meta name="yandex-verification" content="ff64789578d49474" />
                <meta name="google-site-verification" content="ytLttayIfObs4HF_3ixx8o7OHmUc1rxxE81g0AJIVv4" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <title>{title ? `${title} | Dinonna Pizzeria` : `Dinonna Pizzeria`}</title>
            </Head>

            <Navbar
                width={width}
            />

            <div className={["page", width > 768 ? "page--with-drawer" : null].join(' ')}>
                <Header
                    headerContent={headerContent}
                    title={title}
                    width={width}
                />
                <main className={mainClassName || "background"}>
                    {children}
                </main>
                <Footer />
            </div>

            <CartModal />
        </>
    )
}

// Layout.getInitialProps = async () => ({
//     namespacesRequired: ['common'],
// })

export default withTranslation()(Layout)