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
// use `backticks` to create multiline template strings 
var AppComponent = (function () {
    function AppComponent() {
        // don't use var or let to declare class properties
        this.title = 'Ultra Racing';
        this.date = new Date('2512-07-03T20:00:00');
        this.carParts = [{
                'id': 1,
                'name': 'Super Tires',
                'description': 'These tires are the very best',
                'inStock': 5,
                'price': 4.99
            },
            {
                'id': 2,
                'name': 'Sunroof',
                'description': 'Let the heat in!',
                'inStock': 0,
                'price': 100.00
            }];
    }
    AppComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t\t<h3>{{date | date:'MMM d, y, h:mm a'}}</h3>\n\t\t<p>There are {{totalCarParts()}} total parts in stock.</p>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let carPart of carParts\">\n\t\t\t\t<h2>{{carPart.name | uppercase }}</h2>\n\t\t\t\t<p>{{carPart.description}}</p>\n\t\t\t\t<p>{{carPart.price | currency:'USD':true}}</p>\n\t\t\t\t<p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n\t\t\t\t<p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>\n\t\t\t</li>\n\t\t</ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map