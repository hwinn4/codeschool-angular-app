3// helps create components (decorator + class)
import { Component } from '@angular/core';
import { CarPart } from './car-part.ts';
import { RacingDataService } from './racing-data.service';

@Component({
	selector: 'car-parts',
	templateUrl: 'app/car-parts/car-parts.component.html',
	styleUrls: ['app/car-parts/car-parts.component.css']
})

export class CarPartsComponent {
	// treat this array of objects like an array of CarPart objects
	// Using the class will prompt the compiler to check for 
	// correctly named attributes and adherence to the class structure
	carParts: CarPart[];

	date = new Date('2512-07-03T20:00:00');

	// 'private' causes TypeScript to define 
	// component properties based on the parameters

	// The parameters here use TypeScript syntax
	// The params identify that the RacingDataService should be
	// injected into this component.
	constructor(private racingDataService: RacingDataService) {}

	ngOnInit() {
		// set local this.carParts array equal to data we received 
		// from the service
		this.racingDataService.getCarParts()
				.subscribe(carParts => this.carParts = carParts);
	}

	totalCarParts() {
		let sum = 0;

		if (Array.isArray(this.carParts)) {
			for(let carPart of this.carParts) {
				sum += carPart.inStock;
			}
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
