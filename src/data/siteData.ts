export type Campaign = {
  slug: string
  title: string
  legalLabel: string
  eyebrow: string
  heading: string
  cardDescription: string
  summary: string
  previewBullets: string[]
  bestFor: string[]
  includes: string[]
  doctrine: string
  cta: string
  icon: 'scroll' | 'scale' | 'users' | 'gem' | 'table' | 'crown'
  category: 'Peaceful Paths' | 'Complex Realms' | 'Future Planning'
  championSlug: string
}

export const campaigns: Campaign[] = [
  {
    slug: 'uncontested-divorce',
    title: 'The Swift Surrender',
    legalLabel: 'Uncontested Divorce',
    eyebrow: 'THE SWIFT SURRENDER',
    heading: 'End the alliance without writing a trilogy.',
    cardDescription:
      'For couples who agree the marriage is over and would prefer not to turn the paperwork into a trilogy.',
    summary:
      'An uncontested divorce may be appropriate when both parties agree on the major terms and would prefer to spend less time arguing about who gets the decorative ladder nobody has used since 2021.',
    previewBullets: ['Agreed terms', 'Streamlined filings', 'Clear final documents'],
    bestFor: [
      'Both parties agree the marriage should end',
      'Major financial terms are understood',
      'Parenting terms are agreed or nearly agreed',
      'Required information can be exchanged cooperatively',
      'The priority is clarity and efficiency',
    ],
    includes: [
      'Organizing agreed terms',
      'Preparing filing information',
      'Reviewing settlement language',
      'Confirming signatures and deadlines',
      'Finalizing a clear record of the agreement',
    ],
    doctrine:
      'Agreement is not weakness. It is often what happens when two adults decide they would rather keep their weekends.',
    cta: 'Plan the Surrender',
    icon: 'scroll',
    category: 'Peaceful Paths',
    championSlug: 'bennett-quill',
  },
  {
    slug: 'contested-divorce',
    title: 'Trial by Paperwork',
    legalLabel: 'Contested Divorce',
    eyebrow: 'TRIAL BY PAPERWORK',
    heading: 'For when the treaty draft returns covered in comments.',
    cardDescription:
      'For campaigns involving disagreement, discovery, formal negotiation, and at least one folder called “Important Screenshots.”',
    summary:
      'A contested divorce may involve disagreement over property, finances, parenting terms, support, or facts that have somehow developed separate versions of themselves.',
    previewBullets: [
      'Strategic case planning',
      'Discovery organization',
      'Negotiation and court preparation',
    ],
    bestFor: [
      'Major terms remain disputed',
      'Financial information is incomplete',
      'Negotiation has stalled',
      'Court deadlines or temporary orders are involved',
      'The campaign requires formal preparation',
    ],
    includes: [
      'Issue prioritization',
      'Document and evidence organization',
      'Discovery planning',
      'Settlement proposals',
      'Hearing or trial preparation',
      'A folder naming convention everyone can survive',
    ],
    doctrine:
      'Preparation is not aggression. It is the art of arriving with the document everyone else is still searching for.',
    cta: 'Enter the Campaign',
    icon: 'scale',
    category: 'Complex Realms',
    championSlug: 'morgana-blackwell',
  },
  {
    slug: 'parenting-plans',
    title: 'The Heir Accord',
    legalLabel: 'Parenting Plans',
    eyebrow: 'THE HEIR ACCORD',
    heading: 'Build a schedule that works outside the parchment.',
    cardDescription:
      'Child-focused schedules, decision-making terms, and practical agreements designed to keep young heirs out of the castle politics.',
    summary:
      'Parenting plans should help children move between households with stability, predictability, and as little exposure as possible to adult castle politics.',
    previewBullets: [
      'Parenting schedules',
      'Decision-making plans',
      'Child-focused communication',
    ],
    bestFor: [
      'Parents creating a new shared schedule',
      'Existing schedules that no longer work',
      'Holiday and school-break planning',
      'Decision-making responsibilities',
      'Communication expectations',
    ],
    includes: [
      'Regular parenting schedules',
      'Holidays and vacations',
      'Transportation plans',
      'School and activity decisions',
      'Medical decision procedures',
      'Communication boundaries',
      'A realistic approach to Tuesdays',
    ],
    doctrine:
      'The strongest parenting plan is not the most dramatic. It is the one people can actually follow when someone is late, sick, traveling, or holding a clarinet recital.',
    cta: 'Draft the Accord',
    icon: 'users',
    category: 'Future Planning',
    championSlug: 'beatrice-ashford',
  },
  {
    slug: 'asset-division',
    title: 'Divide the Hoard',
    legalLabel: 'Asset Division',
    eyebrow: 'DIVIDE THE HOARD',
    heading: 'Map the treasure before someone claims the toaster is ancestral.',
    cardDescription:
      'Houses, accounts, furniture, collections, pets, passwords, and the air fryer everyone suddenly claims to have purchased.',
    summary:
      'Asset division begins with understanding what exists, what is owed, what is separate, what is shared, and why both parties suddenly care deeply about the patio heater.',
    previewBullets: ['Property inventories', 'Debt allocation', 'Settlement strategy'],
    bestFor: [
      'Homes and real estate',
      'Bank and investment accounts',
      'Retirement interests',
      'Business interests',
      'Vehicles',
      'Personal property',
      'Shared debts',
      'Collections of suspicious emotional importance',
    ],
    includes: [
      'Property inventories',
      'Ownership records',
      'Account statements',
      'Valuation questions',
      'Debt allocation',
      'Settlement options',
      'Transfer deadlines',
    ],
    doctrine: 'You cannot divide what nobody has listed. Begin with the map.',
    cta: 'Map the Treasure',
    icon: 'gem',
    category: 'Complex Realms',
    championSlug: 'morgana-blackwell',
  },
  {
    slug: 'mediation',
    title: 'The Peace Table',
    legalLabel: 'Mediation',
    eyebrow: 'THE PEACE TABLE',
    heading: 'Resolve the dispute without launching every catapult.',
    cardDescription:
      'A structured place to resolve disputes without launching every available catapult.',
    summary:
      'Mediation provides a structured environment for discussing unresolved issues, exploring tradeoffs, and writing down the terms before everyone remembers the conversation differently.',
    previewBullets: [
      'Facilitated negotiation',
      'Issue-by-issue planning',
      'Written settlement terms',
    ],
    bestFor: [
      'Parties willing to negotiate',
      'Multiple issues requiring tradeoffs',
      'Privacy-conscious resolutions',
      'Parenting and scheduling disputes',
      'People who would like to preserve some control over the result',
    ],
    includes: [
      'Identifying disputed issues',
      'Exchanging needed information',
      'Preparing proposals',
      'Facilitated discussion',
      'Drafting settlement terms',
      'Confirming implementation steps',
    ],
    doctrine:
      'Compromise does not mean cutting every chair in half. It means deciding which chair matters and why.',
    cta: 'Take a Seat',
    icon: 'table',
    category: 'Peaceful Paths',
    championSlug: 'beatrice-ashford',
  },
  {
    slug: 'prenuptial-agreements',
    title: 'Royal Decrees',
    legalLabel: 'Prenups and Postnups',
    eyebrow: 'ROYAL DECREES',
    heading: 'Discuss the ending while everyone still likes the beginning.',
    cardDescription:
      'Clear expectations written while everyone still likes each other enough to share a dessert.',
    summary:
      'Prenuptial and postnuptial agreements create financial expectations before a crisis, when the conversation can still include coffee, patience, and complete sentences.',
    previewBullets: [
      'Property expectations',
      'Financial boundaries',
      'Future-focused planning',
    ],
    bestFor: [
      'Business owners',
      'Prior family obligations',
      'Significant separate property',
      'Inherited assets',
      'Debt concerns',
      'Couples who value clarity',
      'Anyone who has watched a shared password become a constitutional issue',
    ],
    includes: [
      'Financial disclosure',
      'Separate-property expectations',
      'Shared-property expectations',
      'Debt allocation',
      'Support provisions',
      'Independent review',
      'Signing procedures',
    ],
    doctrine: 'Planning for risk is not planning for failure. Castles have fire exits.',
    cta: 'Prepare the Decree',
    icon: 'crown',
    category: 'Future Planning',
    championSlug: 'bennett-quill',
  },
]

export type Champion = {
  slug: string
  name: string
  title: string
  specialty: string
  quote: string
  shortBio: string
  fullBio: string[]
  knownFor: string[]
  artifactName: string
  artifactDescription: string
  doctrine: string
  portrait: string
}

export const champions: Champion[] = [
  {
    slug: 'morgana-blackwell',
    name: 'Morgana Blackwell, Esq.',
    title: 'The Quiet Blade',
    specialty: 'High-conflict strategy • Complex assets • Court preparation',
    quote: 'Calm is not surrender. Calm is leverage with good posture.',
    shortBio:
      'Morgana is known for entering chaotic cases, identifying the three facts that actually matter, and placing every other fact into a color-coded appendix.',
    fullBio: [
      'Morgana Blackwell built her fictional reputation by entering cases with too many urgent messages, too few organized records, and at least one spreadsheet titled “FINAL ACTUAL FINAL 3.”',
      'Her approach is measured, analytical, and deeply suspicious of any sentence beginning with “I did not think I needed to save that.”',
      'Morgana specializes in identifying the facts that matter, separating them from the facts that are merely loud, and building a campaign around priorities that can survive both negotiation and scrutiny.',
    ],
    knownFor: [
      'Complex financial inventories',
      'High-conflict communication strategy',
      'Organized discovery',
      'Court-ready timelines',
      'Asking, “Do we have that in writing?”',
    ],
    artifactName: 'The Black Ledger',
    artifactDescription:
      'A charcoal leather binder rumored to contain every deadline, exhibit, and mysteriously missing receipt in the realm.',
    doctrine: 'Never interrupt the opposing kingdom while it is submitting the wrong attachment.',
    portrait: '/assets/characters/champion-morgana-blackwell.webp',
  },
  {
    slug: 'bennett-quill',
    name: 'Bennett Quill, Esq.',
    title: 'Master of Paperwork',
    specialty: 'Uncontested divorce • Settlement drafting • Process clarity',
    quote: 'The pen is mightier than the sword, especially when the sword is not admissible.',
    shortBio:
      'Bennett believes nearly every avoidable crisis begins with an unsigned form, an unclear deadline, or someone insisting they “thought the text message counted.”',
    fullBio: [
      'Bennett Quill believes most preventable legal chaos begins with a missing signature, an unclear date, or someone confidently relying on a form from the wrong county.',
      'His fictional practice centers on agreed resolutions, carefully drafted terms, and making sure all parties understand what happens after the document is signed.',
      'Bennett is patient, precise, and willing to explain the same filing requirement twice without sighing audibly.',
    ],
    knownFor: [
      'Clear settlement language',
      'Efficient agreed filings',
      'Deadline management',
      'Process explanations',
      'Naming digital files correctly on the first attempt',
    ],
    artifactName: 'The Never-Dry Quill',
    artifactDescription:
      'A brass-nibbed pen that has signed thousands of fictional decrees and one extremely disputed patio-furniture inventory.',
    doctrine: 'A verbal agreement is a future disagreement wearing comfortable shoes.',
    portrait: '/assets/characters/champion-bennett-quill.webp',
  },
  {
    slug: 'beatrice-ashford',
    name: 'Beatrice Ashford, Esq.',
    title: 'Keeper of the Peace',
    specialty: 'Mediation • Parenting plans • Durable agreements',
    quote: 'Peace does not require agreement on everything. It requires terms that still work on a Tuesday.',
    shortBio:
      'Beatrice helps separating households build practical agreements without requiring everyone to become best friends, pen pals, or co-rulers of a single calendar.',
    fullBio: [
      'Beatrice Ashford helps fictional clients turn emotionally loaded disputes into practical questions, written options, and agreements that do not collapse the first time a school holiday changes.',
      'Her style is calm without being passive, structured without being rigid, and focused on building terms that work in ordinary life—not only in the rare week when everyone is rested, punctual, and reading the group chat.',
      'She is especially skilled at helping separating households discuss parenting schedules, communication boundaries, and the transfer of children’s belongings without invoking the ancient phrase “you always do this.”',
    ],
    knownFor: [
      'Child-focused planning',
      'Mediation structure',
      'Practical scheduling',
      'Communication protocols',
      'Returning conversations to the actual issue',
    ],
    artifactName: 'The Peace Bell',
    artifactDescription:
      'A small bronze bell used whenever a discussion leaves the agenda and enters the historical record.',
    doctrine: 'You do not need to agree on the past to write a workable Thursday.',
    portrait: '/assets/characters/champion-beatrice-ashford.webp',
  },
]

export type Victory = {
  title: string
  category: string
  caseNumber: string
  opening: string
  dispute: string
  strategy: string
  treaty: string
  note: string
  badge: string
}

export const victories: Victory[] = [
  {
    title: 'The Battle of the Espresso Machine',
    category: 'Asset Division',
    caseNumber: 'DD-0417-BEAN',
    opening: 'The machine sat between the two kingdoms like a chrome monument to unresolved resentment.',
    dispute:
      'Both parties claimed to have selected, purchased, maintained, and emotionally supported the espresso machine. The original receipt had vanished. Nineteen photographs established frequent use but not ownership. One party argued that learning to descale the machine constituted a superior claim.',
    strategy:
      'The Dungeon requested purchase records, gift history, accessory ownership, and a complete inventory of coffee-related equipment.',
    treaty:
      'The espresso machine followed the grinder. The opposing kingdom received the air fryer, the milk frother, and all remaining loyalty points.',
    note: 'Peace was declared at approximately 9:42 a.m., shortly after everyone received coffee.',
    badge: 'Resolved over two coffees',
  },
  {
    title: 'The Forty-Seven Houseplants Accord',
    category: 'Mediation',
    caseNumber: 'DD-0522-FERN',
    opening: 'There were forty-seven plants, nine windows, two watering philosophies, and no neutral pothos.',
    dispute:
      'Both parties sought several high-value plants. Care history was disputed. One fiddle-leaf fig had already expressed displeasure by dropping three leaves during intake.',
    strategy:
      'Plants were cataloged by species, purchase history, sentimental value, light requirements, toxicity to pets, and documented watering competence.',
    treaty:
      'The collection was divided according to care patterns and available window exposure. Propagated cuttings were used where botanically reasonable. The fiddle-leaf fig went to the party with fewer ceiling vents.',
    note: 'Follow-up reports indicated that all ferns remained alive, which exceeded expectations.',
    badge: 'All ferns survived',
  },
  {
    title: 'The Streaming Password Succession Crisis',
    category: 'Negotiated Settlement',
    caseNumber: 'DD-0608-PLAY',
    opening: 'The crisis began when every profile icon changed overnight.',
    dispute:
      'Shared subscriptions, purchase histories, family plans, and device access became entangled. Profile names had been modified in a manner both creative and unhelpful.',
    strategy:
      'Accounts were identified by owner, payment method, recovery email, household use, and the likelihood that either party remembered the password.',
    treaty:
      'Services were separated. Personal watchlists were preserved where export options existed. Both parties agreed to remove old devices and refrain from renaming profiles after historical grievances.',
    note: 'Neither party lost their place in the final season.',
    badge: 'Profiles honorably discharged',
  },
  {
    title: 'The Great Patio Furniture Standoff',
    category: 'Mediation',
    caseNumber: 'DD-0711-CHAIR',
    opening: 'Six chairs. One table. Zero agreement about who had “always hated the set anyway.”',
    dispute:
      'The furniture was purchased jointly, assembled by one party, maintained by the other, and disliked by both until separation made it priceless.',
    strategy:
      'Replacement value, moving cost, balcony dimensions, and actual usage were compared against the emotional cost of continuing the debate.',
    treaty:
      'The set was sold. Proceeds were divided. Both parties purchased smaller chairs they liked more.',
    note: 'Sometimes the treasure is freedom from the treasure.',
    badge: 'The chairs were released',
  },
  {
    title: 'The Family Group Chat Schism',
    category: 'Communication Boundaries',
    caseNumber: 'DD-0814-REPLYALL',
    opening: 'The extended family had opinions, stickers, and unrestricted posting privileges.',
    dispute:
      'Separation news triggered overlapping group chats, unsolicited legal theories, and a daily inspirational quote from an aunt who had not read the room.',
    strategy:
      'Direct communication channels were established for logistics. Extended-family participation was limited. Screenshots were no longer treated as diplomatic correspondence.',
    treaty:
      'One child-related logistics channel remained. All other family chats were muted for thirty days.',
    note: 'The aunt continued posting quotes but received no strategic engagement.',
    badge: 'Notifications contained',
  },
  {
    title: 'The Dog, the Bed, and the Sweater Collection',
    category: 'Negotiated Agreement',
    caseNumber: 'DD-0919-HOUND',
    opening: 'The dog had no legal brief but clearly preferred the larger bed.',
    dispute:
      'Both parties wanted primary care of the dog. Shared expenses, travel schedules, veterinary records, and possession of the dog’s extensive sweater collection complicated the discussion.',
    strategy:
      'Daily care history, housing, work schedules, veterinary access, travel frequency, and the dog’s routine were reviewed.',
    treaty:
      'Primary residence followed the more stable weekday schedule. Regular visits were agreed. Sweaters traveled with the dog in a labeled canvas bag.',
    note: 'The dog declined to sign but accepted a biscuit.',
    badge: 'Sweaters transferred intact',
  },
]

export const testimonials = [
  {
    quote:
      'They divided the vinyl collection with the precision of royal cartographers. I kept the jazz. He kept the records he only bought because the covers looked cool.',
    name: 'Elena M.',
    campaign: 'Asset Division',
  },
  {
    quote:
      'My ex brought screenshots. Divorce Dungeon brought tabs, timestamps, and a binder that made a noise when it landed on the table.',
    name: 'Marcus T.',
    campaign: 'Contested Divorce',
  },
  {
    quote: 'I kept the dog, the espresso grinder, and what remained of my dignity. Five stars.',
    name: 'Priya R.',
    campaign: 'Mediation',
  },
  {
    quote:
      'Beatrice helped us create a parenting schedule that works in real life, not just in a color-coded fantasy calendar.',
    name: 'Daniel K.',
    campaign: 'Parenting Plan',
  },
]

export const homepageFaqs = [
  {
    question: 'Do I need a dragon?',
    answer:
      'No. In most jurisdictions, dragons are expensive to stable and contribute very little during document review.',
  },
  {
    question: 'Is every divorce a battle?',
    answer:
      'No. Many matters can be resolved through organized negotiation, mediation, or agreed filings. The castle imagery is mostly branding.',
  },
  {
    question: 'Can you guarantee I keep the espresso machine?',
    answer:
      'Absolutely not. We can, however, encourage everyone to locate receipts before developing a constitutional theory of coffee ownership.',
  },
  {
    question: 'Is Divorce Dungeon a real law firm?',
    answer:
      'No. Divorce Dungeon is a fictional satirical website concept created for entertainment and portfolio demonstration. It does not provide legal services or advice.',
  },
  {
    question: 'Will submitting the form create an attorney-client relationship?',
    answer:
      'No. The consultation form is a front-end demonstration. No legal relationship is created, no confidential information should be submitted, and no raven will actually be dispatched.',
  },
]

export const warRoomFaqs = [
  {
    question: 'Is Divorce Dungeon a real law firm?',
    answer:
      'No. Divorce Dungeon is a fictional satirical website created as a portfolio project. It does not employ attorneys, provide legal services, or offer legal advice.',
  },
  {
    question: 'Why make a divorce website funny?',
    answer:
      'The concept uses humor to satirize legal branding and the administrative absurdity of dividing a shared life. The humor is directed at paperwork, systems, and oddly specific property disputes—not at abuse, trauma, children, or people in danger.',
  },
  {
    question: 'Does this website collect real case information?',
    answer:
      'It should not. The consultation form is a front-end demonstration. Visitors should be told not to submit confidential or sensitive information.',
  },
  {
    question: 'Could this template be adapted for a real law firm?',
    answer:
      'The visual system and component architecture could be adapted, but all copy, claims, disclaimers, intake flows, privacy terms, advertising language, and jurisdiction-specific requirements would need review by a qualified attorney and the actual firm.',
  },
  {
    question: 'What is the fastest path through a divorce?',
    answer:
      'That depends on jurisdiction, facts, agreements, required waiting periods, court availability, and many other factors. This parody website cannot answer legal questions. A licensed attorney in the relevant jurisdiction should be consulted.',
  },
  {
    question: 'What should I bring to a real consultation?',
    answer:
      'Ask the actual attorney’s office. Common requests may include basic identity information, relevant court papers, financial records, timelines, and a list of priorities, but requirements vary.',
  },
  {
    question: 'Can a sword be entered as an exhibit?',
    answer: 'This website strongly recommends documents.',
  },
]

export const resources = [
  {
    category: 'TREASURE MAP',
    title: 'What Counts as Treasure?',
    description:
      'A plain-language field guide to homes, accounts, debts, furniture, retirement assets, businesses, collections, and the lamp nobody remembers buying.',
    cta: 'Map the Realm',
  },
  {
    category: 'PEACEKEEPING',
    title: 'Co-Parenting Without Deploying the Trebuchet',
    description:
      'Build communication rules, transition routines, and calendars that still function after the first unexpectedly early school dismissal.',
    cta: 'Read the Accord',
  },
  {
    category: 'PREPARATION',
    title: 'The First War Council Checklist',
    description:
      'What to gather, what to write down, what to leave at home, and why “everything is in my phone somewhere” is not a document strategy.',
    cta: 'Prepare the Binder',
  },
  {
    category: 'TRANSLATION',
    title: 'Legal Words, Translated Into Human',
    description:
      'A fictional glossary for common process terms, with fewer Latin phrases and more sentences that answer the actual question.',
    cta: 'Decode the Scroll',
  },
  {
    category: 'MEDIATION',
    title: 'How to Make a Proposal Without Writing a Manifesto',
    description:
      'Focus the issue, explain the reason, state the request, and stop before chapter four.',
    cta: 'Draft the Proposal',
  },
  {
    category: 'AFTER THE DECREE',
    title: 'The Separate Kingdoms Checklist',
    description:
      'Passwords, accounts, insurance, beneficiaries, calendars, addresses, subscriptions, and the ceremonial removal of your ex from the grocery-delivery profile.',
    cta: 'Begin the Next Chapter',
  },
]
