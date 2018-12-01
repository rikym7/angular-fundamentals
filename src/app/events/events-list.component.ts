import { Component } from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
          // *ngFor is a structural directive; they change the DOM. They change the structure of the DOM
          // "events" is the array to loop through.
          // The [event] object is the found in the template file and is assigned each event in iteration.
    template: `
    <div><h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5"> 
             <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>
           </div>
        </div>     
    </div>
    `
})

export class EventsListComponent {
    events:any[]

    constructor(private eventService: EventService){
      this.events = this.eventService.getEvents()

    }

    handleEventClicked(data){
        console.log('received: ', data)
    }
}