import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

import './styles.scss'

const useWindowPageYOffset = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        function updateOffset() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener('scroll', updateOffset)
        updateOffset()
        return () => window.removeEventListener('scroll', updateOffset)
    }, [])

    return offset
}

const Header = ({ headerContent, title, width }) => {
    const dispatch = useDispatch()
    const offset = useWindowPageYOffset()

    const { isMenuOpen, cart, products } = useSelector(state => state)
    let contentRef = useRef(null) // header content ref

    const getHeaderContentHeight = () => (contentRef.current && contentRef.current.clientHeight > 0 ? contentRef.current.clientHeight : 600)
    const isShowHeaderTop = () => (offset >= (getHeaderContentHeight() - 64))

    const totalPrice = cart.map(c => products.find(p => p.id === c).params[0].price).reduce((a, b) => a + b, 0)

    return (
        <header className={["app-header parallax", headerContent ? "transparentToolbar" : null].join(' ')}>
            <div className={["fab-scrolltop", isShowHeaderTop() && headerContent && width > 768 ? "fab-scrolltop--visible" : null].join(' ')}>
                <div>
                    <div>
                        <div>
                            <Fab
                                size="medium"
                                color="primary"
                                aria-label="arrow-upward"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <ArrowUpwardIcon />
                            </Fab>
                        </div>
                    </div>
                </div>
            </div>
            <div className={["app-header__top", isShowHeaderTop() || !headerContent ? "show" : null].join(' ')}>
                <div>
                    <div className="row layout horizontal" style={{ width: '100%' }}>
                        {width <= 768 &&
                            <IconButton
                                className="menu-button"
                                aria-label="menu"
                                onClick={() => dispatch({ type: 'SET_MENU_OPEN', isMenuOpen: !isMenuOpen })}
                            >
                                <MenuIcon />
                            </IconButton>
                        }
                        <div className="app-header__title flex">
                            <h1>{title}</h1>
                        </div>
                        <div className="app-header-cart layout horizontal center">
                            <div className="Badge" onClick={e => dispatch({ type: 'SET_CART_MODAL_OPEN', isCartModalOpen: true })}>
                                <span className="Badge__value" style={{ backgroundColor: '#EF5350', userSelect: 'none' }}>
                                    <span>
                                        <meta itemProp="price" content="370" />
                                        <meta itemProp="priceCurrency" content="RUB" />
                                        <span>{totalPrice}</span>
                                        <span style={{ marginLeft: '0.3em' }}>₽</span>
                                    </span>
                                </span>
                                <IconButton size="small">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M5.5,21C4.72,21 4.04,20.55 3.71,19.9V19.9L1.1,10.44L1,10A1,1 0 0,1 2,9H6.58L11.18,2.43C11.36,2.17 11.66,2 12,2C12.34,2 12.65,2.17 12.83,2.44L17.42,9H22A1,1 0 0,1 23,10L22.96,10.29L20.29,19.9C19.96,20.55 19.28,21 18.5,21H5.5M12,4.74L9,9H15L12,4.74M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13Z"></path>
                                    </svg>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={contentRef}
                className="app-header__content"
                style={{
                    opacity: `${Math.max(0, 1 - offset / getHeaderContentHeight())}`
                }}
            >
                {headerContent}
            </div>
        </header>
    )
}

export default Header