import { useEffect, useState } from 'react'

export type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error'

type ScriptTarget = 'head' | 'body'

type UseExternalScriptOptions = {
  id: string
  src: string
  enabled?: boolean
  target?: ScriptTarget
  async?: boolean
  defer?: boolean
  removeOnUnmount?: boolean
  reloadOnMount?: boolean
  timeoutMs?: number
}

export default function useExternalScript({
  id,
  src,
  enabled = true,
  target = 'body',
  async = true,
  defer = false,
  removeOnUnmount = false,
  reloadOnMount = false,
  timeoutMs,
}: UseExternalScriptOptions): ScriptStatus {
  const [status, setStatus] = useState<ScriptStatus>(enabled ? 'loading' : 'idle')

  useEffect(() => {
    if (!enabled) {
      setStatus('idle')
      return
    }

    const doc = window.document
    let timeoutId = 0
    let createdScript: HTMLScriptElement | null = null

    const existingScript = doc.getElementById(id) as HTMLScriptElement | null

    if (reloadOnMount && existingScript) {
      existingScript.remove()
    }

    const targetParent = target === 'head' ? doc.head : doc.body

    const script =
      (reloadOnMount ? null : (doc.getElementById(id) as HTMLScriptElement | null)) ||
      doc.createElement('script')

    const handleReady = () => {
      script.dataset.loaded = 'true'
      setStatus('ready')
    }

    const handleError = () => {
      setStatus('error')
    }

    if (script.dataset.loaded === 'true') {
      setStatus('ready')
      return
    }

    script.addEventListener('load', handleReady)
    script.addEventListener('error', handleError)

    if (!script.id) {
      script.id = id
      script.src = src
      script.async = async
      script.defer = defer
      targetParent.appendChild(script)
      createdScript = script
    }

    setStatus('loading')

    if (timeoutMs && timeoutMs > 0) {
      timeoutId = window.setTimeout(handleError, timeoutMs)
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }

      script.removeEventListener('load', handleReady)
      script.removeEventListener('error', handleError)

      if (removeOnUnmount && createdScript) {
        createdScript.remove()
      }
    }
  }, [id, src, enabled, target, async, defer, removeOnUnmount, reloadOnMount, timeoutMs])

  return status
}
