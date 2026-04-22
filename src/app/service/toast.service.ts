import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastTone = 'success' | 'error';

export interface ToastMessage {
  id: number;
  tone: ToastTone;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly messagesSubject = new BehaviorSubject<ToastMessage[]>([]);
  private nextId = 1;

  readonly messages$ = this.messagesSubject.asObservable();

  showSuccess(title: string, message: string, duration = 4000): void {
    this.show('success', title, message, duration);
  }

  showError(title: string, message: string, duration = 5000): void {
    this.show('error', title, message, duration);
  }

  dismiss(id: number): void {
    this.messagesSubject.next(this.messagesSubject.value.filter((message) => message.id !== id));
  }

  private show(tone: ToastTone, title: string, message: string, duration: number): void {
    const toast: ToastMessage = {
      id: this.nextId++,
      tone,
      title,
      message
    };

    this.messagesSubject.next([...this.messagesSubject.value, toast]);

    window.setTimeout(() => this.dismiss(toast.id), duration);
  }
}
