import {
  BookOpenText,
  CalendarCheck2,
  Compass,
  FileStack,
  KeyRound,
  MessageSquareText,
  ScrollText,
} from 'lucide-react'
import {
  Accordion,
  AnimatedNumber,
  ButtonLink,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '../components/Primitives'
import { resources, warRoomFaqs } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const resourceIcons = [
  Compass,
  CalendarCheck2,
  FileStack,
  BookOpenText,
  MessageSquareText,
  KeyRound,
]

export function WarRoomPage() {
  usePageMeta({
    title: 'The War Room | Divorce Dungeon',
    description:
      'Enter Divorce Dungeon’s fictional resource archive for campaign maps, frequently asked questions, checklists, and satirical divorce survival guides.',
  })

  return (
    <>
      <PageHero
        eyebrow="RESOURCES FROM THE ARCHIVE"
        title="Enter the War Room."
        description="Guides, checklists, diagrams, and answers for people attempting to understand a major life transition without reading sixty browser tabs at once."
        image="/assets/illustrations/archive-strategy-table.webp"
        imageAlt="A dark archive war room with a case map, binders, ledger, and brass desk lamp"
      />

      <Section className="featured-resource-section">
        <Reveal className="featured-resource">
          <div className="featured-resource-mark">
            <ScrollText aria-hidden="true" />
            <span>
              FIELD GUIDE <AnimatedNumber end={1} pad={2} />
            </span>
          </div>
          <div>
            <p className="eyebrow">FIELD GUIDE</p>
            <h2>How to Survive Discovery Without Becoming the Villain in Your Own Timeline</h2>
            <p>
              A practical fictional guide to collecting records, naming files, preserving context,
              and resisting the urge to submit a 400-page screenshot anthology without an index.
            </p>
            <ButtonLink to="/war-room#frequently-asked" variant="secondary">
              Open the Guide
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Section className="resources-section map-grid-bg">
        <SectionHeading
          eyebrow="DRAWERS A–F"
          title="Maps for the administrative wilds."
          intro="Fictional field guides for real interface exploration. No jurisdiction-specific advice is hiding in the footnotes."
        />
        <div className="resource-grid">
          {resources.map((resource, index) => {
            const Icon = resourceIcons[index]
            return (
              <Reveal key={resource.title} className="resource-card" delay={(index % 3) * 0.06}>
                <Icon aria-hidden="true" />
                <p className="card-kicker">{resource.category}</p>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href="#frequently-asked" className="card-link">
                  {resource.cta} <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section className="faq-section" id="frequently-asked">
        <div className="faq-grid">
          <div>
            <SectionHeading
              eyebrow="THE FULL ARCHIVE"
              title="Frequently asked, carefully answered."
              intro="The serious answer appears directly beneath the ridiculous heading."
            />
            <ButtonLink to="/summon-counsel" variant="secondary">
              Summon Counsel
            </ButtonLink>
          </div>
          <Accordion items={warRoomFaqs} />
        </div>
      </Section>

      <section className="compact-cta">
        <Reveal className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-7 px-5 sm:px-7 md:flex-row md:items-center lg:px-10">
          <SectionHeading
            eyebrow="ARCHIVIST ASSISTANCE"
            title="Still lost in the archive?"
            intro="That is why the fictional champions carry maps."
          />
          <ButtonLink to="/summon-counsel">Summon Counsel</ButtonLink>
        </Reveal>
      </section>
    </>
  )
}
