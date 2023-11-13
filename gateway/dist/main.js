"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger(bootstrap.name);
    const port = (process.env.NODE_ENV && process.env.PORT) || 3000;
    await app.listen(port, () => {
        logger.log(`Gateway is running on http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map