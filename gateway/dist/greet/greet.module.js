"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetModule = void 0;
const common_1 = require("@nestjs/common");
const greet_controller_1 = require("./greet.controller");
const greet_service_1 = require("./greet.service");
const microservices_1 = require("@nestjs/microservices");
let GreetModule = class GreetModule {
};
exports.GreetModule = GreetModule;
exports.GreetModule = GreetModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "AUTH",
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST || "localhost",
                        port: 3001,
                    },
                },
                {
                    name: "HYBRID_MESSAGE",
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST || "localhost",
                        port: 3002,
                    },
                },
            ]),
        ],
        controllers: [greet_controller_1.GreetController],
        providers: [greet_service_1.GreetService],
    })
], GreetModule);
//# sourceMappingURL=greet.module.js.map