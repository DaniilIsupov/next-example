import React from 'react'
import { useSelector } from 'react-redux'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout/Layout'
import { i18n, withTranslation } from '../i18n'

import './main.scss'
import './promo-styles.scss'

const PromoPage = ({ t }) => {
	const { sales } = useSelector(state => state)

	return (
		<>
			<Layout
				title={t('promo.page-title')}
				mainClassName="row"
			>
				<div className="promo-content column">
					{
						sales.map((sale, i) => (
							<div className="promo-item Card" key={i}>
								<div className="CardMedia">
									<img src={sale.image.large} alt={sale.title} />
								</div>
								<div className="CardContent">
									<div className="CardText">
										<div className="CardText__title">{sale.title}</div>
										<div className="CardText__subtitle">{sale.description}</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</Layout>
		</>
	)
}

PromoPage.getInitialProps = async () => ({
	namespacesRequired: ['common'],
})

export default withTranslation()(withRedux(PromoPage))
