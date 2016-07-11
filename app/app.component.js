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
var car_parts_component_1 = require('./car-parts/car-parts.component');
var racing_data_service_1 = require('./car-parts/racing-data.service');
var AppComponent = (function () {
    function AppComponent() {
        // don't use var or let to declare class properties
        this.title = 'Ultra Racing';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t\t<h3>{{date | date:'MMM d, y, h:mm a'}}</h3>\n\t\t<car-parts></car-parts>",
            directives: [car_parts_component_1.CarPartsComponent],
            providers: [racing_data_service_1.RacingDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map