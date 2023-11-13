import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
	const logger = new Logger();

	const app = await NestFactory.create(AppModule);

	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.TCP,
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
