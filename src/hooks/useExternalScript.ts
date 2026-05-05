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

    const script = existingScript || doc.createElement('script')
    script.id = id
    script.src = src
    script.async = async
    script.defer = defer

    const handleLoad = () => {
      setStatus('ready')
      if (timeoutId) clearTimeout(timeoutId)
    }

    const handleError = () => {
      setStatus('error')
      if (timeoutId) clearTimeout(timeoutId)
    }

    if (!existingScript) {
      script.addEventListener('load', handleLoad)
      script.addEventListener('error', handleError)
      targetParent.appendChild(script)
      createdScript = script
    } else if (existingScript.src === src) {
      // Script already exists and matches, check if it's loaded
      if (existingScript.complete) {
        setStatus('ready')
      } else {
        existingScript.addEventListener('load', handleLoad)
        existingScript.addEventListener('error', handleError)
      }
    }

    if (timeoutMs) {
      timeoutId = window.setTimeout(() => {
        setStatus('error')
      }, timeoutMs)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (removeOnUnmount && createdScript) {
        createdScript.remove()
      }
    }
  }, [id, src, enabled, target, async, defer, removeOnUnmount, reloadOnMount, timeoutMs])

  return status
}
