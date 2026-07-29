import { Container, Eyebrow, Reveal } from '../components/Primitives'
import { usePageMeta } from '../hooks/usePageMeta'
import type { ReactNode } from 'react'

const privacySections = [
  {
    title: 'Information entered into forms',
    paragraphs: [
      'The consultation form is designed as a front-end demonstration. Unless a developer intentionally connects it to a backend or third-party service, information entered into the form should remain in the browser and should not be transmitted.',
      'Visitors should not enter confidential legal information, financial-account numbers, government identification numbers, medical information, information about abuse or danger, or any other sensitive personal data.',
    ],
  },
  {
    title: 'Analytics',
    paragraphs: [
      'If analytics are added, the implementation should use a privacy-conscious configuration and disclose the provider, information collected, retention period, and opt-out options. Do not imply that analytics are active unless they have actually been installed.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'The baseline template does not require advertising cookies. Any future cookie use must be disclosed accurately.',
    ],
  },
  {
    title: 'Third-party services',
    paragraphs: [
      'Fonts, analytics, hosting, form providers, or embedded media may involve third-party services. The deployed site must identify only the services actually used.',
    ],
  },
  {
    title: 'Data security',
    paragraphs: [
      'A static demonstration site should minimize data collection. If form storage or email delivery is added, use secure transport, access controls, limited retention, spam protection, and an appropriate real privacy policy.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'Because Divorce Dungeon is fictional, the displayed contact information is also fictional. Replace this section with accurate information before adapting the template for any real organization.',
    ],
  },
  {
    title: 'Closing notice',
    paragraphs: [
      'This page is demonstration copy, not legal advice and not a substitute for a policy drafted for the actual project.',
    ],
  },
]

const termsSections = [
  {
    title: 'Fictional nature',
    text: 'Divorce Dungeon is a fictional parody and portfolio project. It is not a law firm, does not employ licensed attorneys, and does not provide legal representation.',
  },
  {
    title: 'No legal advice',
    text: 'Content on this website is creative and informational only. It is not legal advice and should not be relied upon to make legal decisions.',
  },
  {
    title: 'No attorney-client relationship',
    text: 'Viewing the site, using its interactive features, or submitting the demonstration form does not create an attorney-client relationship.',
  },
  {
    title: 'No confidential submissions',
    text: 'Do not submit confidential, privileged, identifying, financial, medical, or safety-related information through the demonstration form.',
  },
  {
    title: 'Fictional outcomes and testimonials',
    text: 'All attorney profiles, testimonials, statistics, addresses, case studies, names, and outcomes are fictional. They do not describe actual people, clients, cases, or results.',
  },
  {
    title: 'Intellectual property',
    text: 'The Divorce Dungeon brand, original copy, fictional characters, visual identity, and custom assets are part of a creative portfolio project unless otherwise noted. Third-party libraries and icon sets remain subject to their own licenses.',
  },
  {
    title: 'Availability',
    text: 'The website may be changed, redesigned, moved, or retired at any time. Castles are difficult to maintain.',
  },
  {
    title: 'External links',
    text: 'External links, if added, should be reviewed and described accurately. Divorce Dungeon is not responsible for the content of unrelated kingdoms.',
  },
  {
    title: 'Limitation',
    text: 'Use of the demonstration website is at the visitor’s own discretion. The project is provided as a creative interface example without warranties of legal, commercial, or operational fitness.',
  },
  {
    title: 'Closing',
    text: 'By exploring the site, you acknowledge that the armor is metaphorical, the firm is fictional, and the paperwork jokes are unusually committed.',
  },
]

function LegalShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
}) {
  return (
    <section className="legal-page">
      <Container>
        <Reveal>
          <header>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            <p className="legal-date">Last updated: July 29, 2026</p>
            <p className="legal-intro">{intro}</p>
          </header>
        </Reveal>
        <div className="legal-content">{children}</div>
      </Container>
    </section>
  )
}

export function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Within the Keep | Divorce Dungeon',
    description:
      'Demonstration privacy information for the fictional Divorce Dungeon portfolio website.',
  })

  return (
    <LegalShell
      eyebrow="ARCHIVE POLICY"
      title="Privacy Within the Keep"
      intro="Divorce Dungeon is a fictional portfolio website. This privacy page explains the intended behavior of the demonstration template and should not be treated as a complete privacy policy for a real business."
    >
      {privacySections.map((section) => (
        <Reveal key={section.title}>
          <section>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </Reveal>
      ))}
    </LegalShell>
  )
}

export function TermsPage() {
  usePageMeta({
    title: 'Terms of Entry | Divorce Dungeon',
    description: 'Terms for the fictional Divorce Dungeon parody and portfolio website.',
  })

  return (
    <LegalShell
      eyebrow="GATEHOUSE NOTICE"
      title="Terms of Entry"
      intro="These terms describe the fictional and demonstrative nature of Divorce Dungeon. No legal service is offered beyond this gate."
    >
      {termsSections.map((section) => (
        <Reveal key={section.title}>
          <section>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        </Reveal>
      ))}
    </LegalShell>
  )
}
