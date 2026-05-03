import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'music.song'
}

export default function SEO({
  title = "wendigo",
  description = "the official wendigo website.",
  image,
  url,
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://wendigo.uk'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}