import { CheckCircle2, ScrollText } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ButtonLink, Doctrine, Eyebrow, Reveal, Section } from '../components/Primitives'
import { champions } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

export function ChampionDetailPage() {
  const { championSlug } = useParams()
  const champion = champions.find((item) => item.slug === championSlug)

  usePageMeta({
    title: champion ? `${champion.name} | Divorce Dungeon` : 'Unknown Champion | Divorce Dungeon',
    description: champion?.shortBio ?? 'The requested fictional champion could not be found.',
  })

  if (!champion) return <NotFoundPage embedded />

  return (
    <>
      <section className="champion-detail-hero">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-7 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <Reveal className="champion-detail-portrait">
            <img
              src={champion.portrait}
              alt={`Portrait of ${champion.name}, ${champion.title}`}
              width="576"
              height="924"
            />
            <span>{champion.title}</span>
          </Reveal>
          <Reveal className="champion-detail-copy" delay={0.08}>
            <Eyebrow>THE ORDER OF COUNSEL</Eyebrow>
            <h1>{champion.name}</h1>
            <p className="champion-detail-title">{champion.title}</p>
            <p className="champion-specialty">{champion.specialty}</p>
            <Doctrine>{champion.quote}</Doctrine>
            <ButtonLink to="/summon-counsel">
              Request {champion.name.split(' ')[0]} for the Campaign
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <Section className="champion-biography">
        <div className="champion-biography-grid">
          <div>
            <Eyebrow>THE RECORD</Eyebrow>
            <h2>A disciplined approach to complicated endings.</h2>
          </div>
          <div className="long-copy">
            {champion.fullBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="champion-record map-grid-bg">
        <div className="champion-record-grid">
          <Reveal className="detail-list-card">
            <Eyebrow>KNOWN FOR</Eyebrow>
            <ul>
              {champion.knownFor.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="artifact-card" delay={0.08}>
            <ScrollText aria-hidden="true" />
            <Eyebrow>PERSONAL ARTIFACT</Eyebrow>
            <h2>{champion.artifactName}</h2>
            <p>{champion.artifactDescription}</p>
          </Reveal>
          <Reveal className="favorite-doctrine" delay={0.14}>
            <Eyebrow>FAVORITE DOCTRINE</Eyebrow>
            <Doctrine>{champion.doctrine}</Doctrine>
          </Reveal>
        </div>
      </Section>

      <section className="final-cta">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">
          <div className="final-cta-panel">
            <Eyebrow>READY THE COUNCIL TABLE</Eyebrow>
            <h2>Bring the campaign into focus.</h2>
            <p>Start with the facts that matter. The labeled folders can come next.</p>
            <ButtonLink to="/summon-counsel">
              Request {champion.name.split(' ')[0]} for the Campaign
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
