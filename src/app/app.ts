import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlanService } from './services/plan';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
})
export class AppComponent {
  task: string = '';
  plan: any = null;
  loading: boolean = false;

  constructor(private planService: PlanService) {}

  generatePlan(): void {
    if (!this.task.trim()) return;
    this.loading = true;
    this.plan = null;
    this.planService.generatePlan(this.task).subscribe({
      next: (res) => {
        console.log('API RESPONSE:', res);
        this.plan = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Something went wrong. Please try again.');
        this.loading = false;
      }
    });
  }
  toggleTheme() {
  document.body.classList.toggle('dark');
  }
}
