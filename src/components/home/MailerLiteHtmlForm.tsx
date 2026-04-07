import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import useExternalScript from '../../hooks/useExternalScript'

const RECAPTCHA_SCRIPT_ID = 'mailerlite-recaptcha-script'
const RECAPTCHA_SITE_KEY = '6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD'
const MAILERLITE_IFRAME_TARGET = 'mailerlite-submit-target'

type Grecaptcha = {
  ready: (callback: () => void) => void
  render: (container: HTMLElement, parameters: { sitekey: string }) => number
  getResponse: (widgetId?: number) => string
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha
  }
}

export default function MailerLiteHtmlForm() {
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null)
  const recaptchaWidgetIdRef = useRef<number | null>(null)
  const hasStartedSubmitRef = useRef(false)

  const recaptchaScriptStatus = useExternalScript({
    id: RECAPTCHA_SCRIPT_ID,
    src: 'https://www.google.com/recaptcha/api.js?render=explicit',
    target: 'body',
    timeoutMs: 7000,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)
  const [recaptchaLoadFailed, setRecaptchaLoadFailed] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const { grecaptcha } = window
    const container = recaptchaContainerRef.current

    if (recaptchaScriptStatus === 'error') {
      if (recaptchaWidgetIdRef.current === null) {
        setRecaptchaLoadFailed(true)
        setIsRecaptchaReady(false)
      }
      return
    }

    if ((recaptchaScriptStatus !== 'ready' && !grecaptcha) || !container || recaptchaWidgetIdRef.current !== null) {
      return
    }

    grecaptcha?.ready(() => {
      if (!recaptchaContainerRef.current || recaptchaWidgetIdRef.current !== null || !window.grecaptcha) {
        return
      }

      recaptchaWidgetIdRef.current = window.grecaptcha.render(recaptchaContainerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
      })
      setRecaptchaLoadFailed(false)
      setIsRecaptchaReady(true)
    })
  }, [recaptchaScriptStatus])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting || isSubmitted) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    const widgetId = recaptchaWidgetIdRef.current
    const captchaResponse = window.grecaptcha?.getResponse(widgetId ?? undefined) ?? ''

    if (!captchaResponse) {
      setSubmitError('please complete the captcha.')
      setIsSubmitting(false)
      return
    }

    hasStartedSubmitRef.current = true
    event.currentTarget.submit()
  }

  const handleIframeLoad = () => {
    if (!hasStartedSubmitRef.current) {
      return
    }

    hasStartedSubmitRef.current = false
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="mailerlite-form-shell">
      <h4 className="mailerlite-form-title">sign up to our mailing list</h4>
      {isSubmitted ? (
        <p className="mailerlite-success">thank you for signing up. stay alert.</p>
      ) : (
        <>
          <iframe
            name={MAILERLITE_IFRAME_TARGET}
            title="mailerlite submit target"
            className="mailerlite-submit-frame"
            onLoad={handleIframeLoad}
          />

        <form
          action="https://assets.mailerlite.com/jsonp/2200415/forms/182221510013879635/subscribe"
          className="mailerlite-form"
          method="post"
          onSubmit={handleSubmit}
          target={MAILERLITE_IFRAME_TARGET}
        >
          <input
            id="ml-email-input"
            aria-label="email"
            aria-required="true"
            autoComplete="email"
            className="mailerlite-input"
            name="fields[email]"
            placeholder="enter your email address here"
            type="email"
            required
          />

          <input name="ml-submit" type="hidden" value="1" />
          <input name="anticsrf" type="hidden" value="true" />

          <div className="mailerlite-recaptcha" ref={recaptchaContainerRef}></div>

          <button className="mailerlite-submit" type="submit" disabled={isSubmitting || !isRecaptchaReady}>
            {isSubmitting ? 'submitting...' : 'sign up now'}
          </button>

          {recaptchaLoadFailed ? (
            <p className="mailerlite-warning">
              captcha failed to load. disable content blockers and refresh this page to try again.
            </p>
          ) : null}

          {submitError ? <p className="mailerlite-error">{submitError}</p> : null}
        </form>
        </>
      )}
    </div>
  )
}
