import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'


import { EventsAppComponent } from './events-app.component';
//import { EventsListComponent} from './events/events-list.component';
//import { EventThumbnailComponent } from './events/event-thumbnail.componet';
import { NavBarComponent } from './nav/navbar.component';
//import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service' ;
//import { EventDetailsComponent } from './events/event-details/event-details.component';
//import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
//import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { appRoutes } from './routes';
//import { EventListResolver } from './events/events-list-resolver.service'


@NgModule({
  declarations: [
    EventsAppComponent,
    //EventRouteActivator,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    {
      //adding a function as a Route Guard against leaving Create Event too soon.
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you want to really cancel?')
    return true
}
