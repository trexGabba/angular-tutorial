import { Component, signal } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { Hello } from './hello/hello';
import { CounterApp } from './counter-app/counter-app';
import { ForLoop } from './for-loop/for-loop';
import { SignalPractice } from './signal-practice/signal-practice';
import { Todo } from './todo/todo';
import {Child} from './child/child';

@Component({
  imports: [RouterOutlet, RouterLink, Hello , CounterApp, ForLoop, SignalPractice, Todo, Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial');



}
