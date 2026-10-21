import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {


  username  = signal<string>("");

  sendMessage(){
    this.username.set("Hello from child component");
  }


  




}
