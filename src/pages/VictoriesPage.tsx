import { Archive, Coffee, FileSearch, ScrollText, Stamp } from 'lucide-react'
import {
  ButtonLink,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '../components/Primitives'
import { victories } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export function VictoriesPage() {
  usePageMeta({
    title: 'Victories | Divorce Dungeon',
    description:
      'Read fictional Divorce Dungeon chronicles involving espresso machines, houseplants, streaming profiles, patio furniture, and other divided treasures.',
  })

  return (
    <>
      <PageHero
        eyebrow="THE ARCHIVE OF RESOLVED NONSENSE"
        title="Every campaign leaves a story."
        description="The following chronicles are entirely fictional. They exist to demonstrate storytelling, editorial layouts, UI components, and the universal truth that people become strangely attached to small appliances during major life changes."
        image="/assets/illustrations/archive-strategy-table.webp"
        imageAlt="An open strategy archive with map, ledger, espresso cup, and catalogued evidence"
      />

      <Section className="chronicles-section">
        <div className="chronicles-list">
          {victories.map((victory, index) => (
            <Reveal
              key={victory.caseNumber}
              className={index % 2 ? 'chronicle chronicle-reverse' : 'chronicle'}
            >
              <div className="chronicle-index" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {index % 3 === 0 ? <Coffee /> : index % 3 === 1 ? <Archive /> : <Stamp />}
              </div>
              <article>
                <div className="chronicle-meta">
                  <span>{victory.category}</span>
                  <span>{victory.caseNumber}</span>
                </div>
                <h2>{victory.title}</h2>
                <blockquote>{victory.opening}</blockquote>
                <div className="chronicle-columns">
                  <div>
                    <h3>
                      <FileSearch aria-hidden="true" /> The dispute
                    </h3>
                    <p>{victory.dispute}</p>
                  </div>
                  <div>
                    <h3>
                      <ScrollText aria-hidden="true" /> The strategy
                    </h3>
                    <p>{victory.strategy}</p>
                  </div>
                </div>
                <div className="treaty-box">
                  <p className="card-kicker">THE TREATY</p>
                  <p>{victory.treaty}</p>
                </div>
                <footer>
                  <p>
                    <strong>Archive note:</strong> {victory.note}
                  </p>
                  <span className="outcome-badge">{victory.badge}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="case-disclaimer">
          All chronicles, names, disputes, and outcomes are fictional. They do not describe actual
          clients, cases, legal advice, or representative results.
        </p>
      </Section>

      <section className="compact-cta">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-7 px-5 sm:px-7 md:flex-row md:items-center lg:px-10">
          <SectionHeading
            eyebrow="NEXT CHRONICLE"
            title="Your campaign will probably be less botanical."
            intro="Probably."
          />
          <ButtonLink to="/summon-counsel">Request a War Council</ButtonLink>
        </div>
      </section>
    </>
  )
}
