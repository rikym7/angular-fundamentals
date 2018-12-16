import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {


    }
    resolve() {
        //We call getEvents that returns an observable and then map that gives access to the events
        //we do not use subscribe we use map and we return the observable so Angular can watch the 
        //observable and see when it finishes.
        return this.eventService.getEvents().pipe(map(events => events))
    }
}