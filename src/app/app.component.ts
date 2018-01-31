import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detail = false;
  logs = [];
  count = 0;

  displayDetails() {
    this.detail = true;
    this.logs.push(++this.count);
  }

}
