import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',

    // Added the "?" after "event" to handle any null conditions.  This is called a safe navigator.
    //Added *ngIf to logically display the div if there is data to display.  The data will not be rendered with ngIf.
    //Used the [hidden] property in DOM to hide the div now.  Used this technique to render the div so you can use a button to toggle it.
    //Used ngSwitch to choose what span will be displayed in a div.
    //Class Binding to update the CSS class.  [class.green] - this would be added to any class already applied to div.
    //Used [ngClass] now to set two CSS class values - green AND bold
    //Used a function call to set the two properties for the CSS
    //used a Terinary statement to set the CSS in this example. [ngStyle]

    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
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
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 250px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        console.log('clicked!')
        this.eventClick.emit(this.event.name)
    }

    someProperty: any = "some value"

    logFoo() {
      console.log('foo')  
    }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
    }

    alterGetStartTimeClass() {
        //Alternate method to setting the CSS properties - return a string
        if (this.event && this.event.time === '8:00 am')
            return 'green bold'
        return ''
    }

    alter2GetStartTimeClass() {
        //Alternate method to setting the CSS properties - return an array
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
    }

    getStartTimeStyle():any {
        //Alternate method to setting the CSS properties - return an array
        if (this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold' }
        return {}

    }

}