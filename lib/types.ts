export type NavLinkItem = {
  href: string;
  label: string;
};

export type HeroBulletItem = {
  label: string;
};

export type TrustStatItem = {
  value: string;
  label: string;
};

export type ChipItem = {
  label: string;
};

export type JourneyStepItem = {
  step: string;
  title: string;
  description: string;
};

export type MarkerCardItem = {
  code: string;
  description: string;
  marker: string;
  normalRange: string;
};

export type ScoreRangeTone = "mint" | "amber" | "orange" | "rose";

export type ScoreRangeItem = {
  range: string;
  label: string;
  description: string;
  action: string;
  tone: ScoreRangeTone;
};

export type DoctorMetricItem = {
  value: string;
  label: string;
};

export type StageTone = "blue" | "mint" | "peach";

export type StageCardItem = {
  step: string;
  title: string;
  description: string;
  action: string;
  tone: StageTone;
};

export type ScienceBlurbItem = {
  title: string;
  description: string;
};

export type ComparisonRowItem = {
  feature: string;
  generic: string;
  otherApps: string;
  gutGuard: string;
};

export type ProtocolCardItem = {
  title: string;
  price: string;
  cadence: string;
  summary: string;
  cta: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
};

export type ReviewCardItem = {
  before: string;
  after: string;
  improvement: string;
  quote: string;
  initials: string;
  protocol: string;
};

export type KnowledgeTabItem = {
  label: string;
  active?: boolean;
};

export type KnowledgeCardItem = {
  title: string;
  body: string;
  bullets: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FooterColumnItem = {
  title: string;
  links: NavLinkItem[];
};

export type FooterBadgeItem = {
  label: string;
};
