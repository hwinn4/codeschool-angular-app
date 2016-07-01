import { bootstrap } from '@angular/platform-browser-dynamic';
// not twitter bootstrap, but a command to instantiate angular apps
import { Component } from '@angular/core';
// helps create components (decorator + class)


// component decorator code goes here
// use `stuff` to create multiline template strings 
@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
		<h2>{{carPart.name}}</h2>
		<p>{{carPart.description}}</p>
		<p>{{carPart.inStock}} in Stock</p>`

})

// start class definition
class AppComponent {
	// don't use var or let to declare class properties
	title = 'Ultra Racing';
	carPart = {
		'id': 1,
		'name': 'Super Tires',
		'description': 'These tires are the very best',
		'inStock': 5
	} 
}

bootstrap(AppComponent)