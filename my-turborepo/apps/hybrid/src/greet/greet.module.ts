import { Module } from "@nestjs/common";
import { GreetController } from "./greet.controller";
import { GreetService } from "./greet.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
	imports: [
		ClientsModule.register([
			{
				name: "HYBRID_HELLO",
				transport: Transport.TCP,
				options: {
					host: process.env.HOST || "localhost",
					port: 3001,
				},
			},
		]),
	],
	controllers: [GreetController],
	providers: [GreetService],
})
export class GreetModule {}
