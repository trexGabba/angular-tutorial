import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {

  inputEvent(event : any) {
    console.log(event.target.value);


  }
}