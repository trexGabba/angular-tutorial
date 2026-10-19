import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {

  name: string = 'Arijit Singh';

  imageUrl: string = 'https://git-scm.com/images/logo@2x.png';

  count = signal(0);
  increaseCount(){
    this.count.update((val) => val + 1);
  }

  showEvent(event: Event) {
    console.log(event.type);
  }


  updateName(name: string) {
    this.name = name;
  }
}