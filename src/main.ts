import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item ${item}`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log('complete'),
    });

    from(['cat', 'dog', 'parrot']).subscribe({
      next: (item) => console.log(`Favourite pet is ${item}`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log('done')
    })
  }
}

bootstrapApplication(App);
