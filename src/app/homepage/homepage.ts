import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-homepage',
  imports: [CommonModule, FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  goals = [{ id: 1, text: '', completed: false }];
  newGoal = '';
  constructor(private router: Router) {}
  addGoal() {
    console.log('Add Goal clicked');
    console.log('New Goal entered by the user:', this.newGoal);
    console.log(this.goals[this.goals.length - 1]?.id);
    this.goals.push({
      id: this.goals[this.goals.length - 1]?.id + 1 || 1,
      text: this.newGoal,
      completed: false,
    });
    this.newGoal = '';
  }

  deleteGoal(id: number) {
    console.log('Delete Goal clicked for id:', id);
    this.goals = this.goals.filter((goal) => goal.id !== id);
  }
  logout() {
    console.log('Logout clicked');
    this.router.navigate(['/signin']);
  }
}
