import { Component } from '@angular/core';

@Component({
  selector: 'events-app',

  //Changing to use the Router Outlet component to show other pages
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {
  title = 'app';
}
