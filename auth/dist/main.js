"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: "localhost",
            retryAttempts: 5,
            retryDelay: 3000,
            port: 3001,
        },
    });
    const logger = new common_1.Logger(bootstrap.name);
    await app.listen();
    logger.log(`Auth Microservice listening 🪄`);
}
bootstrap();
//# sourceMappingURL=main.js.map