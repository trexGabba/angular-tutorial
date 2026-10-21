import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-for-loop',
  styleUrl: './for-loop.css',
  templateUrl: './for-loop.html',
})
export class ForLoop {

  users = [
    { name: 'Arijit Singh', age: 35 },
    { name: 'Shreya Ghoshal', age: 37 },
    { name: 'Sonu Nigam', age: 45 },
    { name: 'Lata Mangeshkar', age: 92 },
  ];

  numbers = [1, 2, 3, 4, 5];

  count = signal<number>(0);
}
