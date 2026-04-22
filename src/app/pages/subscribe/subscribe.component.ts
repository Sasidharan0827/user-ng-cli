import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SubscribeOptions, SubscribePlan } from '../../models/content.model';
import { SubscribeService } from '../../service/subscribe.service';
import { ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  plans: SubscribePlan[] = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '',
      cadence: '',
      detail: ''
    }
  ];
  charities: string[] = [];
  selectedPlan: 'monthly' | 'yearly' = 'monthly';

  form = {
    name: '',
    email: '',
    charity: '',
    contribution: 10,
    agree: false
  };

  submitted = false;
  confirmationMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly subscribeService: SubscribeService,
    private readonly toastService: ToastService
  ) {
    const queryPlan = this.route.snapshot.queryParamMap.get('plan');
    if (queryPlan === 'monthly' || queryPlan === 'yearly') {
      this.selectedPlan = queryPlan;
    }
  }

  ngOnInit(): void {
    this.subscribeService.getOptions().subscribe((options: SubscribeOptions) => {
      this.plans = options.plans;
      this.charities = options.charities;
      this.form.charity = options.charities[0] ?? '';
    });
  }

  get activePlan(): SubscribePlan {
    return this.plans.find((plan) => plan.id === this.selectedPlan) ?? this.plans[0];
  }

  selectPlan(plan: 'monthly' | 'yearly'): void {
    this.selectedPlan = plan;
  }

  subscribe(): void {
    this.subscribeService
      .submit({
        planId: this.selectedPlan,
        name: this.form.name,
        email: this.form.email,
        charity: this.form.charity,
        contribution: this.form.contribution
      })
      .subscribe({
        next: (response) => {
          this.confirmationMessage = response.message;
          this.submitted = true;
          this.toastService.showSuccess(
            'Subscription activated',
            `${this.activePlan.name} access is live. ${this.form.charity} will receive ${this.form.contribution}% of your contribution.`
          );
        },
        error: (error: HttpErrorResponse) => {
          const apiMessage = typeof error.error?.message === 'string' ? error.error.message : '';
          this.toastService.showError(
            'Subscription failed',
            apiMessage || 'We could not activate your Digital Heroes subscription. Review your details and try again.'
          );
        }
      });
  }
}
