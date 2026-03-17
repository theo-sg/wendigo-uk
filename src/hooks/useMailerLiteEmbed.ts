import { useEffect } from 'react'

const MAILERLITE_SCRIPT_ID = 'mailerlite-universal-script'
const MAILERLITE_ACCOUNT_ID = '2200415'
const MAILERLITE_SCRIPT_SRC = 'https://assets.mailerlite.com/js/universal.js'

type MailerLiteFn = ((...args: unknown[]) => void) & {
  q?: unknown[][]
}

declare global {
  interface Window {
    ml?: MailerLiteFn
  }
}

export default function useMailerLiteEmbed() {
  useEffect(() => {
    const { document: doc } = window

    const ensureQueueFn = () => {
      if (typeof window.ml === 'function') {
        return
      }

      const queuedMl = ((...args: unknown[]) => {
        ;(queuedMl.q = queuedMl.q || []).push(args)
      }) as MailerLiteFn

      window.ml = queuedMl
    }

    const initEmbed = () => {
      if (typeof window.ml === 'function') {
        window.ml('account', MAILERLITE_ACCOUNT_ID)
      }
    }

    ensureQueueFn()

    let loadListenerTarget: HTMLScriptElement | null = null
    const existingScript = doc.getElementById(MAILERLITE_SCRIPT_ID) as HTMLScriptElement | null

    if (existingScript) {
      loadListenerTarget = existingScript
      if (existingScript.dataset.loaded === 'true') {
        initEmbed()
      } else {
        existingScript.addEventListener('load', initEmbed, { once: true })
      }
    } else {
      const script = doc.createElement('script')
      script.id = MAILERLITE_SCRIPT_ID
      script.src = MAILERLITE_SCRIPT_SRC
      script.async = true
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true'
        initEmbed()
      })
      doc.head.appendChild(script)
    }

    const retryShort = window.setTimeout(initEmbed, 250)
    const retryLong = window.setTimeout(initEmbed, 900)

    return () => {
      window.clearTimeout(retryShort)
      window.clearTimeout(retryLong)
      loadListenerTarget?.removeEventListener('load', initEmbed)
    }
  }, [])
}
