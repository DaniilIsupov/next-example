import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'next/router'
import NextLink from 'next/link'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { i18n, withTranslation } from '../../i18n'

import './styles.scss'

const menuItems = [{
    label: 'main.page-title',
    href: '/',
    svgPath: 'M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z'
}, {
    label: 'promo.page-title',
    href: '/promo',
    svgPath: 'M18.65,2.85L19.26,6.71L22.77,8.5L21,12L22.78,15.5L19.24,17.29L18.63,21.15L14.74,20.54L11.97,23.3L9.19,20.5L5.33,21.14L4.71,17.25L1.22,15.47L3,11.97L1.23,8.5L4.74,6.69L5.35,2.86L9.22,3.5L12,0.69L14.77,3.46L18.65,2.85M9.5,7A1.5,1.5 0 0,0 8,8.5A1.5,1.5 0 0,0 9.5,10A1.5,1.5 0 0,0 11,8.5A1.5,1.5 0 0,0 9.5,7M14.5,14A1.5,1.5 0 0,0 13,15.5A1.5,1.5 0 0,0 14.5,17A1.5,1.5 0 0,0 16,15.5A1.5,1.5 0 0,0 14.5,14M8.41,17L17,8.41L15.59,7L7,15.59L8.41,17Z'
}, {
    label: 'about.page-title',
    href: '/about',
    svgPath: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z'
}]

const Navbar = ({ router, width, t }) => {
    const dispatch = useDispatch()
    const { districtValues, district, isMenuOpen } = useSelector(state => state)

    return (
        <>
            <div
                className={["menu-background", width > 768 || !isMenuOpen ? null : "show"].join(' ')}
                onClick={() => dispatch({ type: 'SET_MENU_OPEN', isMenuOpen: false })}
            />
            <div className={["navbar-wrapper", width > 768 || isMenuOpen ? "show" : null].join(' ')}>
                <aside className="app-navbar-container">
                    <div className="app-navbar">
                        <div>
                            <NextLink href="/">
                                <img src="/images/main/f1ccba7aaea76c1c9a6a42294ee05239.png" alt="Dinonna Pizzeria" style={{ width: '100%' }} />
                            </NextLink>
                            <div className="app-navbar-select">
                                <InputLabel>{t('common.district')}</InputLabel>
                                <Select
                                    value={district}
                                    onChange={e => dispatch({ type: 'SET_DISTRICT', district: e.target.value })}
                                >
                                    {
                                        districtValues.map((v, i) => (
                                            <MenuItem key={i} value={v}>{v}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div className="phone">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component="a"
                                    href="tel:903903"
                                >
                                    <svg viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path></svg>
                                    <span>903-903</span>
                                </Button>
                            </div>
                            <hr />
                            <div className="app-menu">
                                {
                                    menuItems.map((v, i) => (
                                        <NextLink href={v.href} key={i}>
                                            <div className={["app-menu-item", router.pathname === v.href ? "active" : null].join(' ')}>
                                                <svg viewBox="0 0 24 24"><path d={v.svgPath}></path></svg>
                                                <span>{t(`${v.label}`)}</span>
                                            </div>
                                        </NextLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default withTranslation()(withRouter(Navbar))