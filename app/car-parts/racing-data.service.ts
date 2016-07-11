import { Injectable } from '@angular/core';
import { CarPart } from './car-part';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

	constructor(private http: Http) {}

	getCarParts() {
		// .get returns an observable, which allows us to treat the
		// return val like an array, so we can use .map
		// .data: the array we want is under this keyword
		// response.json(): for each response, turn it into json
		// <CarPart[]>: treat this like an array of CarParts

		return this.http.get(this.url)
							 .map(response => <CarPart[]>response.json().data);
									
	}

	private url = "app/car-parts/car-parts.json";

	// private extractData(res: Response) {
	// 	let body = res.json();
	// 	console.log(body);
	// 	return body.data || {};
	// }

	// private handleError(error: any) {
	// 	let errMsg = (error.message) ? error.message :
 //      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
 //    console.error(errMsg); // log to console instead
 //    return Observable.throw(errMsg);

	// }
}