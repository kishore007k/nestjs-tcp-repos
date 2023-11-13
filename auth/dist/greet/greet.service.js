"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetService = void 0;
const common_1 = require("@nestjs/common");
let GreetService = class GreetService {
    getHello() {
        return "Hello World!";
    }
    greetHybrid() {
        return "Welcome to Hybrid Microservice🤗";
    }
};
exports.GreetService = GreetService;
exports.GreetService = GreetService = __decorate([
    (0, common_1.Injectable)()
], GreetService);
//# sourceMappingURL=greet.service.js.map