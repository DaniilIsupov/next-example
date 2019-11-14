import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonBase from '@material-ui/core/ButtonBase'
import IconButton from '@material-ui/core/IconButton'
import { i18n, withTranslation } from '../../i18n'

import './styles.scss'

const ProductCard = ({ product, t }) => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    const count = cart.filter(c => c === product.id).length

    return (
        <div itemScope="" itemType="http://schema.org/Product" className="column medium-6 xxlarge-3 small-12 large-6 xlarge-4 ">
            <meta itemProp="mpn" content="616265" />
            <meta itemProp="sku" content="616265" />
            <meta itemProp="brand" content="Dinonna" />
            <div className="panel Card ProductCard product-card">
                <link itemProp="image" href={product.images.small} />
                <div itemProp="aggregateRating" itemType="http://schema.org/AggregateRating" itemScope="">
                    <meta itemProp="reviewCount" content="70" />
                    <meta itemProp="ratingValue" content="4.35" />
                </div>
                <div className="product-card-labels"></div>
                <div className="CardMedia">
                    <div className="ProductCard__image">
                        <div
                            className="ProductCard__image__background visible"
                            role="img"
                            aria-label={product.name}
                            title={product.name}
                            style={{ backgroundImage: `url("${product.images.small}")` }}
                        >
                        </div>
                    </div>
                </div>
                <div className="CardContent">
                    <div className="CardText">
                        <div className="CardText__title"><span itemProp="name">{product.name}</span></div>
                        <div className="CardText__subtitle" itemProp="description">
                            <span>{product.description}</span>
                        </div>
                    </div>
                    <div className="CardActions">
                        <div className="CardActions__bottom">
                            <div className="ProductParams__price" itemScope="" itemProp="offers" itemType="http://schema.org/Offer">
                                <meta itemProp="availability" content="https://schema.org/InStock" />
                                <link itemProp="url" href="#" />
                                <span>
                                    <meta itemProp="price" content={`${product.params[0].price}`} />
                                    <meta itemProp="priceCurrency" content="RUB" />
                                    <span>{product.params[0].price}</span>
                                    <span style={{ marginLeft: '0.3em' }}>₽</span>
                                </span>
                            </div>

                            {
                                count < 1 && (
                                    <ButtonBase onClick={() => dispatch({ type: 'SET_CART', cart: [...cart, product.id] })}>
                                        {t('product.toCart')}
                                    </ButtonBase>
                                )
                            }

                            {
                                count > 0 && (
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
                                                <span style={{ position: 'relative' }}>
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
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(ProductCard)