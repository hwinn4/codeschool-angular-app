import { bootstrap } from '@angular/platform-browser-dynamic';
// not twitter bootstrap, but a command to instantiate angular apps
import { Component } from '@angular/core';
// helps create components (decorator + class)


// component decorator code goes here
// use `backticks` to create multiline template strings 
@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
		<h3>{{date | date:'MMM d, y, h:mm a'}}</h3>
		<p>There are {{totalCarParts()}} total parts in stock.</p>
		<ul>
			<li *ngFor="let carPart of carParts">
				<h2>{{carPart.name | uppercase }}</h2>
				<p>{{carPart.description}}</p>
				<p>{{carPart.price | currency:'USD':true}}</p>
				<p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
				<p *ngIf="carPart.inStock === 0">Out of Stock</p>
			</li>
		</ul>`

})

// start class definition
class AppComponent {
	// don't use var or let to declare class properties
	title = 'Ultra Racing';

	date = new Date('2512-07-03T20:00:00');

	carParts = [{
		'id': 1,
		'name': 'Super Tires',
		'description': 'These tires are the very best',
		'inStock': 5,
		'price' : 4.99
	},
	{
		'id': 2,
		'name': 'Sunroof',
		'description': 'Let the heat in!',
		'inStock': 0,
		'price' : 100.00
	}];

	totalCarParts() {
		let sum = 0;

		for(let carPart of this.carParts) {
			sum += carPart.inStock;
		}

		return sum;
	}

}

bootstrap(AppComponent)