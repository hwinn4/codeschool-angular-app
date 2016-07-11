// helps create components (decorator + class)
import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { RacingDataService } from './car-parts/racing-data.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
		<h3>{{date | date:'MMM d, y, h:mm a'}}</h3>
		<car-parts></car-parts>`,
	directives: [CarPartsComponent],
	providers: [RacingDataService, HTTP_PROVIDERS]

})

// start class definition
export class AppComponent {
	// don't use var or let to declare class properties
	title = 'Ultra Racing';
}