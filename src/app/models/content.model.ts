export interface LandingStat {
  label: string;
  value: string;
  detail: string;
}

export interface LandingMissionCard {
  tag: string;
  title: string;
  items: string[];
}

export interface LandingHero {
  eyebrow: string;
  title: string;
  lead: string;
  stats: LandingStat[];
  missionCard: LandingMissionCard;
}

export interface JourneyStep {
  step: string;
  title: string;
  copy: string;
}

export interface CharityProfile {
  id: string;
  name: string;
  category: string;
  location: string;
  impact: string;
  events: string[];
  featured: boolean;
  summary: string;
  metric: string;
}

export interface SubscribePlan {
  id: 'monthly' | 'yearly';
  name: string;
  price: string;
  cadence: string;
  detail: string;
}

export interface LandingData {
  hero: LandingHero;
  journey: JourneyStep[];
  plans: SubscribePlan[];
  charities: CharityProfile[];
}

export interface UserSubscription {
  status: string;
  plan: string;
  renewalDate: string;
  nextDraw: string;
  drawsEntered: number;
  totalWon: string;
  paymentState: string;
}

export interface ScoreEntry {
  id: number;
  date: string;
  score: number;
}

export interface UserDashboardState {
  subscription: UserSubscription;
  charities: string[];
  selectedCharity: string;
  contributionRate: number;
  scores: ScoreEntry[];
}

export interface AdminUser {
  id: string;
  name: string;
  plan: string;
  subscription: 'Active' | 'Lapsed' | 'Cancelled';
  charity: string;
}

export interface ManagedWinner {
  id: string;
  name: string;
  tier: string;
  state: 'Pending' | 'Approved' | 'Paid';
}

export interface WinnerSubmission {
  id: string;
  name: string;
  prize: string;
  submittedAt: string;
  proof: string;
  state: 'Pending' | 'Approved' | 'Rejected' | 'Paid';
}

export interface AdminMetric {
  label: string;
  value: string;
  accent: 'cyan' | 'violet' | 'slate';
  detail: string;
}

export interface DrawPhase {
  label: string;
  complete: boolean;
}

export interface AdminDashboardState {
  algorithmMode: 'Algorithmic' | 'Random';
  sampleSize: number;
  nextDrawCountdown: string;
  drawStatus: string;
  ticketsInSystem: number;
  metrics: {
    prizePool: AdminMetric;
    charityImpact: AdminMetric;
    activeHeroes: AdminMetric;
  };
  phases: DrawPhase[];
  users: AdminUser[];
  winners: ManagedWinner[];
  charities: string[];
}

export interface LoginModeData {
  email: string;
  password: string;
  route: string;
}

export interface LoginOptions {
  credentials: {
    user: LoginModeData;
    admin: LoginModeData;
  };
}

export interface SubscribeOptions {
  plans: SubscribePlan[];
  charities: string[];
}
