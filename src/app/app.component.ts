import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFivePipe } from './add-five.pipe';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddFivePipe, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentNumber = 10;
  currentDate = new Date();

  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 30000 },
    { id: 3, name: 'Tablet', price: 25000 }
  ];
}