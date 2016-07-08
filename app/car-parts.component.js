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
var core_1 = require('@angular/core');
// helps create components (decorator + class)
var CarPartsComponent = (function () {
    function CarPartsComponent() {
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
            },
            {
                'id': 3,
                'name': 'Bumper',
                'description': 'It\'s touch and go.',
                'inStock': 1,
                'price': 16.00
            }];
    }
    CarPartsComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    CarPartsComponent = __decorate([
        core_1.Component({
            selector: 'car-parts',
            templateUrl: 'app/car-parts/car-parts.component.html',
            styleUrls: ['app/car-parts/car-parts.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CarPartsComponent);
    return CarPartsComponent;
}());
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map