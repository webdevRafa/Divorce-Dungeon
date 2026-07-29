import { motion, useReducedMotion } from 'framer-motion'
import {
  Crown,
  Gem,
  Scale,
  ScrollText,
  TableProperties,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Campaign, Champion } from '../data/siteData'

const campaignIcons: Record<Campaign['icon'], LucideIcon> = {
  scroll: ScrollText,
  scale: Scale,
  users: Users,
  gem: Gem,
  table: TableProperties,
  crown: Crown,
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const Icon = campaignIcons[campaign.icon]
  return (
    <article className="campaign-card">
      <div className="icon-frame">
        <Icon aria-hidden="true" />
      </div>
      <p className="card-kicker">{campaign.legalLabel}</p>
      <h3>{campaign.title}</h3>
      <p>{campaign.cardDescription}</p>
      <ul>
        {campaign.previewBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Link to={`/campaigns/${campaign.slug}`} className="card-link">
        {campaign.cta}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export function ChampionCard({ champion }: { champion: Champion }) {
  const reduceMotion = useReducedMotion()

  return (
    <article className="champion-card">
      <Link to={`/champions/${champion.slug}`} aria-label={`Meet ${champion.name}`}>
        <div className="champion-portrait">
          <motion.div
            className="champion-portrait-inner"
            initial={reduceMotion ? false : { opacity: 0.35, scale: 1.065 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={champion.portrait}
              alt={`Portrait of ${champion.name}, ${champion.title}`}
              width="576"
              height="924"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="champion-card-copy">
          <p className="card-kicker">{champion.title}</p>
          <h3>{champion.name}</h3>
          <p className="champion-specialty">{champion.specialty}</p>
          <p className="champion-short-bio">{champion.shortBio}</p>
          <blockquote>“{champion.quote}”</blockquote>
          <span className="card-link">
            Meet {champion.name.split(' ')[0]}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  )
}
