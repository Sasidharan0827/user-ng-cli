import { Component } from '@angular/core';

interface AdminUser {
  id: string;
  name: string;
  plan: string;
  subscription: 'Active' | 'Lapsed' | 'Cancelled';
  charity: string;
}

interface ManagedWinner {
  name: string;
  tier: string;
  state: 'Pending' | 'Approved' | 'Paid';
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  readonly navItems = [
    { label: 'Overview', route: '/admin', icon: 'OV' },
    { label: 'Subscriber View', route: '/dashboard', icon: 'SB' },
    { label: 'Charity Directory', route: '/charities', icon: 'CD' },
    { label: 'Draw Status', route: '/draws', icon: 'DS' },
    { label: 'Winner Flow', route: '/winners', icon: 'WV' }
  ];

  users: AdminUser[] = [
    { id: 'USR-1024', name: 'Ava Nair', plan: 'Yearly', subscription: 'Active', charity: 'Global Literacy Front' },
    { id: 'USR-1025', name: 'Rohan Mehta', plan: 'Monthly', subscription: 'Lapsed', charity: 'Kinetic Recovery' },
    { id: 'USR-1026', name: 'Noah Smith', plan: 'Yearly', subscription: 'Cancelled', charity: 'Verdant Initiative' },
    { id: 'USR-1027', name: 'Lena Cole', plan: 'Monthly', subscription: 'Active', charity: 'Harbor Community Fund' }
  ];

  winners: ManagedWinner[] = [
    { name: 'Elias Vance', tier: '5 Match', state: 'Pending' },
    { name: 'Janice K.', tier: '3 Match', state: 'Approved' }
  ];

  charities = [
    'Global Literacy Front',
    'Kinetic Recovery',
    'Verdant Initiative',
    'Harbor Community Fund'
  ];

  filterTerm = '';
  algorithmMode: 'Algorithmic' | 'Random' = 'Algorithmic';
  sampleSize = 4209;
  nextDrawCountdown = '09:14:20';
  drawStatus = 'Simulation ready';

  get filteredUsers(): AdminUser[] {
    const term = this.filterTerm.trim().toLowerCase();
    if (!term) {
      return this.users;
    }

    return this.users.filter((user) =>
      `${user.name} ${user.id} ${user.plan} ${user.subscription} ${user.charity}`.toLowerCase().includes(term)
    );
  }

  get activeUserCount(): number {
    return this.users.filter((user) => user.subscription === 'Active').length;
  }

  updateSampleSize(event: Event): void {
    this.sampleSize = Number((event.target as HTMLInputElement).value);
  }

  runSimulation(): void {
    this.sampleSize += this.algorithmMode === 'Algorithmic' ? 134 : 261;
    this.drawStatus = `${this.algorithmMode} simulation updated`;
  }

  executeDraw(): void {
    this.nextDrawCountdown = '00:00:30';
    this.drawStatus = 'Official result pending publish';
  }

  cycleSubscription(user: AdminUser): void {
    const nextState: Record<AdminUser['subscription'], AdminUser['subscription']> = {
      Active: 'Lapsed',
      Lapsed: 'Cancelled',
      Cancelled: 'Active'
    };

    user.subscription = nextState[user.subscription];
  }

  cycleWinnerState(winner: ManagedWinner): void {
    const nextState: Record<ManagedWinner['state'], ManagedWinner['state']> = {
      Pending: 'Approved',
      Approved: 'Paid',
      Paid: 'Pending'
    };

    winner.state = nextState[winner.state];
  }
}
