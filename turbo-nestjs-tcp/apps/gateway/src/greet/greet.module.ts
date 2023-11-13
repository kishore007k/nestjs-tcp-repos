import { Module } from "@nestjs/common";
import { GreetController } from "./greet.controller";
import { GreetService } from "./greet.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
	imports: [
		ClientsModule.register([
			{
				name: "AUTH",
				transport: Transport.TCP,
				options: {
					host: process.env.HOST || "localhost",
					port: 3001,
				},
			},
			{
				name: "HYBRID_MESSAGE",
				transport: Transport.TCP,
				options: {
					host: process.env.HOST || "localhost",
					port: 3002,
				},
			},
		]),
	],
	controllers: [GreetController],
	providers: [GreetService],
})
export class GreetModule {}
