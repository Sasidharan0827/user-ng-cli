export interface NavItem {
  label: string;
  route: string;
  icon: string;
}

export interface UserPerformancePoint {
  label: string;
  shortDate: string;
  score: number;
}

export interface UserMissionRecord {
  score: number;
  course: string;
  event: string;
  date: string;
  impact: number;
  status: string;
}

export interface UserDashboardData {
  heading: string;
  averageScore: number;
  impactTitle: string;
  activeSelection: string;
  contributionRate: number;
  nextDraw: string;
  nextDrawIn: string;
  pastWinnings: string;
  currentPlan: string;
  renewalDate: string;
  missionHistory: UserMissionRecord[];
  performance: UserPerformancePoint[];
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

export interface AdminHero {
  id: string;
  name: string;
  tier: string;
  status: string;
  impactScore: number;
  avatar: string;
}

export interface WinnerReview {
  id: string;
  name: string;
  prize: string;
  avatarTone: string;
}

export interface AdminDashboardData {
  prizePool: AdminMetric;
  charityImpact: AdminMetric;
  activeHeroes: AdminMetric;
  sampleSize: number;
  estimatedOdds: string;
  ticketsInSystem: number;
  nextDrawCountdown: string;
  phases: DrawPhase[];
  heroes: AdminHero[];
  winners: WinnerReview[];
}
