import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CampaignCard } from '../components/Cards'
import {
  ButtonLink,
  Container,
  Doctrine,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '../components/Primitives'
import { campaigns } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const filters = ['All Campaigns', 'Peaceful Paths', 'Complex Realms', 'Future Planning'] as const

export function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All Campaigns')
  const filtered =
    activeFilter === 'All Campaigns'
      ? campaigns
      : campaigns.filter((campaign) => campaign.category === activeFilter)

  usePageMeta({
    title: 'Campaigns | Divorce Dungeon',
    description:
      'Explore Divorce Dungeon’s fictional family-law campaigns, from uncontested divorce and mediation to parenting plans and divided treasure.',
  })

  return (
    <>
      <PageHero
        eyebrow="PRACTICE AREAS, BUT WITH BETTER CAPES"
        title="Choose your campaign."
        description="Every ending has its own terrain. Some require a short path and two signatures. Others require inventories, calendars, formal discovery, and an archivist who has stopped asking why there are 312 screenshots."
        image="/assets/illustrations/archive-strategy-table.webp"
        imageAlt="An archive strategy table with a parchment map, binders, compass, and evidence objects"
      >
        <p className="hero-side-note">
          Select the path that most closely resembles your current level of paperwork.
        </p>
      </PageHero>

      <Section className="campaign-index-section map-grid-bg">
        <div className="filter-bar" aria-label="Filter campaigns">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div layout className="campaign-grid" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {filtered.map((campaign) => (
              <motion.div
                layout
                key={campaign.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <CampaignCard campaign={campaign} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <Section className="doctrine-section">
        <div className="doctrine-panel">
          <div>
            <p className="eyebrow">THE DUNGEON DOCTRINE</p>
            <h2>Not every ending requires a siege.</h2>
          </div>
          <div>
            <Doctrine>
              Divorce Dungeon treats litigation as a tool, not a personality. The preferred
              campaign is the one that protects important interests, creates workable terms, and
              uses exactly as much conflict as the situation requires—no more.
            </Doctrine>
            <ButtonLink to="/war-room" variant="text">
              Study the Campaign Map
            </ButtonLink>
          </div>
        </div>
      </Section>

      <section className="compact-cta">
        <Container>
          <Reveal className="compact-cta-inner">
            <SectionHeading
              eyebrow="WRONG CORRIDOR?"
              title="Unsure which path you are on?"
              intro="That is normal. Most people arrive with a box of documents, three urgent questions, and no idea which form has summoned the current problem."
            />
            <ButtonLink to="/summon-counsel">Summon Counsel</ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
