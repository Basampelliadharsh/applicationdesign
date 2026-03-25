import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-homepage',
  imports: [CommonModule, FormsModule],  
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  newGoal: string ='';

 goals = [
    {
      id: 1,
      text: 'complete the angular project',
      completed: false
    },
    {
      id: 2,
      text: 'Review Typescript',
      completed: false
    },
    {
      id: 3,
      text: 'practice API CALLS',
      completed: false
    }
  ];
   addGoal() {
    if (this.newGoal.trim() !== '') {
      this.goals.push({
        id: this.goals.length + 1,
        text: this.newGoal,
        completed: false
      });

      this.newGoal = ''; 
      
    }

  }
}