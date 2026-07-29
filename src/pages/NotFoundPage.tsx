import {
  AnimatedNumber,
  ButtonLink,
  Container,
  Eyebrow,
  Reveal,
} from '../components/Primitives'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage({ embedded = false }: { embedded?: boolean }) {
  usePageMeta({
    title: 'Unmapped Corridor | Divorce Dungeon',
    description: 'The requested corridor could not be found in the Divorce Dungeon archive.',
  })

  return (
    <section className={embedded ? 'not-found embedded-not-found' : 'not-found'}>
      <Container>
        <div className="not-found-grid">
          <Reveal className="not-found-copy">
            <Eyebrow>
              ERROR <AnimatedNumber end={404} /> • UNMAPPED CORRIDOR
            </Eyebrow>
            <h1>This passage leads nowhere.</h1>
            <p>The archivist insists this corridor existed yesterday. The map disagrees.</p>
            <div className="hero-actions">
              <ButtonLink to="/">Return to the Keep</ButtonLink>
              <ButtonLink to="/campaigns" variant="secondary">
                View the Campaigns
              </ButtonLink>
            </div>
            <small>Please do not feed the gargoyle. It only encourages the routing issue.</small>
          </Reveal>
          <Reveal className="not-found-art" delay={0.08}>
            <img
              src="/assets/illustrations/gargoyle-archivist-map.webp"
              alt="A confused stone gargoyle archivist holding an upside-down map"
              width="900"
              height="1350"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
