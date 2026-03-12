import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app'; 
  fullName = 'binh';
  age: number = 12;

  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
