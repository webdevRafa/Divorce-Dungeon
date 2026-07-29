import { Check, Feather, FolderOpen, Map, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ChampionCard, CampaignCard } from '../components/Cards'
import {
  Accordion,
  ButtonLink,
  Container,
  Doctrine,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from '../components/Primitives'
import {
  campaigns,
  champions,
  homepageFaqs,
  testimonials,
  victories,
} from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const processSteps = [
  {
    number: '01',
    title: 'Sound the Horn',
    label: 'Initial consultation',
    copy:
      'Request a private war council. Tell us what happened, what matters most, and whether the espresso machine has already been removed from the premises.',
  },
  {
    number: '02',
    title: 'Map the Realm',
    label: 'Case assessment',
    copy:
      'Identify the people, property, schedules, deadlines, documents, debts, and suspiciously expensive patio furniture involved.',
  },
  {
    number: '03',
    title: 'Negotiate the Treaty',
    label: 'Strategy and negotiation',
    copy:
      'Build proposals, exchange information, resolve what can be resolved, and prepare carefully for what cannot.',
  },
  {
    number: '04',
    title: 'Reclaim Your Kingdom',
    label: 'Resolution',
    copy:
      'Finalize the documents, understand the next steps, change the streaming passwords, and begin the next chapter with a clear map.',
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'No revenge theater',
    copy:
      'We focus on useful outcomes, not dramatic speeches that feel excellent in the carriage ride home and terrible in the official transcript.',
  },
  {
    icon: Map,
    title: 'Plain-language strategy',
    copy:
      'Legal processes are translated into understandable decisions, deadlines, and next steps—without making you decode an ancient scroll.',
  },
  {
    icon: FolderOpen,
    title: 'Organized communication',
    copy:
      'Questions, documents, priorities, and updates remain structured so the campaign does not disappear into a group chat.',
  },
  {
    icon: Feather,
    title: 'Human-first planning',
    copy:
      'The goal is not to “win the divorce.” The goal is to leave the process with stable terms, informed choices, and most of your dignity intact.',
  },
]

export function HomePage() {
  usePageMeta({
    title: 'Divorce Dungeon | Family Law for Unhappily Ever After',
    description:
      'A satirical medieval family-law website where divorce becomes a campaign, mediation becomes a peace council, and shared property becomes disputed treasure.',
  })

  return (
    <>
      <section className="home-hero">
        <picture className="home-hero-image" aria-hidden="true">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/illustrations/hero-counsel-chamber-mobile.webp"
          />
          <img
            src="/assets/illustrations/hero-counsel-chamber.webp"
            alt=""
            width="1728"
            height="973"
            fetchPriority="high"
          />
        </picture>
        <div className="home-hero-scrim" />
        <Container className="home-hero-inner">
          <Reveal className="home-hero-copy">
            <Eyebrow>FAMILY LAW FOR UNHAPPILY EVER AFTER</Eyebrow>
            <h1>
              Your marriage had a beginning. <em>We specialize in the end.</em>
            </h1>
            <p className="home-hero-lede">
              Divorce is already dramatic. Your legal strategy does not have to be. Divorce
              Dungeon brings calm planning, clear communication, and formidable paperwork to the
              campaign ahead.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/summon-counsel">Summon Counsel</ButtonLink>
              <ButtonLink to="/campaigns" variant="secondary">
                Explore the Campaigns
              </ButtonLink>
            </div>
            <div className="assurance-line">
              <Check aria-hidden="true" />
              <span>No dragons. No judgment. Some paperwork.</span>
            </div>
            <div className="hero-badges" aria-label="Available campaign areas">
              {['Divorce Strategy', 'Parenting Plans', 'Asset Division', 'Mediation'].map(
                (badge) => (
                  <span key={badge}>{badge}</span>
                ),
              )}
            </div>
          </Reveal>
          <div className="hero-note">
            <span aria-hidden="true">✦</span> The armor is metaphorical. The preparation is not.
          </div>
        </Container>
      </section>

      <Section className="stats-section">
        <SectionHeading
          eyebrow="THE ADMINISTRATIVE RECORD"
          title={
            <>
              Measured in outcomes. <em>And labeled binders.</em>
            </>
          }
          intro="Every campaign is different. Every spreadsheet is somehow longer than expected."
        />
        <div className="stats-grid">
          {[
            ['1,284', 'Metaphorical drawbridges lowered'],
            ['0', 'Trial-by-combat requests approved by counsel'],
            ['47', 'Houseplants assigned to sunlight-capable homes'],
            ['100%', 'Of exes referred to by their legal names in court'],
          ].map(([value, label], index) => (
            <Reveal key={label} className="stat-card" delay={index * 0.06}>
              <strong>{value}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
        <p className="fine-print">
          Entirely fictional statistics. Surprisingly realistic administrative energy.
        </p>
      </Section>

      <Section className="campaign-section map-grid-bg">
        <SectionHeading
          eyebrow="CHOOSE YOUR CAMPAIGN"
          title="When “till death do us part” feels overly ambitious."
          intro="Some endings are peaceful. Others arrive with screenshots, separate calendars, and a deeply contested espresso machine. Choose the campaign that most closely resembles your current kingdom."
        />
        <div className="campaign-grid">
          {campaigns.map((campaign, index) => (
            <Reveal key={campaign.slug} delay={(index % 3) * 0.07}>
              <CampaignCard campaign={campaign} />
            </Reveal>
          ))}
        </div>
        <div className="section-action">
          <ButtonLink to="/campaigns" variant="secondary">
            View Every Campaign
          </ButtonLink>
        </div>
      </Section>

      <Section className="process-section">
        <div className="split-heading">
          <SectionHeading
            eyebrow="THE CAMPAIGN MAP"
            title="Four steps from “it is complicated” to “it is documented.”"
            intro="The path through divorce becomes less intimidating when someone labels the map."
          />
          <ButtonLink to="/war-room" variant="text">
            See How the Campaign Works
          </ButtonLink>
        </div>
        <ol className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} className="process-step" delay={index * 0.08}>
              <li>
                <span className="process-number">{step.number}</span>
                <p className="card-kicker">{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="why-section">
        <div className="why-grid">
          <div>
            <SectionHeading
              eyebrow="WHY ENTER THE DUNGEON"
              title={
                <>
                  Serious strategy. <em>Controlled theatrics.</em>
                </>
              }
              intro="Divorce Dungeon is built around a simple belief: people facing major life changes deserve clarity, preparation, and fewer sentences beginning with “apparently my cousin said.”"
            />
            <Doctrine>Put down the trebuchet. Pick up a plan.</Doctrine>
            <p className="doctrine-attribution">The Divorce Dungeon Doctrine</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} className="benefit-card" delay={index * 0.06}>
                <benefit.icon aria-hidden="true" />
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="champions-section">
        <div className="split-heading">
          <SectionHeading
            eyebrow="MEET YOUR CHAMPIONS"
            title="Counsel for complicated endings."
            intro="Each champion brings a different strategic discipline to the table. All three bring pens that work on the first try."
          />
          <ButtonLink to="/champions" variant="text">
            View All Champions
          </ButtonLink>
        </div>
        <div className="champion-grid">
          {champions.map((champion, index) => (
            <Reveal key={champion.slug} delay={index * 0.08}>
              <ChampionCard champion={champion} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="victory-preview-section">
        <SectionHeading
          eyebrow="TALES FROM THE ARCHIVES"
          title="Campaigns resolved with fewer catapults than expected."
          intro="These entirely fictional case studies illustrate the tone and design of the Divorce Dungeon universe. They are not legal outcomes or promises."
        />
        <div className="victory-preview-grid">
          {victories.slice(0, 3).map((victory, index) => (
            <Reveal key={victory.caseNumber} className="victory-preview-card" delay={index * 0.07}>
              <p className="card-kicker">{victory.category}</p>
              <h3>{victory.title}</h3>
              <p>{victory.opening}</p>
              <p className="victory-outcome">{victory.treaty}</p>
              <span className="outcome-badge">{victory.badge}</span>
              <Link to="/victories" className="card-link">
                Read the Chronicle <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="section-action">
          <ButtonLink to="/victories">Open the Full Archive</ButtonLink>
        </div>
      </Section>

      <Section className="testimonial-section">
        <SectionHeading
          eyebrow="WORDS FROM FORMER ALLIES"
          title="Fictional praise from fictional clients with very real grievances."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} className="testimonial-card" delay={index * 0.06}>
              <div className="testimonial-mark" aria-hidden="true">
                “
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.campaign}</span>
              </footer>
            </Reveal>
          ))}
        </div>
        <p className="fine-print">
          Fictional testimonials written for a parody website. No client relationship or outcome
          is represented.
        </p>
      </Section>

      <Section className="faq-section">
        <div className="faq-grid">
          <div>
            <SectionHeading
              eyebrow="QUESTIONS FROM THE COURTYARD"
              title="Before you send a raven."
            />
            <ButtonLink to="/war-room" variant="secondary">
              Enter the War Room
            </ButtonLink>
          </div>
          <Accordion items={homepageFaqs} />
        </div>
      </Section>

      <section className="final-cta">
        <Container>
          <div className="final-cta-panel">
            <div className="seal-motif" aria-hidden="true">
              DD
            </div>
            <Eyebrow>THE DRAWBRIDGE IS DOWN</Eyebrow>
            <h2>
              Your next chapter does not need a dungeon. <em>It needs an exit strategy.</em>
            </h2>
            <p>
              Begin with a calm conversation, a clear list of priorities, and absolutely no
              attempt to communicate exclusively through reaction GIFs.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/summon-counsel">Request a War Council</ButtonLink>
              <ButtonLink to="/campaigns" variant="secondary">
                Review the Campaigns
              </ButtonLink>
            </div>
            <small>
              This is a fictional portfolio experience. Please consult a licensed attorney for
              actual legal advice.
            </small>
          </div>
        </Container>
      </section>
    </>
  )
}
