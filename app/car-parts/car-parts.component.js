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
3; // helps create components (decorator + class)
var core_1 = require('@angular/core');
var racing_data_service_1 = require('./racing-data.service');
var CarPartsComponent = (function () {
    // 'private' causes TypeScript to define 
    // component properties based on the parameters
    // The parameters here use TypeScript syntax
    // The params identify that the RacingDataService should be
    // injected into this component.
    function CarPartsComponent(racingDataService) {
        this.racingDataService = racingDataService;
        this.date = new Date('2512-07-03T20:00:00');
    }
    CarPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set local this.carParts array equal to data we received 
        // from the service
        this.racingDataService.getCarParts()
            .subscribe(function (carParts) { return _this.carParts = carParts; });
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        var sum = 0;
        if (Array.isArray(this.carParts)) {
            for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
                var carPart = _a[_i];
                sum += carPart.inStock;
            }
        }
        return sum;
    };
    CarPartsComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock)
            carPart.quantity++;
    };
    CarPartsComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity != 0)
            carPart.quantity--;
    };
    CarPartsComponent = __decorate([
        core_1.Component({
            selector: 'car-parts',
            templateUrl: 'app/car-parts/car-parts.component.html',
            styleUrls: ['app/car-parts/car-parts.component.css']
        }), 
        __metadata('design:paramtypes', [racing_data_service_1.RacingDataService])
    ], CarPartsComponent);
    return CarPartsComponent;
}());
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map