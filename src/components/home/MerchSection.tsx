import ExternalLink from '../common/ExternalLink'
import { EXTERNAL_LINKS } from '../../constants/links'
import fateTShirtImage from '../../assets/merchimage/fate-t-shirt.jpg'
import fateTShirtDetailImage from '../../assets/merchimage/fate-t-shirt-detail.jpg'

export default function MerchSection() {
  return (
    <section id="merch" className="section home-anchor-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h2 className="anchor-title section-title-center">merch</h2>
          <br></br>

          <article className="merch-product-card">
            <ExternalLink
              className="merch-product-images"
              href={EXTERNAL_LINKS.merch.fateTShirt}
              target="_blank"
              aria-label="View FATE T-Shirt on Bandcamp"
            >
              <img src={fateTShirtDetailImage} alt="FATE T-Shirt detail" loading="lazy" />
              <img src={fateTShirtImage} alt="FATE T-Shirt front" loading="lazy" />
            </ExternalLink>
            <div className="merch-product-info">
              <h3>"FATE" T-Shirt</h3>
              <ExternalLink
                className="merch-product-button"
                href={EXTERNAL_LINKS.merch.fateTShirt}
                target="_blank"
              >
                <span>buy now on bandcamp</span>
                <span>25 GBP + shipping</span>
              </ExternalLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
