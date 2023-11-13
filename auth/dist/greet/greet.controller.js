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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetController = void 0;
const common_1 = require("@nestjs/common");
const greet_service_1 = require("./greet.service");
const microservices_1 = require("@nestjs/microservices");
let GreetController = class GreetController {
    constructor(greetService) {
        this.greetService = greetService;
    }
    getHello() {
        return this.greetService.getHello();
    }
    greetHybrid() {
        return this.greetService.greetHybrid();
    }
};
exports.GreetController = GreetController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "greet" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GreetController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "greet_hybrid" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GreetController.prototype, "greetHybrid", null);
exports.GreetController = GreetController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [greet_service_1.GreetService])
], GreetController);
//# sourceMappingURL=greet.controller.js.map