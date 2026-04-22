import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginOptions } from '../../models/content.model';
import { ToastService } from '../../service/toast.service';

type LoginMode = 'user' | 'admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mode: LoginMode = 'user';
  credentials: LoginOptions['credentials'] = {
    user: {
      email: '',
      password: '',
      route: '/dashboard'
    },
    admin: {
      email: '',
      password: '',
      route: '/admin'
    }
  };

  userForm = {
    email: '',
    password: ''
  };

  adminForm = {
    email: '',
    password: ''
  };

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.authService.getOptions().subscribe((options) => {
      this.credentials = options.credentials;
      this.userForm = {
        email: options.credentials.user.email,
        password: options.credentials.user.password
      };
      this.adminForm = {
        email: options.credentials.admin.email,
        password: options.credentials.admin.password
      };
    });
  }

  setMode(mode: LoginMode): void {
    this.mode = mode;
  }

  login(mode: LoginMode): void {
    const form = mode === 'admin' ? this.adminForm : this.userForm;
    const portalLabel = mode === 'admin' ? 'Admin Control Center' : 'Subscriber Command Center';

    this.authService.login(mode, form.email, form.password).subscribe({
      next: (response) => {
        this.toastService.showSuccess(
          'Access cleared',
          `Welcome to the ${portalLabel}. Your Digital Heroes session is ready.`
        );
        void this.router.navigateByUrl(response.route ?? '/');
      },
      error: (error: HttpErrorResponse) => {
        const apiMessage = typeof error.error?.message === 'string' ? error.error.message : '';
        this.toastService.showError(
          'Login denied',
          apiMessage || `We could not verify those ${mode} credentials. Check the details and try again.`
        );
      }
    });
  }
}
