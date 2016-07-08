import { Component } from '@angular/core';
// helps create components (decorator + class)
import { CarPartsComponent } from './car-parts.component'
@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
		<h3>{{date | date:'MMM d, y, h:mm a'}}</h3>
		<car-parts></car-parts>`,
	directives: [CarPartsComponent]

})

// start class definition
export class AppComponent {
	// don't use var or let to declare class properties
	title = 'Ultra Racing';
}