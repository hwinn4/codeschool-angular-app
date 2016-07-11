import { Component } from '@angular/core';
// helps create components (decorator + class)
import { CarPart } from './car-part.ts';
import { CARPARTS } from './mocks.ts';

@Component({
	selector: 'car-parts',
	templateUrl: 'app/car-parts/car-parts.component.html',
	styleUrls: ['app/car-parts/car-parts.component.css']
})

export class CarPartsComponent {

	date = new Date('2512-07-03T20:00:00');

	// treat this array of objects like an array of CarPart objects
	// Using the class will prompt the compiler to check for 
	// correctly named attributes and adherence to the class structure
	carParts: CarPart[];

	ngOnInit() {
		this.carParts = CARPARTS;
	}

	totalCarParts() {
		let sum = 0;

		for(let carPart of this.carParts) {
			sum += carPart.inStock;
		}

		return sum;
	}

	upQuantity(carPart) {
		if (carPart.quantity < carPart.inStock) carPart.quantity++;
	}

	downQuantity(carPart) {
		if (carPart.quantity != 0) carPart.quantity--
	}

}
