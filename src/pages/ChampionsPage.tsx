import { Feather, FileCheck2, HeartHandshake, MessageSquareText } from 'lucide-react'
import { ChampionCard } from '../components/Cards'
import {
  ButtonLink,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '../components/Primitives'
import { champions } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  {
    icon: Feather,
    title: 'Clarity before conflict',
    copy: 'Understand the terrain before choosing a weapon, metaphorical or otherwise.',
  },
  {
    icon: FileCheck2,
    title: 'Preparation before performance',
    copy: 'A useful filing is better than a dramatic monologue.',
  },
  {
    icon: HeartHandshake,
    title: 'Resolution before revenge',
    copy: 'The strongest outcome is one that works after everyone leaves the conference room.',
  },
  {
    icon: MessageSquareText,
    title: 'Humor without cruelty',
    copy:
      'The process is hard enough. The joke should target the absurdity, not the person living through it.',
  },
]

export function ChampionsPage() {
  usePageMeta({
    title: 'Champions | Divorce Dungeon',
    description:
      'Meet the fictional champions of Divorce Dungeon: strategic family-law characters specializing in complex assets, negotiated settlements, mediation, and parenting plans.',
  })

  return (
    <>
      <PageHero
        eyebrow="THE ORDER OF COUNSEL"
        title="Meet your champions."
        description="Divorce Dungeon’s fictional attorneys combine strategic discipline, calm communication, and the ability to locate the correct attachment before replying all."
        aside={
          <div className="hero-crest-panel">
            <img
              src="/assets/brand/mark-divorce-dungeon-shield.svg"
              alt=""
              width="180"
              height="210"
            />
            <span>CLARITY • STRATEGY • SEPARATE KINGDOMS</span>
          </div>
        }
      />

      <Section className="champions-index">
        <SectionHeading
          eyebrow="DIFFERENT DISCIPLINES"
          title="One shared doctrine."
          intro="The work begins with understanding what matters, separating urgency from noise, and choosing a path that can still be explained without a conspiracy wall."
        />
        <div className="champion-grid">
          {champions.map((champion, index) => (
            <Reveal key={champion.slug} delay={index * 0.08}>
              <ChampionCard champion={champion} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="values-section map-grid-bg">
        <SectionHeading eyebrow="THE DUNGEON DOCTRINE" title="How counsel enters the room." />
        <div className="values-grid">
          {values.map((value, index) => (
            <Reveal key={value.title} className="value-card" delay={index * 0.07}>
              <value.icon aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="compact-cta">
        <Reveal className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-7 px-5 sm:px-7 md:flex-row md:items-center lg:px-10">
          <div>
            <p className="eyebrow">THE COUNCIL TABLE IS SET</p>
            <h2>Choose the champion who fits the campaign.</h2>
          </div>
          <ButtonLink to="/summon-counsel">Summon Counsel</ButtonLink>
        </Reveal>
      </section>
    </>
  )
}
