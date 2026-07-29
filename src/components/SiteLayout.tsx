import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigationType,
} from 'react-router-dom'
import { ButtonLink, Container, Reveal } from './Primitives'

const navigation = [
  { label: 'Campaigns', to: '/campaigns' },
  { label: 'Champions', to: '/champions' },
  { label: 'Victories', to: '/victories' },
  { label: 'The War Room', to: '/war-room' },
]

function Logo() {
  return (
    <Link className="site-logo" to="/" aria-label="Divorce Dungeon home">
      <img src="/assets/brand/logo-divorce-dungeon-horizontal.svg" alt="Divorce Dungeon" />
    </Link>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    restoreFocusRef.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      restoreFocusRef.current?.focus()
    }
  }, [onClose, open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose()
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="mobile-menu-panel"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-top">
              <Logo />
              <button ref={closeRef} type="button" onClick={onClose} aria-label="Close menu">
                <X aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={onClose}>
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </NavLink>
              ))}
              <ButtonLink to="/summon-counsel" onClick={onClose}>
                Summon Counsel
              </ButtonLink>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ block: 'start' })
      })
      return
    }
    if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
      })
    }
  }, [location, navigationType])

  return null
}

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: 0.25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip the dungeon entrance
      </a>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <Container className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ButtonLink to="/summon-counsel" className="header-cta">
            Summon Counsel
          </ButtonLink>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu aria-hidden="true" />
          </button>
        </Container>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ScrollManager />
      <main id="main-content" tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="site-footer">
        <Container>
          <Reveal className="footer-grid">
            <div className="footer-brand">
              <Logo />
              <p>
                Divorce Dungeon is a fictional parody law-firm concept created for entertainment
                and portfolio demonstration. Nothing on this website is legal advice, no
                attorney-client relationship is formed, and no ravens are actually dispatched.
              </p>
            </div>
            <div>
              <h2>The Firm</h2>
              <Link to="/campaigns">Campaigns</Link>
              <Link to="/champions">Champions</Link>
              <Link to="/victories">Victories</Link>
              <Link to="/summon-counsel">Summon Counsel</Link>
            </div>
            <div>
              <h2>The Archives</h2>
              <Link to="/war-room">The War Room</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/">Return to the Keep</Link>
            </div>
          </Reveal>
          <Reveal className="footer-bottom" delay={0.12}>
            <p>© 2026 Divorce Dungeon. All kingdoms separately maintained.</p>
            <p>Built with strategy, parchment, and an unreasonable number of labeled folders.</p>
          </Reveal>
        </Container>
      </footer>
    </>
  )
}
