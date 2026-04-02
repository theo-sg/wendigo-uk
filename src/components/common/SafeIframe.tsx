import type { IframeHTMLAttributes } from 'react'

type SafeIframeProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  title: string
}

export default function SafeIframe({ loading, referrerPolicy, ...rest }: SafeIframeProps) {
  return (
    <iframe
      {...rest}
      loading={loading ?? 'lazy'}
      referrerPolicy={referrerPolicy ?? 'strict-origin-when-cross-origin'}
    />
  )
}
