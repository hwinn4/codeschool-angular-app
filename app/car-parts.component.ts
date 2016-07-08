import { Component } from '@angular/core';
// helps create components (decorator + class)

@Component({
	selector: 'car-parts',
	templateUrl: 'app/car-parts/car-parts.component.html',
	styleUrls: ['app/car-parts/car-parts.component.css']
})

export class CarPartsComponent {

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
	},
	{
		'id': 3,
		'name': 'Bumper',
		'description': 'It\'s touch and go.',
		'inStock': 1,
		'price' : 16.00
	}];

	totalCarParts() {
		let sum = 0;

		for(let carPart of this.carParts) {
			sum += carPart.inStock;
		}

		return sum;
	}

}
