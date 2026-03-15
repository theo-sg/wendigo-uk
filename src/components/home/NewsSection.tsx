import { EXTERNAL_LINKS } from '../../constants/links'

export default function NewsSection() {
  return (
    <section id="news" className="section home-anchor-section news-section">
      <div className="page-padding">
        <div className="container padding-top">
          <h2 className="anchor-title section-title-center">news</h2>

          <article className="news-blog-preview" aria-label="Instagram news">
            <p className="news-blog-kicker">instagram update</p>
            <h3 className="news-blog-title">camden assembly, march fifth - our biggest headline show so far</h3>
            <p className="news-blog-excerpt">our biggest show so far, march fifth, at @camdenassembly, last week. a new era of wendigo is upon us. thank you all for being a part of it, and thank you to the incredibly talented @ethnephoto for these photos, and @liamchapmanaudio for bringing di-gaze to life live</p>
            <div className="news-instagram-wrap">
              <iframe
                className="news-instagram-embed"
                src={EXTERNAL_LINKS.embeds.instagramPost}
                loading="lazy"
                allowTransparency={true}
                allow="encrypted-media"
                title="Wendigo Instagram post"
              />
            </div>
          </article>

          <article className="news-blog-preview" aria-label="External blog preview">
            <p className="news-blog-kicker">Voxwave interview</p>
            <h3 className="news-blog-title">our interview with Voxwave for <b>XXII</b></h3>
            <p className="news-blog-excerpt">
              A Stare That Hits Hard: &quot;Wendigo&apos;s Music Should Feel Like A Kubrick Stare&quot; &mdash; And They Mean It
            </p>
            <a
              aria-label="Open Voxwave article"
              className="news-blog-image-link"
              href={EXTERNAL_LINKS.press.voxwaveArticle}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="Voxwave article preview"
                className="news-blog-preview-image"
                loading="lazy"
                src={EXTERNAL_LINKS.press.voxwaveImage}
              />
            </a>
            <a
              className="news-blog-link"
              href={EXTERNAL_LINKS.press.voxwaveArticle}
              rel="noreferrer"
              target="_blank"
            >
              read full article
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
