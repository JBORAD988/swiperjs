import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None  // Use this to make styles global (non-scoped)
})
export class AppComponent {
  title = 'swiperjs';
}
