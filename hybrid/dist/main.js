"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: "localhost",
            retryAttempts: 5,
            retryDelay: 3000,
            port: 3002,
        },
    });
    await app.startAllMicroservices();
    await app.listen(3005, () => {
        logger.log("Hybrid Server is running on http://localhost:3005");
    });
}
bootstrap();
//# sourceMappingURL=main.js.map