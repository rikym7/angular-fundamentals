import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',

    // Added the "?" after "event" to handle any null conditions.  This is called a safe navigator.
    //Added *ngIf to logically display the div if there is data to display.

    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event.onlineUrl}}
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 250px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        console.log('clicked!')
        this.eventClick.emit(this.event.name)
    }

    someProperty: any = "some value"

    logFoo() {
      console.log('foo')  
    }

}