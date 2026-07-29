import { CheckCircle2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ChampionCard } from '../components/Cards'
import {
  Accordion,
  ButtonLink,
  Doctrine,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '../components/Primitives'
import { campaigns, champions } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

const detailSteps = [
  ['01', 'Inventory the terrain', 'Gather the people, dates, documents, schedules, and priorities that define the campaign.'],
  ['02', 'Set the doctrine', 'Separate what is urgent, what is important, and what is merely making a lot of noise.'],
  ['03', 'Draft the treaty', 'Develop clear proposals, exchange information, and document every workable agreement.'],
  ['04', 'Close the archive', 'Finalize the record, understand implementation, and leave with a usable map.'],
]

export function CampaignDetailPage() {
  const { campaignSlug } = useParams()
  const campaign = campaigns.find((item) => item.slug === campaignSlug)

  usePageMeta({
    title: campaign ? `${campaign.title} | Divorce Dungeon` : 'Unmapped Campaign | Divorce Dungeon',
    description: campaign?.summary ?? 'The requested fictional campaign could not be found.',
  })

  if (!campaign) return <NotFoundPage embedded />

  const champion = champions.find((item) => item.slug === campaign.championSlug)
  const faqs = [
    {
      question: `Is ${campaign.legalLabel.toLowerCase()} always this dramatic?`,
      answer:
        'No. The castle language is branding. The useful work is calm preparation, clear decisions, and accurate documents.',
    },
    {
      question: 'Does this page provide legal advice?',
      answer:
        'No. This is a fictional portfolio website. Real legal questions require a licensed attorney in the relevant jurisdiction.',
    },
    {
      question: 'What should a real client do first?',
      answer:
        'Identify urgent deadlines, preserve important records, write down priorities, and contact a qualified local attorney for actual guidance.',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow={campaign.eyebrow}
        title={campaign.heading}
        description={campaign.summary}
        aside={
          <div>
            <span className="map-coordinate">CAMPAIGN NO. {campaigns.indexOf(campaign) + 1}</span>
            <Doctrine>{campaign.doctrine}</Doctrine>
          </div>
        }
      >
        <ButtonLink to="/summon-counsel">{campaign.cta}</ButtonLink>
      </PageHero>

      <Section className="campaign-overview">
        <div className="detail-lists-grid">
          <Reveal className="detail-list-card">
            <p className="eyebrow">BEST SUITED FOR</p>
            <h2>Recognize the terrain.</h2>
            <ul>
              {campaign.bestFor.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="detail-list-card parchment-card" delay={0.08}>
            <p className="eyebrow">WHAT THE CAMPAIGN MAY INVOLVE</p>
            <h2>Pack the correct scrolls.</h2>
            <ul>
              {campaign.includes.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="detail-process map-grid-bg">
        <SectionHeading
          eyebrow="THE CAMPAIGN MAP"
          title="A clear route through uncertain ground."
          intro="The exact legal path varies by jurisdiction and facts. The strategic rhythm remains useful: understand, prioritize, propose, document."
        />
        <ol className="process-grid">
          {detailSteps.map(([number, title, copy], index) => (
            <Reveal key={number} className="process-step" delay={index * 0.07}>
              <li>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {champion && (
        <Section className="related-champion">
          <div className="related-champion-grid">
            <SectionHeading
              eyebrow="RELATED CHAMPION"
              title={`Meet the counsel mapped to ${campaign.title.toLowerCase()}.`}
              intro="Every campaign benefits from a discipline matched to its actual terrain."
            />
            <ChampionCard champion={champion} />
          </div>
        </Section>
      )}

      <Section className="faq-section">
        <div className="faq-grid">
          <SectionHeading eyebrow="FIELD QUESTIONS" title="Before the campaign begins." />
          <Accordion items={faqs} />
        </div>
      </Section>

      <section className="final-cta">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">
          <div className="final-cta-panel">
            <p className="eyebrow">THE MAP IS OPEN</p>
            <h2>{campaign.cta}.</h2>
            <p>
              Begin with a clear list of priorities and leave the actual swords somewhere else.
            </p>
            <ButtonLink to="/summon-counsel">Request a War Council</ButtonLink>
            <small>
              Fictional parody content only. No legal advice or attorney-client relationship.
            </small>
          </div>
        </div>
      </section>
    </>
  )
}
