import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ButtonBase from '@material-ui/core/ButtonBase'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { i18n, withTranslation } from '../../i18n'

import './styles.scss'

const steps = [
    {
        label: 'cart.headings.products',
        labelSecondary: ''
    },
    {
        label: 'cart.headings.fields',
        labelSecondary: ''
    },
    {
        label: 'cart.headings.pay1',
        labelSecondary: 'cart.headings.pay2'
    },
    {
        label: 'cart.headings.wait',
        labelSecondary: ''
    }
]

const CartModal = ({ t }) => {
    const dispatch = useDispatch()
    const { isCartModalOpen, cart, products } = useSelector(state => state)
    const productInCart = products.filter(p => cart.findIndex(c => c === p.id) > -1)
    const totalPrice = cart.map(c => products.find(p => p.id === c).params[0].price).reduce((a, b) => a + b, 0)

    return (
        <Modal
            className="modal"
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isCartModalOpen}
            onClose={() => dispatch({ type: 'SET_CART_MODAL_OPEN', isCartModalOpen: false })}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isCartModalOpen}>
                <div className="app-fullscreen-modal-content">
                    <div className="CartPage">
                        <div className="CartSteps">
                            <div>
                                {
                                    steps.map((step, i) => (
                                        <React.Fragment key={i}>
                                            <div className="CartStep">
                                                <span className={["CartStepLabel", i > 0 ? "inactive" : null].join(' ')}>
                                                    <span>
                                                        <svg viewBox="0 0 24 24">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">{i + 1}</text>
                                                        </svg>
                                                    </span>
                                                    <div>
                                                        {t(`${step.label}`)}
                                                        <div className="CartLabel__secondary">{t(`${step.labelSecondary}`)}</div>
                                                    </div>
                                                </span>
                                                <span disabled="" icon="3"></span>
                                            </div>
                                            {(i < steps.length - 1) &&
                                                <div>
                                                    <span></span>
                                                </div>
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="CartStepContent CartStepContent__0">
                            <span></span>
                            <div>
                                <div>
                                    {
                                        productInCart.map((product, i) => {
                                            const count = cart.filter(c => c === product.id).length

                                            return (
                                                <div className="CartProduct" key={i}>
                                                    <div className="CartProduct__image" style={{ minWidth: '40px' }}>
                                                        <img size="40" src={product.images.medium} />
                                                    </div>
                                                    <div className="CartProduct__content">
                                                        <div className="CartProduct__name">
                                                            {product.name}<br />{product.params[0].text}
                                                        </div>
                                                        <div className="CartProduct__description" title={product.description}>{product.description}</div>
                                                    </div>
                                                    <div className="CartProduct__actions">
                                                        <div className="quantity-changer">
                                                            <IconButton
                                                                onClick={() => {
                                                                    let deleteIndex = cart.findIndex(v => v === product.id)
                                                                    dispatch({ type: 'SET_CART', cart: [...cart.filter((v, i) => i !== deleteIndex)] })
                                                                }}
                                                                size="small"
                                                            >
                                                                <svg viewBox="0 0 24 24">
                                                                    <path d="M19,13H5V11H19V13Z"></path>
                                                                </svg>
                                                            </IconButton>
                                                            <span className="quantity-changer__value">
                                                                <span>
                                                                    <span>
                                                                        <span style={{ visibility: 'hidden' }}>{count}</span>
                                                                        <span>{count}</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <IconButton
                                                                onClick={() => dispatch({ type: 'SET_CART', cart: [...cart, product.id] })}
                                                                size="small"
                                                            >
                                                                <svg viewBox="0 0 24 24">
                                                                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                                                </svg>
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                    <span className="CartProduct__sum">
                                                        <span className="CartProduct__sum-title">{t('cart.amount')}:</span>
                                                        <span>
                                                            <meta itemProp="price" content={count * product.params[0].price} />
                                                            <meta itemProp="priceCurrency" content="RUB" />
                                                            <span>{count * product.params[0].price}</span>
                                                            <span style={{ marginLeft: '0.3em' }}>₽</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <hr />
                                <div className="CartAmount row wide align-right">
                                    <div className="CartAmountItem CartAmountItem--primary columns large-2">
                                        <div className="CartAmountItem__name">{t('cart.total')}:</div>
                                        <div className="CartAmountItem__value"><span>
                                            <meta itemProp="price" content={totalPrice} />
                                            <meta itemProp="priceCurrency" content="RUB" />
                                            <span>{totalPrice}</span>
                                            <span style={{ marginLeft: '0.3em' }}>₽</span>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="CartActions">
                                    <ButtonBase>
                                        <span>{t('cart.clear')}</span>
                                    </ButtonBase>
                                    <ButtonBase>
                                        <span>{t('common.next')}</span>
                                    </ButtonBase>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </Fade >
        </Modal >
    )
}

export default withTranslation()(CartModal)