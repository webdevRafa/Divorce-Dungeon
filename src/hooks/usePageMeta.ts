import { useEffect } from 'react'

type PageMeta = {
  title: string
  description: string
}

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(property ? 'property' : 'name', name)
    document.head.appendChild(element)
  }
  element.content = content
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', window.location.href, true)
    setMeta(
      'og:image',
      new URL('/assets/social/og-divorce-dungeon.webp', window.location.origin).href,
      true,
    )
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta(
      'twitter:image',
      new URL('/assets/social/og-divorce-dungeon.webp', window.location.origin).href,
    )

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = window.location.href
  }, [description, title])
}
