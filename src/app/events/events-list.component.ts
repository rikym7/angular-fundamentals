import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service'
 
declare let toastr //lets TS know this is globally defined elsewhere

@Component({
    //selector: 'events-list', //No longer need since we added the Router
          // *ngFor is a structural directive; they change the DOM. They change the structure of the DOM
          // "events" is the array to loop through.
          // The [event] object is the found in the template file and is assigned each event in iteration.
    template: `
    <div><h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5"> 
             <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
           </div>
        </div>     
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events:any //removed the [] to stop the TypeScript complaint when using the subscription

    constructor(private eventService: EventService, private toastr: ToastrService) {
      //Still need this contructor becuase this is where the service gets injected.
    }

    //Best practice to have this constructor moved to the ngOnInit() - LifeCycle Event - called when the component it loaded
    ngOnInit() {
      //set this.events to only be set when the data is actually received from subscriptions
      this.eventService.getEvents().subscribe(events => { this.events = events}) 
    }

    handleEventClicked(data){
        console.log('received: ', data)
    }

    handleThumbnailClick(eventName){
      console.log('received: ', eventName)
      //not using a global service any longer and using a injectable service now.
      this.toastr.success(eventName)
  }
}