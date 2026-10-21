import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-app',
  styleUrl: './counter-app.css',
  templateUrl: './counter-app.html',
})
export class CounterApp {

  value : number = 0;

  increment() {
    this.value++;
    console.log('Increment button clicked');
  }

  decrement() {
    this.value--;
    console.log('Decrement button clicked');
  }   

  reset() {
    this.value = 0;
    console.log('Reset button clicked');
  }
}
