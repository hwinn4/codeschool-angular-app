"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// not twitter bootstrap, but a command to instantiate angular apps
var core_1 = require('@angular/core');
// helps create components (decorator + class)
// component decorator code goes here
// use `stuff` to create multiline template strings 
var AppComponent = (function () {
    function AppComponent() {
        // don't use var or let to declare class properties
        this.title = 'Ultra Racing';
        this.carPart = {
            'id': 1,
            'name': 'Super Tires',
            'description': 'These tires are the very best',
            'inStock': 5
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t\t<h2>{{carPart.name}}</h2>\n\t\t<p>{{carPart.description}}</p>\n\t\t<p>{{carPart.inStock}} in Stock</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map