import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html'
})
export class About {

  name = 'Le Thanh Binh';
  age = 25;

  clickMe(){
    alert("Bạn đã click button");
  }
}