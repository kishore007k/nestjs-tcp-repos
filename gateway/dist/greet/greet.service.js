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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let GreetService = class GreetService {
    constructor(client, hybridClient) {
        this.client = client;
        this.hybridClient = hybridClient;
    }
    async getHello() {
        return await new Promise((resolve, reject) => {
            this.client.send({ cmd: "greet" }, {}).subscribe({
                next: (data) => resolve(data),
                error: (err) => reject(err),
                complete: () => resolve(null),
            });
        });
    }
    async getMessage() {
        return await new Promise((resolve, reject) => {
            this.hybridClient.send({ cmd: "send_message" }, {}).subscribe({
                next: (data) => resolve(data),
                error: (err) => reject(err),
                complete: () => resolve(null),
            });
        });
    }
};
exports.GreetService = GreetService;
exports.GreetService = GreetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("AUTH")),
    __param(1, (0, common_1.Inject)("HYBRID_MESSAGE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], GreetService);
//# sourceMappingURL=greet.service.js.map